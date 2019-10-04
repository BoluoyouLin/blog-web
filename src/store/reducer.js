import { combineReducers } from 'redux-immutable';
import { homeReducer } from '../pages/home/store'

export default combineReducers({
    home: homeReducer
})