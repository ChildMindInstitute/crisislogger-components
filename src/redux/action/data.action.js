import {
    GET_DATA,
    GET_DATA_FAILED,
    GET_DATA_SUCCESS,
} from '../actionType'

export const getData = () => ({
    type: GET_DATA
})

export const getData_success = (payload) => ({
    type: GET_DATA_SUCCESS,
    payload
})

export const getData_error = (payload) => ({
    type: GET_DATA_FAILED,
    payload
}) 