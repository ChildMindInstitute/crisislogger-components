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
import './App.scss'
import AppletList from './pages/appletList';
import Activities from './pages/activities';
import { userSelector } from './state/user/user.selectors';

const App = ({ user }) => {
  const isLoggedIn = (user && user !== '');
  return (
    <Container>
      <NavBar/>
      <Container style={{marginTop: 100, justifyContent: 'center'}}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/activities" exact component={Activities} />
            <Route path="/applets" exact component={AppletList} />
            <Route path="/"  exact component={Home} />
            <Route path="/signin" exact component={ Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/share-thought" exact component={Choice} />
            <Route path="/record-type" exact component={RecordType} />
          </Switch>
        </ConnectedRouter>
      </Container>
    </Container>
  )
}

const mapStateToProps = state => ({
  user: userSelector(state),
});

export default connect(mapStateToProps, null) (App)
  