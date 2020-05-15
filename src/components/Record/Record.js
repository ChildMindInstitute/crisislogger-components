import React, { Component } from "react";
import WebCam from 'react-webcam'
import { ReactMic } from 'react-mic'
import { Row, Col, Button } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import './style.css'
const Record = ({ type, onFinished }) => {
    const [recordStarted, setRecordStated] = React.useState(false)
    const webcamRef = React.useRef(null);
    const onUserMediaOK = () => {

    }
    const onUserMediaError = () => {

    }
    const startRecording = () => {
        if(type === 'video')
        {
           console.log( webcamRef.current)
        }
        setRecordStated(true)
    }
    const stopRecording = () => {
        setRecordStated(false)
    }
    const onAudioData = (recordedBlob) => {
        
    }

    const onAudioStop = (recordedBlob) => {
        console.log('recordedBlob is: ', recordedBlob);
    }
    const space = {
        marginTop: 15,
        textAlign:'center',
    }
    const videoConstraints = {
        facingMode: "user"
      };
    return (
        <div >
            <Row>
                {
                    type === 'video' ?
                        <WebCam
                            ref={webcamRef}
                            onUserMedia={onUserMediaOK}
                            onUserMediaError={onUserMediaError}
                            videoConstraints={videoConstraints}
                        />
                        :
                        <Row>
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
                        </Row>
                }
            </Row>
            <Row style={space}>
                {
                    !recordStarted ?
                        <Button onClick={startRecording} type="button" style={{margin: '0 auto'}}>
                            <FontAwesome
                                name={type === 'video' ?'camera':'microphone'}
                                size="2x"
                            />
                        </Button>
                        :
                        <Button onClick={stopRecording} type="button" style={{margin: '0 auto'}}>
                            <FontAwesome
                                name='stop'
                                size="2x"
                            />
                        </Button>
                }


            </Row>
        </div>
    )
}
export default Record