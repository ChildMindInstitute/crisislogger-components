import { push } from 'connected-react-router'
import { 
    getData,
    getData_error,
    getData_success
 } from '../action/data.action'
 import config from '../../config'
import { updateData, updateDataSuccess, updateDataFailed } from '../action/update.action'
export const getRecordData = () => dispatch => {
    dispatch(getData())
    let token  = localStorage.getItem('token')
    fetch(config.crisisloggerAPIHost+'/users/getrecords', {
        method: "GET",
        headers: {
            'Content-type': 'application/json',
            'Authorization' : 'Bearer ' + token
        }
    })
    .then(response => response.json())
    .then((data) => {
        if(data.records !== undefined) 
        {
            dispatch(getData_success(data.records))
        }
        else {
            dispatch(getData_error('Something went wrong, please try to refresh the page'))
        }
    })
    .catch(err => dispatch(getData_error('Network connection error')))
}
export const changeContributeShare = (data) => dispatch => {
    console.log(data)
    dispatch(updateData())
    let token  = localStorage.getItem('token')
    fetch(config.crisisloggerAPIHost+'/users/changeRecordStatus', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json',
            'Authorization' : 'Bearer ' + token
        }
    })
    .then(response => response.json())
    .then((data) => {
        if(data.result !== undefined) 
        {
            dispatch(updateDataSuccess(data.result))
        }
        else {
            dispatch(updateDataFailed('Something went wrong, please try to refresh the page'))
        }
    })
    .catch(err => dispatch(updateDataFailed('Network connection error')))
}
export const removeRecords = (data) => dispatch => {
    console.log(data)
    dispatch(updateData())
    let token  = localStorage.getItem('token')
    fetch(config.crisisloggerAPIHost+'/users/removeRecords', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json',
            'Authorization' : 'Bearer ' + token
        }
    })
    .then(response => response.json())
    .then((data) => {
        if(data.result !== undefined) 
        {
            dispatch(updateDataSuccess(data.result))
        }
        else {
            dispatch(updateDataFailed('Something went wrong, please try to refresh the page'))
        }
    })
    .catch(err => dispatch(updateDataFailed('Network connection error')))
}
