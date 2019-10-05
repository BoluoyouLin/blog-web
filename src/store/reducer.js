import { combineReducers } from 'redux-immutable';
import { homeReducer } from '../pages/home/store';
import { articleReducer } from '../pages/article/store';
import { searchReducer } from '../pages/search/store';

export default combineReducers({
    home: homeReducer,
    article: articleReducer,
    search: searchReducer
})