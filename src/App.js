import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter , Switch, Route, Redirect,  } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Row, Col, Container, Button } from 'react-bootstrap'
import Login from './scenes/login';
import Home from './scenes/Home';
import ShareThought from './scenes/ShareThought';
import AppletList from './scenes/appletList';
import Activities from './scenes/activities';
import { userSelector } from './state/user/user.selectors';
import './App.css'
const RedirectToLogin = () => {
  return (
    <Redirect to="/login"/>
  )
}
const RedirectToApplets = () => {
  return (
    <Redirect to="/applets"/>
  )
}

const App = ({ user }) => {
  const isLoggedIn = (user && user !== '');
  return (
    <Container>
      <NavBar/>
      <Container style={{marginTop: 100, justifyContent: 'center'}}>
        <BrowserRouter>
          <Switch>
            <Route path="/login" exact component={ Login} />
            <Route path="/activities" exact component={Activities} />
            <Route path="/applets" exact component={AppletList} />
            <Route path="/"  exact component={Home} />
            <Route path="/share-thought" exact component={ShareThought} />
          </Switch>
        </BrowserRouter>
      </Container>
    </Container>
  )
}

const mapStateToProps = state => ({
  user: userSelector(state),
});

export default connect(mapStateToProps, null) (App)
  