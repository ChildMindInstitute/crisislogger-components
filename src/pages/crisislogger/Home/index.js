import React from 'react';
import { useTranslation } from 'react-i18next'
import { Row,  Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import homePageBanner from '../../../assets/homePageBanner.png'
import './style.scss'
import Utils from "../../../util/Utils";
const Home = (props, context) => {
    const { t } = useTranslation();
    const gotoShare = () => {
        props.history.push('/share-thought')
    }
    const gotoExplore = () => {
        props.history.push('/explore')
    }
    const space = {
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 10
    }
  return (
    <div className="home-page-container">
        <Row style={{justifyContent: 'center', margin:'unset'}}>
            <img src={homePageBanner} alt={'Home'} />
            <div className="login-link">
                <Link to="/login">{t(new Utils().getCurrentDomain()+'.home.login')}</Link>
            </div>
            <div className="title-text">
               <h1>{t(new Utils().getCurrentDomain()+'.home.title')}</h1>
            </div>
            <div className="button-container">
                <Button 
                    onClick={gotoShare} 
                    title={'Share your thought'} 
                    size={'lg'}
                    style={space}
                >{t(new Utils().getCurrentDomain()+'.home.shareButton')}</Button>
                <Button
                    onClick={gotoExplore}
                    size={'lg'}
                    style={space}
                    title={'Listen to Others\'s thought '} 
                    variant={'outline-primary'}
                    type={'default'} >
                    {t(new Utils().getCurrentDomain()+'.home.exploreButton')}
                </Button>
            </div>
            <div className="text-cener">
                <p>{t(new Utils().getCurrentDomain()+'.home.text.p1')}</p>
                <p>{t(new Utils().getCurrentDomain()+'.home.text.p2')}</p>
                <p>{t(new Utils().getCurrentDomain()+'.home.text.p3')}</p>
                <p>{t(new Utils().getCurrentDomain()+'.home.text.p4')}</p>
            </div>    
        </Row>
    </div>
  );
}

export default Home;