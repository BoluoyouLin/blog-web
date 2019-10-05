import { fromJS } from 'immutable'; 
import { homeActionTypes } from './index';

const defaultState = fromJS({
    articles : [],
    currentUser : undefined,
    showBar : false
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case homeActionTypes.LOAD_HOME_DATA :
            return state.set('articles', action.data.articleList);
        case homeActionTypes.LOGIN :
            return state.set('currentUser', action.data);
        case homeActionTypes.SHOW_BAR :
            return state.set('showBar', true);
        case homeActionTypes.HIDDEN_BAR :
            return state.set('showBar', false);
        default:
            return state;
    }
} 