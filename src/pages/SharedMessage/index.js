import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Row, Col, Form, Button } from 'react-bootstrap'
import micro from '../../assets/mic-24px.svg'
import Record from '../../components/Record'
import photoCamera from '../../assets/photo_camera-24px.svg'
import video from '../../assets/videocam-24px.svg'
import Webcam from 'react-webcam'
import './style.scss'


const SharedMessage = (props) => {
    const { t } = useTranslation()
    const [recordType, setRecordType] = useState(localStorage.getItem('recordType'))
    const [recordedFile, setRecordedFile] = React.useState(null)
    const [shareText, setShareText] = React.useState(null)
    let typeMessage = localStorage.getItem('recordType')

    if(!typeMessage) {
        localStorage.removeItem('recordType')
        localStorage.removeItem('role')
        props.history.push('/')
    }

    const changeType = (type) => () => {
        localStorage.setItem('recordType', type)
        setRecordType(type)
    }

    return (
        <div className="shared-message-container">
            <Row style={{ justifyContent: 'center', marginTop: '110px' }}>
                <div className="text-align-center">
                    <h1 className="grey-title">{t('sharedMessage.title')}</h1>
                    {recordType === 'text' && (
                        <div>
                            <h4 className="message-box">{t('sharedMessage.message')}</h4>
                            <Form.Control as="textarea" row="2" onChange={(e) => setShareText(e.targ)} />
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
                                <Record type={'video'} onFinished={console.log('here')}/>
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
                                <Record type={'audio'} onFinished={console.log('here')}/>
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
        </div>
    )
}

export default SharedMessage 