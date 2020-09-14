import {
    UPDATE_DATA,
    UPDATE_DATA_SUCCESS,
    UPDATE_DATA_FAILED,
    SUCCESS_ALERT,
    RESET_ERRORS
} from '../actionType'

export const updateData = () => ({
    type: UPDATE_DATA
})

export const updateDataSuccess = (payload) => ({
    type: UPDATE_DATA_SUCCESS,
    payload
})

export const updateDataFailed = (payload) => ({
    type: UPDATE_DATA_FAILED,
    payload
}) 
export const successAlert = (payload) => ({
    type: SUCCESS_ALERT,
    payload,
});
  
export const resetErrors = (payload) => ({
    type: RESET_ERRORS,
});