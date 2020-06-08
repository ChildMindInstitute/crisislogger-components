import React from 'react';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { clearUser } from '../state/user/user.actions';
import { userSelector } from '../state/user/user.selectors';
import {Redirect  } from 'react-router-dom'
const NavBar = ({ isLoggedIn, clearUser }) => {
  const LogOut = () => {
    localStorage.clear();
    return window.location.href ='/login'
  }
  if (isLoggedIn) {
    return (
       <Navbar collapseOnSelect={true} expand="xl" bg="light" variant="light" >
       <Navbar.Brand href="/" ><img alt="crisislogger" src="https://crisislogger.org/media/logos/CrisisLogger_logo_border.png" style={{maxHeight: 48}}/></Navbar.Brand>
       <Navbar.Toggle aria-controls="navbar-nav"/>
       <Navbar.Collapse id="navbar-nav " style={{justifyContent: 'flex-end'}} >
         <Nav>
           <Nav.Link href="/share-thought" className={'btn btn-wide btn-lg'}>Share</Nav.Link>
           <Nav.Link href="https://explore.crisislogger.org" className={'btn btn-wide btn-lg'}>Explore</Nav.Link>
           <Nav.Link onClick={LogOut} className={'btn btn-wide btn-lg'}>Log Out</Nav.Link>
         </Nav>
       </Navbar.Collapse>
     </Navbar>
    );
  } else {
    return (
      <Navbar collapseOnSelect={true} expand="xl" bg="light" variant="light" >
        <Navbar.Brand href="/" ><img alt="crisislogger" src="https://crisislogger.org/media/logos/CrisisLogger_logo_border.png" style={{maxHeight: 48}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav"/>
        <Navbar.Collapse id="navbar-nav " style={{justifyContent: 'flex-end'}} >
          <Nav>
            <Nav.Link href="/share-thought" className={'btn btn-wide btn-lg'}>Share</Nav.Link>
            <Nav.Link href="https://explore.crisislogger.org" className={'btn btn-wide btn-lg'}>Explore</Nav.Link>
            <Nav.Link href="/login" className={'btn btn-wide btn-lg'}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  user: userSelector(state),
});

const mapDispatchToProps = {
  clearUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
