import React from 'react';
import LoginForm from './LoginForm';
import Record from '../../components/Record/Record'
const Login = () => {
  const onRecordingFinished = () => {
    console.log('here');
  }
  return (
    <div className="sign-form">
      <LoginForm/>
    </div>
  );
}

export default Login;