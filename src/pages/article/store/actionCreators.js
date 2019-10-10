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

export const getArticleDetails = (userId, articleId) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/article/getArticleById',{
            articleId,
            userId
        })
        .then(res => {
            dispatch(changeDetailsArticle(res.data.data))
        })
    }
}

export const likeArticle = (userId, articleId) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/like/likeArticle', {
                userId,
                articleId
            }).then( res => {
                dispatch(getArticleDetails(userId, articleId))
        })
    }
}

export const unLikeArticle = (userId, articleId) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/like/unLikeArticle', {
                userId,
                articleId
            }).then( res => {
                dispatch(getArticleDetails(userId, articleId))
        })
    }
}