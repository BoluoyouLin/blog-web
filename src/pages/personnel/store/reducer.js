import { fromJS } from 'immutable';
import { personnelActionTypes } from './index';

const defaultState = fromJS({
    focus : undefined,
    likes : undefined,
    userArticles : undefined,
    mainUser : {
        id : undefined,
        userName : '',
        description : '',
        portrait : '',
        homePage : '',
        createAt : ''
    },
    isCurrent : false
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case personnelActionTypes.CHANGE_FOCUS :
            return state.merge({
                'focus' : action.data.focus
            });
        case personnelActionTypes.CHANGE_ARTICLES :
            return state.merge({
                'userArticles' : action.data.articles
            });
        case personnelActionTypes.CHANGE_LIKE :
            return state.merge({
                'likes' : action.data.articleList
            });
        case personnelActionTypes.CHANGE_MAIN_USER :
            return state.merge({
                'mainUser' : action.data.mainUser,
                'isCurrent' : action.data.isCurrent
            });
        default :
            return state;
    }
}