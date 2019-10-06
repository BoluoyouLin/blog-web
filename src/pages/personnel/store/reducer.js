import { fromJS } from 'immutable';
import { personnelActionTypes } from './index';

const defaultState = fromJS({
    focus : undefined,
    likes : undefined,
    userArticles : undefined
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
        default :
            return state;
    }
}