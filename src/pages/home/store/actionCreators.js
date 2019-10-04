import { homeActionTypes } from './index';
import axios from 'axios'; 

const loadHomeData = (data) => ({
    type: homeActionTypes.LOAD_HOME_DATA,
    data
})

const searchArticles = (data) => ({
    type: homeActionTypes.SEARCH_ARTICLE,
    data: {
        articles : data.articleList,
        isSearch : true
    }
})

export const getArticles = () => {
    return (dispatch) => {
        axios.get('/api/loadData.json').then(res => {
            dispatch(loadHomeData(res.data.data))
        })
    }
}

export const searchArticle = (keyword) => {
    return (dispatch) => {
        axios.get('/api/loadData.json').then(res => {
            dispatch(searchArticles(res.data.data))
        })
    }
}