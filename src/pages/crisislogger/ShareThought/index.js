import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap'
import Record from '../../components/Record/Record'
import Contentbox from '../../components/ContentBox'
import FontAwesome from 'react-fontawesome';
const list = [
    {title: 'Parent', content: 'Parents are facing unique challenges of working from home'},
    {title: 'Teacher', content: 'Parents are facing unique challenges of working from home'},
]
const ShareThought = (props) => {
    const [step, setStep] = React.useState(1);
    const [type, setType] = React.useState(null)
    const [recordType, setRecordType] = React.useState(null)
    const nextStep = () => {
        setStep(step + 1)
    }
    const chooseType = (type) => {
        setType(type)
        nextStep();
    }
    const chooseRecordType = (type) => {
        setRecordType(type)
        nextStep();
    }
    const onRecordFinished = (file) => {
    }
    const prevStep = () => {
        setStep(step - 1)
    }
    switch(step){
        case 1:
            return (
                <ChooseList handleClick={chooseType} />
            )
        case 2:
            return (
                <Choice 
                    handleClick={chooseRecordType}
                    back={prevStep}
                />
            )
        case 3:
            return (
                <RecordFrom 
                    handleClick={onRecordFinished}
                    back={prevStep}
                    type={recordType}
                />
            )
    }
}
const ChooseList = ({handleClick}) => {
  return (
    <Row>
        {
            list.map((item, index) => {
                return (
                    <Col xs={6} md={4} key={index}>
                        <Contentbox
                            content={item.content}
                            header={
                            <Button
                                style={{width: '100%'}}
                                variant={'primary'}
                                onClick={() =>handleClick(item.title)}
                                >
                                <h4>{item.title}</h4>
                            </Button>}
                        />
                    </Col>
                )
            })
        }
    </Row>
  );
}
const Choice = ({handleClick, back}) => {
    return (
        <div>
            <Row>
                <Col xs={12} sm={6} md={4} style={{textAlign: 'center'}}>
                    <Button
                        variant={'primary'}
                        size={'lg'}
                        onClick={() => handleClick('video')}
                    >Video</Button>
                </Col>
                <Col xs={12}  sm={6} md={4}  style={{textAlign: 'center'}}>
                    <Button
                        size={'lg'}
                        variant={'primary'}
                        onClick={() => handleClick('audio')}
                    >Audio</Button>
                </Col>
                <Col xs={12}  sm={6} md={4} style={{textAlign: 'center'}}>
                    <Button
                        variant={'primary'}
                        size={'lg'}
                        onClick={() => handleClick('text')}
                    >Text</Button>
                </Col>
            </Row>
            <Row style={{marginTop: 150}}>
                <Col xs={12} >
                   <Button variant={'outline-primary'} onClick={() =>back()}> <FontAwesome name={'arrow-left'} ></FontAwesome>&nbsp;Back</Button> 
                </Col>
            </Row>
        </div>
    )
}

const RecordFrom = ({type, handleClick, back}) => {
    if(type === 'video' || type === 'audio')
    {
        return (
            <div>
                <Record type={type} onFinished={handleClick}/>
                <Row style={{marginTop: 150}}>
                    <Col xs={12} >
                    <Button variant={'outline-primary'} onClick={() =>back()}> <FontAwesome name={'arrow-left'} ></FontAwesome>&nbsp;Back</Button> 
                    </Col>
                </Row>
            </div>
            
        )
    }
    else {
        return (
            <div>

            </div>
        )
    }

}

export default ShareThought;