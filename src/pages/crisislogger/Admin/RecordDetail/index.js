import React,{useState} from 'react'
import { useTranslation } from 'react-i18next'
import { Row, Col, Form, Alert, Spinner,InputGroup,FormControl,Button } from 'react-bootstrap'
import WordCloudComponent from '../../../../components/wordCloudComponent';
import ReactPlayer from 'react-player'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getRecordsById, updateRecordApprove,updateRecordPublish } from '../../../../redux/thunks/admin.thunk'
import Utils from '../../../../util/Utils'
import Swal from 'sweetalert2'
import config from '../../../../config'
import "./style.scss"
import { Table } from 'react-bootstrap';
import { prop } from 'ramda';
import Moment from 'react-moment';
import queryString from 'querystring'
import * as QueryString from 'query-string'
import { useParams } from 'react-router-dom';
import {ApproveCheck} from "../../../../components/ApproveCheck";
import {PublishCheck} from "../../../../components/PublishCheck";
// import {PublishCheck} from "../../../../components/PublicCheck";

const RecordDetails = (props) => {
    const { t } = useTranslation();
    const subDomainStr = new Utils().getsubDomain()+ '.adminDetails'
    const [dataLoading, setDataLoading] = React.useState(true)
    const {ids,type} = QueryString.parse(props.location.search)
    console.log(ids)
    React.useEffect(() => {
        props.getRecord(ids,type)
        setDataLoading(true)
    }, [dataLoading]);
    const [form,setForm] = useState({
            approveCheck:false,
            publishedCheck:false
    })
    const [firsLoad,setFirstLoad] = useState(false)
    const changeValue = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
        // this.setState({ [e.target.name]: e.target.value })
    }   
    const handleApproveChange = (id)=>{
        props.updateRecordApprove(id,type)
    }
    const handlePublishChange = (id)=>{
        props.updateRecordPublish(id)
        setForm({
            ...form,
            publishedCheck:!form.publishedCheck,
        })
    }
    function isVideo(record){
        if(record.name != undefined && (record.name.split(".")[1] === 'webm' || record.name.split(".")[1] === 'mkv' || record.name.split(".")[1] === 'mp4')){
            return true
        }
        return false
    }
    function isAudio(record){
        if(record.name != undefined && (record.name.split(".")[1] === 'wav')){
            return true
        }
        return false
    }
    function isText(record){
        if(record.text != undefined){
            return true
        }
        return false
    }
    function renderUserProperty(object,property){
        if(isVideo(object) || isAudio(object)){
            if(object.user){
                return object.user[property]
            }
        }else{
            if(object.user_id){
                return object.user_id[property]
            }
        }
    }
    function renderTextHeader(record){
        console.log(record)
        if(record.text || (record.transcripts != undefined)){
            return  <th>{"Text"}</th>
        }
        return null
    }

    function renderText(record){
        if(record.text){
            return (<td>{record.text}</td>)
        }else if(record.transcripts){
            return <td>
                <div>
                    {record.transcripts.text}
                </div>
                <div>
                    <PublishCheck
                        initialValue={record.published}
                        onPublishChange={handlePublishChange}
                        id={record._id}
                    />
                </div>
            </td>
        }
        return <td></td>
    }

    function renderUpload(object){
            if(isVideo(object)){
                return(
                    <td>
                    <div>
                        <ReactPlayer
                            width={150}
                            height={150}
                            style={{ margin: 0 }}
                            controls={true}
                            muted={false}
                            url={[
                                { src: config.googleBucketURL + object.name, type: 'video/' + object.name.split(".")[1] },
                            ]}
                        />
                </div>
                    </td>
                )
                
            }else{
                return(
                    <td>
                        <div>
                            <ReactPlayer height={50} width={300} url={config.googleBucketURL + object.name} controls={true} />
                        </div>
                    </td>
                )
            }
    }
    let record = props.records
    if(record == null){
        return <div>Record loading...</div>
    }
    if(!firsLoad){
        setForm({
            ...form,
            approveCheck:record.approved,
            publishedCheck:record.published
        })
        setFirstLoad(true)
    }
    function renderNameOrEmail(record,attr){
        if(isVideo(record) || isAudio(record)) {
            if(record.user){
                return record.user[attr]
            }
        }else {
            if(record.user_id){
                return  record.user_id[attr]
            }
        }
    }

    return (
            <div className="upload-detail-container">
                <div>
                    <Table style={{textAlign:'center'}}  bordered >
                        <thead>
                        <tr>
                            <th>{t(subDomainStr + ".body.idLabel")}</th>
                            <th>{t(subDomainStr + ".body.dateLabel")}</th>
                            {props.records.length > 0 && (isVideo(props.records[0]) || isAudio(props.records[0]))?(<th>{t(subDomainStr + ".body.uploadLabel")}</th>):null }
                            <th>{"Text"}</th>
                            <th>{t(subDomainStr + ".body.usernameLabel")}</th>
                            <th>{t(subDomainStr + ".body.emailLabel")}</th>
                            <th>{t(subDomainStr + ".body.domainLabel")}</th>

                        </tr>
                        </thead>
                        <tbody>
                        {props.records.map(record=>(
                            <tr>
                                <td>{record._id}
                                    <ApproveCheck
                                        intialValue={record.approved}
                                        onApproveChange={handleApproveChange}
                                        id={record._id}
                                    />
                                </td>
                                <td><Moment format="YYYY-MM-DD">{record.created_at}</Moment></td>
                                {
                                    isVideo(props.records[0]) || isAudio(props.records[0])?renderUpload(record):null
                                }
                                {
                                    renderText(record)
                                }
                                <td>{renderNameOrEmail(record,"name")}</td>
                                <td>{renderNameOrEmail(record,"email")}</td>
                                <td>{record.where_from}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>


                </div>
            </div>
    )
    
}
const mapDispatchToProps = (dispatch) => ({
    getRecord: bindActionCreators(getRecordsById, dispatch),
    updateRecordApprove:bindActionCreators(updateRecordApprove,dispatch),
    updateRecordPublish:bindActionCreators(updateRecordPublish,dispatch)
})
const mapStateToProps = state => {
    console.log("Admin Data>>>",state.adminData)
    return {
        records: state.adminData.singleRecord,
        loading: state.adminData.loading,
        loaded: state.adminData.loaded,
        error: state.adminData.error,

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RecordDetails)