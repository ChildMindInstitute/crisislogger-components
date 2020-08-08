import React, { useState } from 'react'
//import { useTranslation } from 'react-i18next'
import {
    Row,
    Col,
    Button,
    Alert,
    Spinner,
    InputGroup,
    FormControl
} from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Modal from 'react-bootstrap/Modal'
import WordCloudComponent from "../../../components/wordCloudComponent";
import ReactPlayer from 'react-player'
import config from '../../../config'
import Utils from '../../../util/Utils'
import LeftImage from '../../../assets/left-arrow.png'
import RightImage from '../../../assets/next.png'
import Swal from 'sweetalert2'
import { getGalleries } from '../../../redux/thunks/data.thunk'
import "./style.scss"

const Explore = (props) => {
    const [dataLoading, setDataLoading] = React.useState(true)
    const [searchText, setSearchText] = React.useState('')
    const utils = new Utils();
    React.useEffect(() => {
        props.loadData(props.current_page, searchText)
        setDataLoading(true)
    }, [dataLoading]);
    const search = () => {
        setDataLoading(false)
    }
    const nextPage = () => {
        if (props.current_page < props.total) {
            props.loadData(props.current_page + 1, searchText);
        }
    }

    const previousPage = () => {
        if (props.current_page > 1) {
            props.loadData(props.current_page - 1, searchText);
        }
    }
    const { loading, error, data } = props
    return (
        <div className={'user-dashboard-container'}>
            <div style={{ display: 'flex', flexDirection: 'row', flex: 1, marginTop: 30 }}>
                {/*<span style={{width: 170, marginLeft: 50}}/>*/}
                <span style={{ color: '#6e6e6e', fontSize: 30, flex: 1 }} className={'mobile-show'}>
                    CrisisLogger Gallery
                </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', flex: 1, marginBottom: 30 }}>
                {/*<span style={{width: 170, marginLeft: 50}}/>*/}

                <span style={{ color: '#6e6e6e', fontSize: 14, flex: 1 }}>
                    ---- A selection of recordings posted publicly ----
                </span>
            </div>
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
            <br></br>
            <Col xs={12} md={6} lg={4} xl={3} style={{ padding: 'unset' }}>
                <div >
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder=""
                            aria-label="search"
                            aria-describedby="basic-addon2"
                            value={searchText}
                            onChange={(e) => {
                                setSearchText(e.target.value)
                            }}
                        />
                        <InputGroup.Append>
                            <Button onClick={() => search()} className="default-outline-btn" variant="outline-default">Search</Button >
                        </InputGroup.Append>
                    </InputGroup>
                </div>
            </Col>
            <Row>
                {data.length > 0 ?
                    data.map((value, index) => {
                        let isVideo = value.name.split(".")[1] === 'webm' || value.name.split(".")[1] === 'mkv' || value.name.split(".")[1] === 'mp4';
                        let videoExtension = value.name.split(".")[1];
                        return (
                            <Col xs={12} sm={6} md={4} lg={3} xl={3} style={{ marginTop: 20, padding: '0 10px' }} key={index}>
                                <div style={{ borderRadius: 14, overflow: 'hidden', backgroundColor: '#fafafa', boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.35)', }}>
                                    {
                                        value.text ?
                                            <WordCloudComponent text={value.text} words={Utils.getWords(value.text)} type={'uploads'} />
                                            : <h4 style={{ textAlign: 'center' }}>No transcriptions</h4>
                                    }
                                    <div style={{ flexGrow: 1 }} />
                                    {
                                        isVideo ?
                                        value.name != 'null' && <ReactPlayer
                                            width={'100%'}
                                            height={205}
                                            style={{ margin: 0 }}
                                            controls={true}
                                            muted={false}
                                            url={[
                                                { src: config.googleBucketURL + value.name, type: 'video/' + videoExtension },
                                            ]}
                                        />
                                        :
                                        value.name != 'null' && <div>
                                            <ReactPlayer height={50} width={'100%'} url={config.googleBucketURL + value.name} controls={true} />
                                        </div>
                                    }
                                    <div style={{ flex: 1, marginTop: 10, textAlign: 'center' }}>
                                        <p>{utils.getDate(value.created_at)}</p>
                                    </div>
                                </div>
                            </Col>
                        )
                    })
                    :
                      null
                }
                {
                    !loading && !data.length && <Alert color="warning" variant={'warning'} style={{ margin: '0 auto' }}>
                        {'No records are found'}
                    </Alert>
                }
            </Row>
            {
                !loading? <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
                    <div onClick={() => previousPage()} style={{ backgroundColor: '#6e6e6e', width: 35, height: 35, borderRadius: 35, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                        <img style={{ width: 12, height: 12 }} src={LeftImage} />
                    </div>
                    <div style={{ marginRight: 30, marginLeft: 30 }}>{props.current_page} of {props.total}</div>
                    <div onClick={() => nextPage()} style={{ backgroundColor: '#6e6e6e', width: 35, height: 35, borderRadius: 35, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                        <img style={{ width: 12, height: 12 }} src={RightImage} />
                    </div>
                </div> : null
            }
        </div>
    )
}
const mapDispatchToProps = (dispatch) => ({
    loadData: bindActionCreators(getGalleries, dispatch),
})
const mapStateToProps = state => {
    return {
        data: state.recordData.galleries,
        loading: state.recordData.loading,
        loaded: state.recordData.loaded,
        error: state.recordData.error,
        current_page: state.recordData.current_page,
        total: state.recordData.total,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Explore)