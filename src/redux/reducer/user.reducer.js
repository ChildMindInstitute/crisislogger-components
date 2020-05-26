import { 
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_ERROR
} from '../actionType'

const initialState = {
    user: {},
    loading: false,
    loaded: false,
    error: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case LOGIN: 
            return {
                loading: true,
                loaded: false,
                error: '',
                ...state
            }
        case LOGIN_SUCCESS: 
            return {
                loading: false,
                loaded: true,
                user: action.payload,
                ...state
            }
        case LOGIN_ERROR: 
            return {
                loading: false,
                loaded: false,
                error: action.payload,
                ...state
            }
        case REGISTER: 
            return {
                loading: true,
                loaded: false,
                error: '',
                ...state
            }
        case REGISTER_SUCCESS: 
            return {
                loading: false,
                loaded: true,
                user: action.payload,
                ...state
            }
        case REGISTER_ERROR: 
            return {
                loading: false,
                loaded: false,
                error: action.payload,
                ...state
            }
        default: return { ...state }
    }
}