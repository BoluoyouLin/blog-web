import { searchActionTypes } from './index';
import axios from 'axios';

const changeArticle = (data) => ({
    type: searchActionTypes.SEARCH_ARTICLES,
    data
})

export const searchArticle = (page, pageSize, keyword, userId) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/article/searchArticle', {
            page,
            pageSize,
            keyword,
            userId
        }).then( res => {
            dispatch(changeArticle(res.data.data))
        })
    }
}

export const likeArticle = (page, pageSize, keyword, userId, articleId) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/like/likeArticle', {
                userId,
                articleId
            }).then( res => {
                dispatch(searchArticle(page, pageSize, keyword, userId))
        })
    }
}

export const unLikeArticle = (page, pageSize, keyword, userId, articleId) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/like/unLikeArticle', {
                userId,
                articleId
            }).then( res => {
                dispatch(searchArticle(page, pageSize, keyword, userId))
        })
    }
}