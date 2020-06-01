import { push } from 'connected-react-router'
import { 
    getData,
    getData_error,
    getData_success
 } from '../action/data.action'
 import config from '../../config'
export const getRecordData = () => dispatch => {
    dispatch(getData())
    let token  = localStorage.getItem('token')
    fetch(config.defaultApiHost+'/users/getrecords', {
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
