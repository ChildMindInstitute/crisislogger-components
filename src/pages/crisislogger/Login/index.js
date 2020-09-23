import React from 'react';
import LoginForm from './LoginForm';
import { useTranslation } from 'react-i18next'
import { Row, Col } from 'react-bootstrap'
import {Redirect  } from 'react-router-dom'
import './style.scss'
import Utils from "../../../util/Utils";
import { ROLES } from '../../../util/Constants';

const Login = () => {
  const { t } = useTranslation()
  if(localStorage.getItem('token') && localStorage.getItem('role')){
    if(localStorage.getItem('role') === ROLES.user){
      return (<Redirect to={"/dashboard"}/>)
    }else if(localStorage.getItem('role') === ROLES.admin){
      return (<Redirect to={"/admin"}/>)
    }  
  }
  return (
    <div className="sign-form-page">
      <h3 className="sign-form-title">{t(new Utils().getsubDomain()+'.login.title')}</h3>
      <Row className="sign-form-container">
        <Col xl={{span: 4, offset: 0}}>
          <LoginForm/>
        </Col>
      </Row>
    </div>
  );
}

export default Login;