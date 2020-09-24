import React from 'react';
import LoginForm from './LoginForm';
import { useTranslation } from 'react-i18next'
import { Row, Col } from 'react-bootstrap'
import {Redirect  } from 'react-router-dom'
import './style.scss'

const Login = () => {
  const { t } = useTranslation()
  if(localStorage.getItem('token'))
  {
      return (<Redirect to={"/dashboard"}/>)
  }
  return (
    <div className="sign-form-page">
      <h3 className="sign-form-title">{t('login.title')}</h3>
      <Row className="sign-form-container">
        <Col xl={{span: 4, offset: 0}}>
          <LoginForm/>
        </Col>
      </Row>
    </div>
  );
}

export default Login;