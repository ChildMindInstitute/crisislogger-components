import React from 'react';
import LoginForm from './LoginForm';
import Record from '../../components/Record/Record'
const Login = () => {
  const onRecordingFinished = () => {
    console.log('here');
  }
  return (
    <header className="App-header">
      <LoginForm/>
      <Record type='audio' onFinished={onRecordingFinished} />
    </header>
  );
}

export default Login;