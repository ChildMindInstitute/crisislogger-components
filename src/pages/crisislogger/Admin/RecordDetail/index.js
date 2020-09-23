import React,{useState} from 'react'
import { useTranslation } from 'react-i18next'
import { Row, Col, Form, Alert, Spinner,InputGroup,FormControl,Button } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getRecordById, updateRecordApprove,updateRecordPublish } from '../../../../redux/thunks/admin.thunk'
import Utils from '../../../../util/Utils'
import config from '../../../../config'
import "./style.scss"
import Moment from 'react-moment';
import * as QueryString from 'query-string'
const RecordDetails = (props) => {
    const { t } = useTranslation();
    const subDomainStr = new Utils().getsubDomain()+ '.adminDetails'
    const [dataLoading, setDataLoading] = React.useState(true)
    const {id,type} = QueryString.parse(props.location.search)
    React.useEffect(() => {
        props.getRecord(id,type)
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
    const handleApproveChange = (e)=>{
        props.updateRecordApprove(id,type)
        setForm({
            ...form,
            approveCheck:!form.approveCheck,
        })
    }
    const handlePublishChange = (e)=>{
        props.updateRecordPublish(id)
        setForm({
            ...form,
            publishedCheck:!form.publishedCheck,
        })
    }
    function isVideo(record){
        if(record.name !== undefined && (record.name.split(".")[1] === 'webm' || record.name.split(".")[1] === 'mkv' || record.name.split(".")[1] === 'mp4')){
            return true
        }
        return false
    }
    function isAudio(record){
        if(record.name !== undefined && (record.name.split(".")[1] === 'wav')){
            return true
        }
        return false
    }
    function isText(record){
        if(record.text !== undefined){
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
    function renderUpload(object){
        if(isAudio(object) || isVideo(object)){
            if(isVideo(object)){
                return(
                    <div>
                    <Row className="detail-row">
                        <Col lg={2}>
                            <div className={"subheading"}>{t(subDomainStr + ".body.uploadLabel")}</div>
                        </Col>
                        <Col>
                        <ReactPlayer
                            width={'60%'}
                            height={205}
                            style={{ margin: 0 }}
                            controls={true}
                            muted={false}
                            url={[
                                { src: config.googleBucketURL + object.name, type: 'video/' + object.name.split(".")[1] },
                            ]}
                        />
                        </Col>
                    </Row>
                    <Row className="detail-row">
                        <Col lg={2}>
                            <div className={"subheading"}></div>
                        </Col>
                        <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                            <InputGroup.Checkbox checked={form.approveCheck} onChange={(e)=>handleApproveChange(e)} />
                                </InputGroup.Prepend>
                                <div style={{marginLeft:'20px'}}>{form.approveCheck?"Approved":"Approve"} for public gallery</div>
                            </InputGroup>
                        </Col>
                    </Row>
                    {object.transcripts!=undefined?(
                        <div>
                            <Row className="detail-row">
                                <Col lg={2}>
                                    <div className={"subheading"}>Text</div>
                                </Col>
                                <Col>
                                    <div>{object.transcripts.text}</div>
                                </Col>
                            </Row>
                            <Row className="detail-row">
                                <Col lg={2}>
                                    <div className={"subheading"}></div>
                                </Col>
                                <Col>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                    <InputGroup.Checkbox checked={form.publishedCheck} onChange={(e)=>handlePublishChange(e)}/>
                                    </InputGroup.Prepend>
                    <div style={{marginLeft:"10px"}}>{form.publishedCheck?"Published":"Not Published"}</div>
                                </InputGroup>
                                </Col>
                            </Row>
                        </div>
                    ):null}
                    
                </div>
                )
                
            }else{
                return(
                    <div>
                    <Row className="detail-row">
                        <Col lg={2}>
                            <div className={"subheading"}>{t(subDomainStr + ".body.uploadLabel")}</div>
                        </Col>
                        <Col>
                        <ReactPlayer height={50} width={'100%'} url={config.googleBucketURL + object.name} controls={true} />
                        </Col>
                    </Row>
                    <Row className="detail-row">
                        <Col lg={2}>
                            <div className={"subheading"}></div>
                        </Col>
                        <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                            <InputGroup.Checkbox checked={form.approveCheck} onChange={(e)=>handleApproveChange(e)} aria-label="Checkbox for following text input" />
                                </InputGroup.Prepend>
                                <div style={{marginLeft:'20px'}}>{form.approveCheck?"Approved":"Approve"} for public gallery</div>
                            </InputGroup>
                        </Col>
                    </Row>
                    {
                       object.transcripts!=undefined?(
                        <div>
                        <Row className="detail-row">
                            <Col lg={2}>
                                <div className={"subheading"}>Text</div>
                            </Col>
                            <Col>
                                <div>{object.transcripts.text}</div>
                            </Col>
                        </Row>
                        <Row className="detail-row">
                                <Col lg={2}>
                                    <div className={"subheading"}></div>
                                </Col>
                                <Col>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                    <InputGroup.Checkbox checked={form.publishedCheck} onChange={(e)=>handlePublishChange(e)}/>
                                    </InputGroup.Prepend>
                                    <div style={{marginLeft:"10px"}}>{form.publishedCheck?"Published":"Publish"}</div>
                                </InputGroup>
                                </Col>
                            </Row>
                        </div>
                       ):null 
                    }
                    
                </div>
                )
            }
        }else{
            return(
                <Row className="detail-row">
                    <Col lg={2}>
                        <div className={"subheading"}>Text</div>
                    </Col>
                    <Col>
            <div>{object.text}</div>
                    </Col>
                </Row>
            )
        }
    }
    let record = props.singleRecord
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
    return (
        <div className="upload-detail-container">
            <div>
            <Row className="detail-row">
                <Col lg={2}>
                    <div className={"subheading"}>{t(subDomainStr + ".body.idLabel")}</div>
                </Col>
                <Col>
    <div>{record._id}</div>
                </Col>
            </Row>
            <Row className="detail-row">
                <Col lg={2}>
                    <div className={"subheading"}>{t(subDomainStr + ".body.dateLabel")}</div>
                </Col>
                <Col>
    <div>{<Moment format="YYYY-MM-DD">{record.created_at}</Moment>}</div>
                </Col>
            </Row>
            
            {renderUpload(record)}
            
            <Row className="detail-row">
                <Col lg={2}>
                    <div className={"subheading"}>{t(subDomainStr + ".body.usernameLabel")}</div>
                </Col>
                <Col>
    <div>{renderUserProperty(record,"name")}</div>
                </Col>
            </Row>
            <Row className="detail-row">
                <Col lg={2}>
                    <div className={"subheading"}>{t(subDomainStr + ".body.emailLabel")}</div>
                </Col>
                <Col>
                <div>{renderUserProperty(record,"email")}</div>
                </Col>
            </Row>
            <Row className="detail-row">
                <Col lg={2}>
                    <div className={"subheading"}>{t(subDomainStr + ".body.domainLabel")}</div>
                </Col>
                <Col>
    <div>{record.where_from}</div>
                </Col>
            </Row>
            </div>
        </div>
    )
    
}
const mapDispatchToProps = (dispatch) => ({
    getRecord: bindActionCreators(getRecordById, dispatch),
    updateRecordApprove:bindActionCreators(updateRecordApprove,dispatch),
    updateRecordPublish:bindActionCreators(updateRecordPublish,dispatch)
})
const mapStateToProps = state => {
    return {
        singleRecord: state.adminData.singleRecord,
        loading: state.adminData.loading,
        loaded: state.adminData.loaded,
        error: state.adminData.error,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RecordDetails)