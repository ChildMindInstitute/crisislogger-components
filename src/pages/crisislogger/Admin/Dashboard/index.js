import React,{useState} from 'react'
import { useTranslation } from 'react-i18next'
import { Row, Col, Form, Alert, Spinner,InputGroup,FormControl,Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Utils from '../../../../util/Utils'
import "./style.scss"
import { Table } from 'react-bootstrap';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { getAllUploads,downloadCsv } from '../../../../redux/thunks/admin.thunk';
import queryString from 'query-string'
const AdminDashboard = (props) => {
    const { t } = useTranslation();
    const subDomainStr = new Utils().getsubDomain()+ '.adminDashboard'
    const domain = window.location.host
    const [dataLoading, setDataLoading] = React.useState(true)
    
    React.useEffect(() => {
        props.loadAllData(queryString.stringify({domain}))
        setDataLoading(true)
    }, [dataLoading]);
    const [form,setForm] = useState({
            usersIncluded:"",
            usersExcluded:"",
            searchText:"",
            refferalCode:"",
            query:"",
            dateStart:"",
            dateEnd:""
    })
    const changeValue = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
        // this.setState({ [e.target.name]: e.target.value })
    }
    const handleApplyPress=()=>{
        let data = {}
        if(form.usersIncluded.trim() != ""){
            data = {
                usersIncluded:form.usersIncluded
            }
        }
        if(form.usersExcluded.trim() != ""){
            data = {
                ...data,
                usersExcluded:form.usersExcluded
            }
        }
        if(form.searchText.trim() != ""){
            data = {
                ...data,
                searchText:form.searchText
            }
        }
        if(form.refferalCode.trim() != ""){
            data = {
                ...data,
                refferalCode:form.refferalCode
            }
        }
        if(form.dateStart.trim() != ""){
            data = {
                ...data,
                dateStart:form.dateStart
            }
        }
        if(form.dateEnd.trim() != ""){
            data = {
                ...data,
                dateEnd:form.dateEnd
            }
        }
        data={
            ...data,
            domain
        }
        props.loadAllData(queryString.stringify(data))
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
    const mapRows=(object)=>{

        return(
            <tr key={object._id}>
        <td><Moment format="YYYY-MM-DD">{object.created_at}</Moment></td>        
        <td>{isVideo(object)?(<div><span style={{color:'green'}}>{isPublicAndApproved(object)?1:0}</span> <span style={{color:'red'}}>{isPublicAndRejectApproved(object)?1:0}</span> <Link style={{color:'grey'}} to={{pathname:"admin/record",search: `?id=${object._id}`+'&type=media'}}><span>(<span>{object.share}</span>)</span></Link></div>) :""}</td>
        <td>{isAudio(object)?(<div><span style={{color:'green'}}>{isPublicAndApproved(object)?1:0}</span> <span style={{color:'red'}}>{isPublicAndRejectApproved(object)?1:0}</span> <Link style={{color:'grey'}} to={{pathname:"admin/record",search: `?id=${object._id}`+'&type=media'}}><span>(<span>{object.share}</span>)</span></Link></div>) :""}</td>
        <td>{isText(object)?(<div><span style={{color:'green'}}>{isPublicAndApproved(object)?1:0}</span> <span style={{color:'red'}}>{isPublicAndRejectApproved(object)?1:0}</span> <Link style={{color:'grey'}} to={{pathname:"admin/record",search: `?id=${object._id}`+'&type=text'}}><span>(<span>{object.share}</span>)</span></Link></div>) :""}</td>
            </tr>
        )
    }
    const isPublicAndApproved=(object)=>{
        if(object.hide && object.approved){
            return true
        }
        return false
    }
    const isPublicAndRejectApproved = (object)=>{
        if(object.hide && !object.approved){
            return true
        }
        return false
    }
    const getCsvData = ()=>{
        downloadCsv(queryString.stringify({domain}))
    }
    return (
        <div className="admin-dashboard-container">
            <div>
                <Row>
                    <Col lg={4}>{t(subDomainStr +".form.includeUserLabel")}</Col>
                    <Col >
                    <InputGroup className="mb-3">
                            <FormControl
                            value={form.usersIncluded}
                            onChange={changeValue}
                            placeholder={t(subDomainStr + ".form.includeUserPlaceHodler")}
                            name={"usersIncluded"}
                            />
                    </InputGroup>

                    </Col>
                </Row>
                <Row >
                <Col lg={4}>{t(subDomainStr +".form.excludeUserLabel")}</Col>
                    <Col >
                    <InputGroup className="mb-3">
                            <FormControl
                            value={form.usersExcluded}
                            onChange={changeValue}
                            placeholder={t(subDomainStr + ".form.excludeUserPlaceHolder")}
                            name={"usersExcluded"}
                            />
                    </InputGroup>

                    </Col>
                </Row>
                <Row >
                <Col lg={4}>{t(subDomainStr +".form.searchTextLabel")}</Col>
                    <Col >
                    <InputGroup className="mb-3">
                            <FormControl
                            value={form.searchText}
                            onChange={changeValue}
                            placeholder={t(subDomainStr + ".form.searchTextPlaceHolder")}
                            name={"searchText"}
                            />
                    </InputGroup>

                    </Col>
                </Row>
                <Row >
                <Col lg={4}>{t(subDomainStr +".form.referralCodeText")}</Col>
                    <Col >
                    <InputGroup className="mb-3">
                            <FormControl
                            value={form.refferalCode}
                            onChange={changeValue}
                            placeholder={t(subDomainStr + ".form.referralCodePlaceholder")}
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            name={"refferalCode"}
                        />
                    </InputGroup>

                    </Col>
                </Row>
                <Row >
                <Col lg={4}>{t(subDomainStr +".form.queryLabel")}</Col>
                    <Col >
                    <InputGroup className="mb-3">
                            <FormControl
                            value={props.filter!=null?(JSON.stringify(props.filter)):""}
                            onChange={changeValue}
                            as={"textarea"}
                            rows={2}
                            disabled
                            name={"query"}
                        />
                    </InputGroup>

                    </Col>
                </Row>
                
                <Row>
                <Col lg={4}>{t(subDomainStr +".form.dateRangeLabel")}</Col>
                    <Col lg={8}>
                        <Row>
                            <Col sm style={{paddingLeft:0}}>
                                <InputGroup className="mb-3">
                                    <FormControl
                                    value={form.dateStart}
                                    onChange={changeValue}
                                    type={"date"}
                                    name={"dateStart"}
                                    />
                                </InputGroup>
                            </Col>
                            <Col sm={6}  style={{paddingRight:0}}>
                                <InputGroup className="mb-3">
                                    <FormControl
                                    value={form.dateEnd}
                                    onChange={changeValue}
                                    type={"date"}
                                    placeholder="Username"
                                    name={"dateEnd"}
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <Button onClick={handleApplyPress} variant="secondary">{t(subDomainStr+".form.applyBtn")}</Button>
                    </Col>
                </Row>
                <Row>
                    <Col style={{textAlign:'left'}}>
                        <div>
                            <span className={"public-approve-color"}>---</span> : Public and approved status by admin
                        </div>
                        <div>
                            <span className={"public-rejected-color"}>---</span> : Public and rejected status by admin
                        </div>
                        <div>
                            <span className={"share-color"}>---</span> : Private by user
                        </div>
                    </Col>
                </Row>
            </div>
            {/* Data Table content */}
            <div className={"table-container"}>
                <div className="row">
                    <Col>
                    <Button onClick={getCsvData}>Download Csv</Button>
                    {/* <CSVLink onClick={downloadCsv}>Export Data</CSVLink> */}
                    <div className="csv-text">- The export options is public + accepted + "contributed to science"</div>
                    </Col>
                    
                </div>
                <div>
                <Table style={{textAlign:'center'}}  bordered >
                    <thead>
                        <tr>
                            <th>{t(subDomainStr + ".table.thead.date")}</th>
                            <th>{t(subDomainStr + ".table.thead.video")}</th>
                            <th>{t(subDomainStr + ".table.thead.audio")}</th>
                            <th>{t(subDomainStr + ".table.thead.text")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map(object=>(
                            mapRows(object)    
                        ))}
                    </tbody>
                </Table>
                </div>
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => ({
    loadAllData: bindActionCreators(getAllUploads, dispatch),
})
const mapStateToProps = state => {
    console.log("Admin Data>>>",state.adminData)
    return {
        data: state.adminData.data,
        loading: state.adminData.loading,
        loaded: state.adminData.loaded,
        error: state.adminData.error,
        filter:state.adminData.filter

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard)