import { fromJS } from 'immutable'; 
import { homeActionTypes } from './index';

const defaultState = fromJS({
    articles : [],
    currentUser : undefined,
    showBar : false
})

export default (state = defaultState, action) => {
    let user;
    switch(action.type) {
        case homeActionTypes.LOAD_HOME_DATA :
            return state.set('articles', action.data.articleList);
        case homeActionTypes.LOGIN :
            return state.set('currentUser', action.data);
        case homeActionTypes.SHOW_BAR :
            return state.set('showBar', true);
        case homeActionTypes.HIDDEN_BAR :
            return state.set('showBar', false);
        case homeActionTypes.CHANGE_USER_NAME :
            user = JSON.parse(JSON.stringify(state.currentUser))
            user.userName = action.data
            return state.set('current', user);
        case homeActionTypes.CHANGE_DESC :
            user = JSON.parse(JSON.stringify(state.currentUser))
            user.desc = action.data
            return state.set('current', user);
        case homeActionTypes.CHANGE_HOME_PAGE :
            user = JSON.parse(JSON.stringify(state.currentUser))
            user.homePage = action.data
            return state.set('current', user);
        default:
            return state;
    }
} 