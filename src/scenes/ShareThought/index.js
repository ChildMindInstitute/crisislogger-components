import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap'
import Record from '../../components/Record/Record'
const ShareThought = () => {
    const [recordType, setRecordType] = React.useState(null)
    const shareRecord = (type) => {
       setRecordType(type)
    }
  return (
    <Container>
        {
            recordType !== null &&
            <Record type={recordType} onFinished={() => console.log('finished')}/>
            
        }
        <Button onClick={()=> shareRecord('video')}>Video</Button>
        <Button onClick={()=> shareRecord('audio')}>Audio</Button>
    </Container>
  );
}

export default ShareThought;