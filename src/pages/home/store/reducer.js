import { fromJS } from 'immutable'; 
import { homeActionTypes } from './index';

const defaultState = fromJS({
    isSearch: false,
    articles: []
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case homeActionTypes.LOAD_HOME_DATA :
            return state.set('articles',action.data.articleList);
        case homeActionTypes.SEARCH_ARTICLE :
            return state.merge({
                'articles' : action.data.articles,
                'isSearch' : action.data.isSearch
            })
        default:
            return state;
    }
} 