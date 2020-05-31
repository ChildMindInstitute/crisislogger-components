import { push } from 'connected-react-router'
import { 
    fileUpload,
    fileUploadSuccess,
    fileUploadError,
    textUpload,
    textUploadSuccess,
    textUploadError
} from '../action/file.action'

export const uploadText = (data) => dispatch => {
    dispatch(textUpload())
    fetch('http://localhost:4242/file/text', {
        method: "POST",
        body: JSON.stringify({ data })
    })
        .then(res => localStorage.setItem('upload_id', res.upload_id))
        .then(res => dispatch(textUploadSuccess(res)))
        .catch(err => dispatch(textUploadError(err)))
}

export const fileUploadThunk = (file, formData) => dispatch => {
    dispatch(fileUpload())
    let data = new FormData()
    data.append('file', file, new Date().toISOString())
    data.append('contribute_to_science',formData.contribute_to_science)
    data.append('publicly', formData.publicly)
    data.append('country', formData.country)
    data.append('checkAge', formData.checkAge)

    fetch('http://localhost:4242/file/upload', {
        method: "POST",
        body: data
    })
        .then(res => localStorage.setItem('upload_id', res.upload_id))
        .then(() => dispatch(fileUploadSuccess()))
        .catch(err => dispatch(fileUploadError(err)))
}