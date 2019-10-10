import { fromJS } from 'immutable';
import { personnelActionTypes } from './index';

const defaultState = fromJS({
    focus : [],
    likes : [],
    userArticles : [],
    mainUser : {},
    homePageUser : {
        id : undefined,
        userName : "",
        password : "",
        portrait : "",
        homePage : "",
        createAt : "",
        description : ""
    },
    isCurrent : false,
    isFocus : false
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case personnelActionTypes.CHANGE_FOCUS :
            return state.merge({
                'focus' : action.data
            });
        case personnelActionTypes.CHANGE_ARTICLES :
            return state.merge({
                'userArticles' : action.data
            });
        case personnelActionTypes.CHANGE_LIKE :
            return state.merge({
                'likes' : action.data
            });
        case personnelActionTypes.CHANGE_MAIN_USER :
            return state.merge({
                'mainUser' : action.data.mainUser,
                'isCurrent' : action.data.isCurrent
            });
        case personnelActionTypes.CHANGE_HOME_PAGE_USER :
            return state.set('homePageUser', action.data);
        case personnelActionTypes.CHANGE_IS_FOCUS :
            return state.set('isFocus', action.data)
        default :
            return state;
    }
}