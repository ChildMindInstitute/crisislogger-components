import React from 'react';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { history } from './redux/reducer'
import {Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap'
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register'
import Choice from './pages/Choice'
import RecordType from './pages/RecordType'
import SharedMessage from './pages/SharedMessage'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Privacy from './pages/Privacy'
import AppletList from './pages/appletList';
import Activities from './pages/activities';
import PrivateRoute from './components/PrivateRouter'
import Questionnaire from './pages/Questionnaire'
import { userSelector } from './state/user/user.selectors';
import {Redirect  } from 'react-router-dom'
import CMILogo from './assets/CMI_spot_logo.jpg'
import ParentsLogo from './assets/parents_magazine_logo.png'
import NMILogo from './assets/nimh-logo.png'
import OpenHumansLogo from './assets/open-humans.png'
import CRILogo from './assets/CRI.png'
import MCGovernLogo from './assets/mcgovern_logo.png'
import './App.scss'

const App = (props) => {
  const token = localStorage.getItem('token')
  const isLoggedIn = (token && token !== '');
  console.log(props)
  return (
    <Container className={'main-container'}>
      <NavBar isLoggedIn={isLoggedIn}/>
      <Container style={{justifyContent: 'center', margin: 'unset'}} className={'app-container'}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/activities" exact component={Activities} />
            <Route path="/applets" exact component={AppletList} />
            <Route path="/"  exact component={Home} />
            <Route path="/login" exact component={ Login} />
            <Route path="/register" exact component={Register} />
            <PrivateRoute path="/dashboard" exact component={Dashboard} />
            <PrivateRoute path="/profile" exact component={Profile} />
            <Route path="/share-thought" exact component={Choice} />
            <Route path="/questionnaire" exact component={Questionnaire} />
            <Route path="/record-type" exact component={RecordType} />
            <Route path="/privacy" exact component={Privacy} />
            <Route path="" exact component={SharedMessage} />
          </Switch>
        </ConnectedRouter>
      </Container>
      <CLAppFooter />
    </Container>
  )
}
const CLAppFooter = () => {
  return (
      <footer style={{marginTop: 40}} className="app-footer" id="">
        <div className="container  kt-container--fluid ">
          <div className="kt-footer__copyright" style={{width: '100%', paddingTop: 15}}>
            <div className="row text-center footer-row" style={{width: '100%', justifyContent: 'space-around'}}>
              <p className="" style={{fontSize: '1 rem'}}><a href="/privacy" style={{color: '#74788d'}}>Privacy</a></p>
              <p className=" " style={{fontSize: '1 rem', color: '#74788d'}}>©2020 Child Mind Institute</p>
              <a href="https://childmind.org"><img className="footer-logos" src={CMILogo} alt="" style={{minHeight: 40}}/></a>
              <a href="https://www.parents.com/"><img className="footer-logos" src={ParentsLogo} alt=""/></a>
              <a href="https://www.nimh.nih.gov/index.shtml"><img className="footer-logos" src={NMILogo} alt="" style={{minHeight: 30}}/></a>
              <a href="https://www.openhumans.org/"><img className="footer-logos" src={OpenHumansLogo} alt="" style={{maxHeight: 30}}/></a>
              <a href="https://cri-paris.org"><img className="footer-logos" src={CRILogo} alt="" style={{minHeight: 50}}/></a>
              <a href="https://mcgovern.mit.edu/"><img className="footer-logos" src={MCGovernLogo} alt="" style={{minHeight: 50, marginTop: -5}}/></a>
            </div>
          </div>
        </div>
      </footer>
  )
}
const mapStateToProps = state => ({
  user: userSelector(state),
});

export default connect(mapStateToProps, null) (App)
  