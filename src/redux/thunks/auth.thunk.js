import { push } from 'connected-react-router'
import {
    login,
    login_success,
    login_error,
    register,
    register_success,
    register_error
} from '../action/auth.action'
import { history } from '../reducer/index'

export const Login = (email, password) => dispatch => {
    dispatch(login())
    fetch('http://localhost:4242/users/signin', {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    .then(res => login_success(res.token))
    .then(() => dispatch(push('/dashboard')))
    .catch(err => login_error(err))
}

export const Register = (registerBody) =>  dispatch  => {
    dispatch(register())
    fetch('http://localhost:4242/users/signup', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(registerBody)
    })
        .then(res => dispatch(register_success(res.token)))
        .then(() => dispatch(push('/dashboard')))
        .catch(err => dispatch(register_error(err)))
    
} 