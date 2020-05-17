import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap'
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
const Home = (props, context) => {
    const gotoShare = () => {
        props.history.push('/share-thought')
    }
    const gotoExplore = () => {
        window.location.href = 'https://explore.crisislogger.org/'
    }
    const space = {
        marginRight: 5,
        marginLeft: 5
    }
  return (
    <div>
        <Row style={{justifyContent: 'center'}}>
            <Button 
                onClick={gotoShare} 
                title={'Share your thought'} 
                size={'lg'}
                style={space}
                >Share your thought </Button>
            <Button
                onClick={gotoExplore}
                size={'lg'}
                style={space}
                title={'Listen to Others\'s thought '} 
                variant={'outline-primary'}
                type={'default'} >
                  Listen to Others' Thoughts
            </Button>
        </Row>
    </div>
  );
}

export default Home;