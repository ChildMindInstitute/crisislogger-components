import {
    FILE_UPLOAD,
    FILE_UPLOAD_SUCCESS,
    FILE_UPLOAD_ERROR,
    TEXT_UPLOAD,
    TEXT_UPLOAD_SUCCESS,
    TEXT_UPLOAD_ERROR
} from '../actionType'

export const fileUpload = () => ({
    type: FILE_UPLOAD
})

export const fileUploadSuccess = () => ({
    type: FILE_UPLOAD_SUCCESS
})

export const fileUploadError = () => ({
    type: FILE_UPLOAD_ERROR
})

export const textUpload = () => ({
    type: TEXT_UPLOAD
})

export const textUploadSuccess = () => ({
    type: TEXT_UPLOAD_SUCCESS
})

export const textUploadError = () => ({
    type: TEXT_UPLOAD_ERROR
})