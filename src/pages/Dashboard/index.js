import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import WordCloudComponent from "../../components/wordCloudComponent";
import ReactPlayer from 'react-player'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getRecordData } from '../../redux/thunks/data.thunk'
import Swal from 'sweetalert2'
import "./style.scss"
import FontAwesome from 'react-fontawesome';

const Dashboard = (props) => {
    const [dataLoading, setDataLoading] = React.useState(false)
    console.log(props)
    React.useEffect(() => {
        props.loadData()
        setDataLoading(true)
    }, [dataLoading]);
    const { loading, error, data } = props
    const { uploads, texts } = data
    const bottomBtnStyle = {
        display: 'flex',
        textAlign: 'center'
    }
    const handleContribute = (type, id) => {
        console.log(type, id)
    }
    const handleShare = (type, id ) => {
        console.log(type, id)
    }
    const handleDelete = (type, id) => {
        console.log(type, id)
    }
    return (
        <div className={'user-dashboard-container'}>
            <div style={{ display: 'flex', flex: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
                <div>
                    {
                        loading && <Spinner animation="border" />
                    }
                </div>
            </div>
            {
                error ?
                    <Alert color="warning" variant={'danger'}>
                        {error}
                    </Alert>
                    : null
            }
            <h3>My Recordings</h3>
            <br></br>
            <Row>
                {uploads.length > 0 ?
                    uploads.map((value, index) => {
                        let isVideo = value.name.split(".")[1] === 'webm' || value.name.split(".")[1] === 'mkv' || value.name.split(".")[1] === 'mp4';
                        let videoExtension = value.name.split(".")[1];
                        return (
                            <Col xs={12} sm={6} md={4} lg={3} xl={3} style={{ marginTop: 20 }} key={index}>
                                <div style={{ borderRadius: 14, overflow: 'hidden', backgroundColor: '#fafafa', boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.35)', }}>
                                    <WordCloudComponent text={value.text} words={value.words} type={'uploads'} />
                                    <div style={{ flexGrow: 1 }} />
                                    {isVideo ?
                                        value.name != 'null' && value.share === 1 && <ReactPlayer
                                            width={'100%'}
                                            height={205}
                                            style={{ margin: 0 }}
                                            controls={true}
                                            muted={false}
                                            url={[
                                                { src: "https://storage.googleapis.com/crisislogger_uploads/" + value.name, type: 'video/' + videoExtension },
                                            ]}
                                        />
                                        :
                                        value.name != 'null' && value.share === 1 && <div>
                                            <ReactPlayer height={50} width={'100%'} url={"https://storage.googleapis.com/crisislogger_uploads/" + value.name} controls={true} />
                                        </div>
                                    }
                                    <div style={{ flex: 1, marginTop: 10, textAlign: 'center' }}>
                                        <p>{value.created_at}</p>
                                    </div>
                                    <div style={bottomBtnStyle}>
                                        <Form.Check
                                            style={{ flex: 1 }}
                                            checked={value.contribute_to_science}
                                            name="contribute"
                                            label="Contribute"
                                            onChange={() => handleContribute('upload', value._id)}
                                            id="check-contribute"
                                        />
                                        <Form.Check
                                            style={{ flex: 1 }}
                                            checked={value.share}
                                            name="share"
                                            label="Share"
                                            onChange={() => handleShare('upload', value._id)}
                                            id="check-share"
                                        />
                                        <Form.Check
                                            style={{ flex: 1 }}
                                            name="delete"
                                            label="Delete"
                                            onChange={() => handleDelete('upload', value._id)}
                                            id="check-share"
                                        />
                                    </div>
                                </div>
                            </Col>
                        )
                    })
                    :
                    <Alert color="warning" variant={'warning'} style={{ margin: '0 auto' }}>
                        {'No records are found'}
                    </Alert>
                }
            </Row>
            <h3>Texts</h3>
            <br></br>
            <Row>
                {
                    texts.length > 0 ?
                        texts.map((value, index) => {
                            return (
                                <Col xs={12} sm={6} md={4} lg={3} xl={3} style={{ marginTop: 20 }} key={index}>
                                    <div style={{ borderRadius: 14, overflow: 'hidden', backgroundColor: '#fafafa', boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.35)', }}>
                                        <WordCloudComponent text={value.text} words={[]} type={'text'} />
                                    </div>
                                    <div style={{ flex: 1, marginTop: 10, textAlign: 'center' }}>
                                        <p>{value.created_at}</p>
                                    </div>
                                    <div style={bottomBtnStyle}>
                                        <Form.Check
                                            style={{ flex: 1 }}
                                            checked={value.contribute_to_science}
                                            name="contribute"
                                            label="Contribute"
                                            onChange={() => handleContribute('text', value._id)}
                                            id="check-contribute"
                                        />
                                        <Form.Check
                                            style={{ flex: 1 }}
                                            checked={value.share}
                                            name="share"
                                            label="Share"
                                            onChange={() => handleShare('text', value._id)}
                                            id="check-share"
                                        />
                                        <Form.Check
                                            style={{ flex: 1 }}
                                            name="delete"
                                            label="Delete"
                                            onChange={() => handleDelete('text', value._id)}
                                            id="check-share"
                                        />
                                    </div>
                                </Col>
                            )
                        })
                        :
                        <Alert color="warning" variant={'warning'} style={{ margin: '0 auto' }}>
                            {'No texts are found'}
                        </Alert>
                }
            </Row>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => ({
    loadData: bindActionCreators(getRecordData, dispatch)
})
const mapStateToProps = state => {
    return {
        data: state.recordData.data,
        loading: state.recordData.loading,
        loaded: state.recordData.loaded,
        error: state.recordData.error
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)