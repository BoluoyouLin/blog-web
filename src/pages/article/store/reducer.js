import { fromJS } from 'immutable';
import { articleActionTypes } from './index';

const defaultState = fromJS({
    article : '',
    articleTitle: '',
    detailsArticle: {},
    articleComment : []
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case articleActionTypes.CHANGE_ARTICLE :
            return state.merge({
                'article' : action.data.article,
                'articleTitle' : action.data.title
            });
        case articleActionTypes.CLEAR_TEMP :
            return state.merge({
                'article' : '',
                'articleTitle' : ''
            });
        case articleActionTypes.CHANGE_DETAILS_ARTICLE :
            return state.set('detailsArticle', action.data);
        case articleActionTypes.CHANGE_ARTICLE_COMMENT :
            return state.set('articleComment', action.data);
        default:
            return state;
    }
}