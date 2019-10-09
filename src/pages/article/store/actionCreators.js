import { articleActionTypes } from './index';
import axios from 'axios';

const changeArticle = (data) => ({
    type : articleActionTypes.CHANGE_ARTICLE,
    data
})

const changeDetailsArticle = (data) => ({
    type : articleActionTypes.CHANGE_DETAILS_ARTICLE,
    data
})

export const saveTemplateArticle = (title, article) => {
    return (dispatch) => {
        let data = {
            title,
            article
        }
        dispatch(changeArticle(data))
    }
}

export const clearTemp = () => ({
    type: articleActionTypes.CLEAR_TEMP
})

export const getArticleDetails = (articleId) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/article/getArticleById',{
            id : articleId
        })
        .then(res => {
            dispatch(changeDetailsArticle(res.data.data))
        })
    }
}