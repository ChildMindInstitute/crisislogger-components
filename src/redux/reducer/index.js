import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import createHistory from 'history/createBrowserHistory';
import userReducer from './user.reducer'
import fileReducer from './file.reducer' 

export const history = createHistory();

export default combineReducers({
    router: connectRouter(history),
    user: userReducer,
    file: fileReducer,
})