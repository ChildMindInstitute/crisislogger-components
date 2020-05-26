import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
} from '../actionType'

export const login = () => ({
    type: LOGIN
})

export const login_success = () => ({
    type: LOGIN_SUCCESS
})

export const login_error = () => ({
    type: LOGIN_ERROR
}) 

export const register = () => ({
    type: REGISTER
})

export const register_success = () => ({
    type: REGISTER_SUCCESS
})

export const register_error = () => ({
    type: REGISTER_ERROR
})