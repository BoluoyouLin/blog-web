import { fromJS } from 'immutable';
import { articleActionTypes } from './index';

const defaultState = fromJS({
    article : '',
    articleTitle: ''
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
        default:
            return state;
    }
}