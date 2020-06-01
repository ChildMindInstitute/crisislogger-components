import {
    GET_DATA_SUCCESS,
    GET_DATA_FAILED,
    GET_DATA,
} from '../actionType'

const initialState = {
    loading: false,
    loaded: false,
    error: '',
    data: {
        uploads: [],
        texts: []
    }
}

export default (state = initialState, { type, payload }) => {
    switch(type){
        case GET_DATA:
            return {
                ...state,
                loading: true,
                loaded: false,
            }
        case GET_DATA_SUCCESS:    
            return {
                ...state,
                loading: false,
                loaded: true,
                data: payload
            }
        case GET_DATA_FAILED:
            return {
                ...state,
                loading: false,
                loaded: true,
                error: payload
            }
        default: 
            return {
                ...state
            }
    }
}