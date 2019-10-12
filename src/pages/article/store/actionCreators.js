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

const changeArticleComment = (data) => ({
    type : articleActionTypes.CHANGE_ARTICLE_COMMENT,
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

export const getArticleComment = (articleId, page, pageSize) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/comment/getArticleComment', {
            articleId,
            page,
            pageSize
        }).then( res => {
            dispatch(changeArticleComment(res.data.data))
        })
    }
}

export const insertCommentByArticle = (userId, articleId, content) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/comment/insertByArticleComment', {
            userId,
            articleId,
            content
        }).then(res => {
            dispatch(getArticleComment(articleId, 0, 20))
            dispatch(getArticleDetails(userId, articleId))
        })
    }
}

export const insertComment = (userId, forId, content, articleId) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/comment/insertByComment', {
            userId,
            forId,
            content
        }).then(res => {
            dispatch(getArticleComment(articleId, 0, 20))
            dispatch(getArticleDetails(userId, articleId))
        })
    }
}