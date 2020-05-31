import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Row, Col, Form, Button, Spinner } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fileUploadThunk, uploadText } from '../../redux/thunks/file.thunk'
import Record from '../../components/Record'
import UploadQuestionnaire from '../../components/Record/uploadQuestionnaire'
import "./style.scss"

const SharedMessage = (props) => {
    const { t } = useTranslation()
    const [recordType, setRecordType] = useState(localStorage.getItem('recordType'))
    const [recordedFile, setRecordedFile] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [shareText, setShareText] = React.useState('')
    const [secondModal, setSecondModal] = React.useState(false)
    const [formState, setFormState] = React.useState({
        contribute_to_science   : true,
        publicly: null,
        country: '',
        checkAge: false,
        errors: {}
    })
    let typeMessage = localStorage.getItem('recordType')
    const [cameraExist, setExistCamera] = React.useState(true)
    if(!typeMessage) {
        localStorage.removeItem('recordType')
        localStorage.removeItem('role')
        props.history.push('/')
    }
    const continueSubmite = () => {
          let formItem  = formState;
        let errors = []
        if(formItem.publicly == null )
        {
            errors['publicly'] = "You need to click above checkbox before continue"
            
        }
        if(formItem.checkAge == false)
        {
            errors['checkAge'] = "You need to click above checkbox before continue"
        }
        if(errors['checkAge'] || errors['publicly']) {
            setFormState({...formState, errors: errors})
            return false;
        }
        else {
            setFormState({...formState, errors: []})
        }
        setLoading(true)
        props.uploadText({ text: shareText, ...formState})
        setLoading(false)
    }
    const cancelSubmit = () => {
        setShareText('')
        setSecondModal(false)
    }
    const changeType = (type) => () => {
        localStorage.setItem('recordType', type)
        setRecordType(type)
    }
    const checkCamera = () => {
        setExistCamera(true)
    }

    const fileUpload = data => {
        console.log(data)
        props.uploadFile(data.file, data.formState)
    }

    const handleTextChange = (event) => {
        setShareText(event.target.value)
    }

    const submitText = () => {
        setSecondModal(true)
    }
    return (
        <div className="shared-message-container">
            <Row style={{ justifyContent: 'center', marginTop: '110px' }}>
                <div className="text-align-center">
                    <h1 className="grey-title">{t('sharedMessage.title')}</h1>
                    {recordType === 'text' && (
                        <div>
                            <h4 className="message-box">{t('sharedMessage.message')}</h4>
                            <Form.Control as="textarea" row="2" onChange={handleTextChange} />
                            {shareText.length > 1 && <Button style={{ marginTop: 10 }} onClick={submitText}>Submit</Button>}
                            <div className="grey-text" dangerouslySetInnerHTML={{ __html: t('sharedMessage.text')}}></div>
                            <div className="grey-text">
                                {t('sharedMessage.text2')}
                                    <div className="link-block" style={{ display: 'inline'}} onClick={changeType('video')}>
                                        {t('sharedMessage.recordVideo')}
                                    </div>
                                {t('sharedMessage.or')}
                                    <div className="link-block" style={{ display: 'inline'}} onClick={changeType('audio')}>
                                        {t('sharedMessage.recordAudio')}
                                    </div>
                                {t('sharedMessage.instead')}
                            </div>
                        </div>
                    )}
                    {recordType === 'video' && (
                        <div>
                            {
                                <Record type={'video'} onFinished={fileUpload} loading={props.loading}/>
                            }
                            <div className="grey-text" dangerouslySetInnerHTML={{ __html: t('sharedMessage.videoText')}}></div>
                            <div className="grey-text">
                                {t('sharedMessage.text2')}
                                    <div className="link-block" style={{ display: 'inline'}} onClick={changeType('audio')}>
                                        {t('sharedMessage.recordAudio')}
                                    </div>
                                {t('sharedMessage.or')}
                                    <div className="link-block" style={{ display: 'inline'}} onClick={changeType('text')}>
                                        {t('sharedMessage.typeText')}
                                    </div>
                                {t('sharedMessage.instead')}
                            </div>
                        </div>
                    )}
                    {recordType === 'audio' && (
                        <div>
                            {
                                <Record type={'audio'} onFinished={fileUpload} loading={props.loading}/>
                            }
                            <div className="grey-text" dangerouslySetInnerHTML={{ __html: t('sharedMessage.audioText')}}></div>
                            <div className="grey-text">
                                {t('sharedMessage.text2')}
                                    <div className="link-block" style={{ display: 'inline'}} onClick={changeType('video')}>
                                        {t('sharedMessage.recordVideo')}
                                    </div>
                                {t('sharedMessage.or')}
                                    <div className="link-block" style={{ display: 'inline'}} onClick={changeType('text')}>
                                        {t('sharedMessage.typeText')}
                                    </div>
                                {t('sharedMessage.instead')}
                            </div>
                        </div>
                    )}
                </div>
            </Row>
            <CustomModal
                visible={secondModal}
                body = {<UploadQuestionnaire setFormState={setFormState} formState={formState}/>}
                header="Upload File"
                buttons={
                    [
                        <Button variant={'secondary'} onClick={cancelSubmit}>Cancel</Button>,
                    <Button variant={'primary'} onClick={continueSubmite} disabled={props.loading}>
                        {props.loading ? <Spinner animation="border" />: '' }
                        Continue</Button>
                    ]
                }
            />
        </div>
    )
}
const CustomModal = ({ visible, body, header, buttons }) => {
    return (
        <Modal show={visible} onHide={() => console.log('')}>
            <Modal.Header closeButton>
                <Modal.Title>{header}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{body}</Modal.Body>
            <Modal.Footer>
                {buttons && buttons.map((button, index) => {
                    return (
                        <div key={index}>
                            {button}
                        </div>
                    )
                })
                }
            </Modal.Footer>
        </Modal>
    )
}
const mapstateToProps = (state) => {
      return {
        loading: state.file.loading,
        success: state.file.success,
        error: state.file.error,
      }
}
const mapDispatchToProps = (dispatch) => ({
    uploadFile: bindActionCreators(fileUploadThunk, dispatch),
    uploadText: bindActionCreators(uploadText, dispatch)
})

export default connect(mapstateToProps, mapDispatchToProps)(SharedMessage)