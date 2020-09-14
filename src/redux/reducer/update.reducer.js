import {
    UPDATE_DATA,
    UPDATE_DATA_FAILED,
    UPDATE_DATA_SUCCESS,
    SUCCESS_ALERT,
    RESET_ERRORS,
} from '../actionType'

const initialState = {
    loading: false,
    loaded: false,
    error: '',
    result: "",
    success: "",
}

export default (state = initialState, { type, payload }) => {
    switch(type){
        case UPDATE_DATA:
            return {
                ...state,
                loading: true,
                loaded: false,
            }
        case UPDATE_DATA_SUCCESS:    
            return {
                ...state,
                loading: false,
                loaded: true,
                result: payload
            }
        case UPDATE_DATA_FAILED:
            return {
                ...state,
                loading: false,
                loaded: true,
                error: payload
            }
        case SUCCESS_ALERT:
                return {
                  ...state,
                  success: payload,
                };
        case RESET_ERRORS:
                return {
                  ...state,
                  error: "",
                  result: "",
                  success: "",
                };
        default: 
            return {
                ...state
            }
    }
}