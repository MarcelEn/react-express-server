import { combineReducers } from 'redux';
import app from './container/App/reducer';


export default combineReducers({
    ui: app
})