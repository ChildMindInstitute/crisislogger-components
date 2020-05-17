import React, { Component } from "react";
import VideoRecorder from 'react-video-recorder'
import { ReactMic } from 'react-mic'
import { Row, Col, Button } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import Modal from 'react-bootstrap/Modal'
import './style.css'
const Record = ({ type, onFinished }) => {
    const [recordStarted, setRecordStated] = React.useState(false)
    const [showModal, setShowModal] = React.useState(false)
    const [recordFile, setRecordFile] = React.useState(null)
    const [recordFileURL, setRecordFileURL] = React.useState(null)
    const webcamRef = React.useRef(null);
    const startRecording = () => {
        setRecordStated(true)
    }
    const stopRecording = () => {
        setRecordStated(false)
    }
    const onAudioData = (recordedBlob) => {

    }
    const videoRecordingFinished = (file) => {
        let url = URL.createObjectURL(file)
        setRecordFile(file)
        setRecordFileURL(url)
        stopRecording();
        setShowModal(true)
    }
    const onAudioStop = (recordedBlob) => {
        if (recordedBlob.blob === undefined) {
            return false;
        }
        let blob = recordedBlob.blob
        let url = URL.createObjectURL(blob)
        setRecordFile(recordedBlob)
        setRecordFileURL(url)
        stopRecording();
        setShowModal(true)
    }
    const deleteRecord = () => {
        setRecordFile(null)
        setRecordFileURL(null)
        setShowModal(false)
    }
    const uploadRecord = () => {
        setShowModal(false)
    }
    const space = {
        marginTop: 15,
        textAlign: 'center',
    }
    return (
        <div >
            <Row>
                {
                    type === 'video' ?
                        <div style={{ width: 480, margin: '0 auto' }}>
                            <VideoRecorder
                                ref={webcamRef}
                                onStartRecording={startRecording}
                                onRecordingComplete={(videoBlob) => videoRecordingFinished(videoBlob)}
                            />
                        </div>
                        :
                        <div style={{ margin: '0 auto' }}>
                            <ReactMic
                                record={recordStarted}
                                className="sound-wave"
                                onStop={onAudioStop}
                                onData={onAudioData}
                                mimeType="audio/wav"     // defaults -> "audio/webm".  Set to "audio/wav" for WAV or "audio/mp3" for MP3 audio format (available in React-Mic-Gold)
                                echoCancellation={false} // defaults -> false
                                autoGainControl={false}  // defaults -> false
                                noiseSuppression={false} // defaults -> false
                                channelCount={2}     // defaults -> 2 (stereo).  Specify 1 for mono.
                                bitRate={256000}          // defaults -> 128000 (128kbps).  React-Mic-Gold only.
                                sampleRate={96000}        // defaults -> 44100 (44.1 kHz).  It accepts values only in range: 22050 to 96000 (available in React-Mic-Gold)
                                timeSlice={3000}
                                strokeColor="#fff"
                                backgroundColor="#00b8ffc2"
                            />
                            <Row style={space}>
                                {
                                    !recordStarted ?
                                        <Button onClick={startRecording} type="button" style={{ margin: '0 auto' }}>
                                            <FontAwesome
                                                name={type === 'video' ? 'camera' : 'microphone'}
                                                size="2x"
                                            />
                                        </Button>
                                        :
                                        <Button onClick={stopRecording} type="button" style={{ margin: '0 auto' }}>
                                            <FontAwesome
                                                name='stop'
                                                size="2x"
                                            />
                                        </Button>
                                }
                            </Row>
                        </div>
                }
            </Row>
            <CustomModal
                visible={showModal}
                body={
                    type === 'video' ?
                        <video style={{ width: '100%' }} controls={true} src={recordFileURL} />
                        : <audio style={{ width: '100%' }} controls={true} src={recordFileURL} />
                }
                buttons={
                    [
                        <Button variant={'secondary'} onClick={deleteRecord}>Delete Record</Button>,
                        <Button variant={'primary'} onClick={uploadRecord}>Upload Record</Button>
                    ]
                }
            />
        </div>
    )
}
const CustomModal = ({ visible, body, header, buttons }) => {
    return (
        <Modal show={visible}>
            <Modal.Header closeButton>
                <Modal.Title>{header}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{body}</Modal.Body>
            <Modal.Footer>
                {buttons.map((button, index) => {
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
export default Record