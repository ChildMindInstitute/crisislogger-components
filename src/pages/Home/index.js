import React from 'react';
import { useTranslation } from 'react-i18next'
import { Row,  Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import homePageBanner from '../../assets/homePageBanner.png'
import './style.scss'

const Home = (props, context) => {
    const { t } = useTranslation();
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
    <div className="home-page-container">
        <Row style={{justifyContent: 'center'}}>
            <img src={homePageBanner} />
            <Link className="login-link" to="/signin">{t('home.login')}</Link>
            <div className="title-text">
               <h1>{t('home.title')}</h1> 
            </div>
            <div className="button-container">
                <Button 
                    onClick={gotoShare} 
                    title={'Share your thought'} 
                    size={'lg'}
                    style={space}
                >{t('home.shareButton')}</Button>
                <Button
                    onClick={gotoExplore}
                    size={'lg'}
                    style={space}
                    title={'Listen to Others\'s thought '} 
                    variant={'outline-primary'}
                    type={'default'} >
                    {t('home.exploreButton')}
                </Button>
            </div>
            <div className="text-cener">
                <p>{t('home.text.p1')}</p>
                <p>{t('home.text.p2')}</p>
                <p>{t('home.text.p3')}</p>
                <p>{t('home.text.p4')}</p>
            </div>    
        </Row>
    </div>
  );
}

export default Home;