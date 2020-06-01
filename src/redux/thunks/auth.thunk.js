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
    .then(response => response.json())
    .then((data) => {
        if(data.user !== undefined)
        {
            localStorage.setItem('token', data.user.token)
            dispatch(login_success( data.user))
            // push('/dashboard')
        }
        else {
            dispatch(login_error('Email or Password is invalid'))
        }
    })
    .catch(err => dispatch(login_error()))
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
        .then(res => res.json())
        .then((data) => {
            if(data.user !== undefined)
            {
                localStorage.setItem('token', data.token)
                dispatch(register_success(data.token))
                window.location.href ='/'
            }
            else {
                if(data.message !== undefined)
                {
                    dispatch(register_error(data.message))
                }
                else {
                    dispatch(register_error('Something went wrong, please try again'))
                }
            }
            
        })
        .catch(err => console.log(err))
    
} 