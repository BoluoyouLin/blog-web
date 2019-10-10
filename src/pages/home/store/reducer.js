import { fromJS } from 'immutable'; 
import { homeActionTypes } from './index';

const defaultState = fromJS({
    articles : [],
    currentUser : undefined,
    showBar : false,
    message : '',
    loginStatus : false,
    headerTipStatus : false,
    headerTips : ''
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case homeActionTypes.LOAD_HOME_DATA :
            return state.set('articles', action.data);
        case homeActionTypes.LOGIN :
            return state.merge({
                'currentUser' : action.data.currentUser,
                'message' : action.data.message,
                'loginStatus' : action.data.status
            });
        case homeActionTypes.SHOW_BAR :
            return state.set('showBar', true);
        case homeActionTypes.HIDDEN_BAR :
            return state.set('showBar', false);
        case homeActionTypes.CHANGE_USER_NAME :
            return state.merge({
                'current' : state.get('currentUser').userName = action.data.userName,
                headerTipStatus : action.data.show,
                headerTips : action.data.message
            });
        case homeActionTypes.CHANGE_DESC :
            return state.merge({
                'current' : state.get('currentUser').description = action.data.description,
                headerTipStatus : action.data.show,
                headerTips : action.data.message
            });
        case homeActionTypes.CHANGE_HOME_PAGE :
            return state.merge({
                'current' : state.get('currentUser').homePage = action.data.homePage,
                headerTipStatus : action.data.show,
                headerTips : action.data.message
            });
        case homeActionTypes.CHANGE_LOGIN_STATUS :
            return state.set('loginStatus', action.status);
        case homeActionTypes.CHANGE_HEADER_STATUS :
            return state.merge({
                'headerTipStatus' : action.data.status,
                'headerTips' : action.data.message
            });
        case homeActionTypes.LOGOUT :
            return state.set('currentUser', action.data)
        default:
            return state;
    }
} 