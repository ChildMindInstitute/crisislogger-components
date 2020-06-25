import { push } from 'connected-react-router'
import { 
    getData,
    getData_error,
    getData_success
 } from '../action/data.action'
 import config from '../../config'
import { updateData, updateDataSuccess, updateDataFailed } from '../action/update.action'
import Utils from '../../util/Utils'
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
    .then(response => {
        Utils.forceLogout(response.status)
        return response.json()
    })
    .then((data) => {
        if(data.records !== undefined) 
        {
            dispatch(getData_success(data.records))
        }
        else {
            dispatch(getData_error('Something went wrong, please try to refresh the page'))
        }
    })
    .catch(err => console.log(err))
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
    .then(response => {
        console.log(response)
        return response.json()
    })
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
    .then(response => {
        Utils.forceLogout(response.status)
        return response.json()
    })
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
export const getProfile = () => dispatch => {
    dispatch(getData())
    let token  = localStorage.getItem('token')
    fetch(config.crisisloggerAPIHost+'/users/me', {
        method: "GET",
        headers: {
            'Content-type': 'application/json',
            'Authorization' : 'Bearer ' + token
        }
    })
    .then(response => {
        Utils.forceLogout(response.status)
        return response.json()
    })
    .then((data) => {
        if(data.result !== undefined) 
        {
            dispatch(getData_success(data.result))
        }
        else {
            dispatch(getData_error('Something went wrong, please try to refresh the page'))
        }
    })
    .catch(err => dispatch(getData_error('Network connection error')))
}
export const updateProfile = (data) => dispatch => {
    dispatch(updateData())
    let token  = localStorage.getItem('token')
    fetch(config.crisisloggerAPIHost+'/users/update-profile', {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json',
            'Authorization' : 'Bearer ' + token
        }
    })
    .then(response => {
        Utils.forceLogout(  response.status)
        return response.json()
    })
    .then((data) => {
        if(data.result !== undefined) 
        {
            localStorage.setItem('token', data.result.token)
            dispatch(updateDataSuccess(data.result.token))
        }
        else {
            dispatch(updateDataFailed('Something went wrong, please try to refresh the page'))
        }
    })
    .catch(err => dispatch(updateDataFailed('Network connection error')))
}
export const changePassword = (data) => dispatch => {
    let token  = localStorage.getItem('token')
    dispatch(updateData())
    fetch(config.crisisloggerAPIHost + '/users/change-password', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization' : 'Bearer ' + token
        },
        body: JSON.stringify(data)
    })
        .then(res => {
            Utils.forceLogout(res.status)
            return res.json()
        })
        .then((data) => {
            if (data.result !== undefined) {
                localStorage.setItem('token', data.result.token)
                dispatch(updateDataSuccess(data.result.token))
            }
            else {
                if (data.message !== undefined) {
                    dispatch(updateDataFailed(data.message))
                }
                else {
                    dispatch(updateDataFailed('Something went wrong, please try again'))
                }
            }

        })
        .catch(err => console.log(err))
} 