import { fromJS } from 'immutable';
import { searchActionTypes } from './index';

const defaultState = fromJS({
    articles : []
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case searchActionTypes.SEARCH_ARTICLES :
            return state.merge({
                'articles' : action.data
            })
        default:
            return state
    }
}