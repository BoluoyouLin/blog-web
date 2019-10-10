import axios from 'axios';
import { personnelActionTypes } from './index';

const changeFocus = (data) => ({
    type : personnelActionTypes.CHANGE_FOCUS,
    data
})

const changeArticle = (data) => ({
    type : personnelActionTypes.CHANGE_ARTICLES,
    data
})

const changeLike = (data) => ({
    type : personnelActionTypes.CHANGE_LIKE,
    data
})

const changeHomePageUser= (data) => ({
    type : personnelActionTypes.CHANGE_HOME_PAGE_USER,
    data
})

const changeIsFocus = (data) => ({
    type : personnelActionTypes.CHANGE_IS_FOCUS,
    data
})

export const changeMainUser = (data) => ({
    type : personnelActionTypes.CHANGE_MAIN_USER,
    data
})

export const getFocus = (userId) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/user/getUserFocus',
        {
            id : userId
        }
        ).then( res => {
            dispatch(changeFocus(res.data.data))
        })
    }
}

export const getArticle = (userId) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/article/getArticleByUser',
        {
            id : userId
        }
        ).then( res => {
            dispatch(changeArticle(res.data.data))
        })
    }
}

export const getLike = (userId) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/like/getLikeArticleByUser',
        {
            id : userId
        }
        ).then( res => {
            dispatch(changeLike(res.data.data))
        })
    }
}

export const getMainUser = (userId, isCurrent) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/user/getUserById',
        {id : userId}
        ).then(res => {
            dispatch(changeMainUser({
                mainUser : res.data.data,
                isCurrent
            }))
        })
    }
}

export const getHomePageUser = (userId) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/user/getUserById',
        {id : userId}
        ).then(res => {
            dispatch(changeHomePageUser(res.data.data))
        })
    }
}

export const focusUser = (userId, focusId) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/user/focusUser',
        {
            userId,
            focusId
        })
        .then(res => {
            if(res.data.status) {
                dispatch(changeIsFocus(true))
            }
        })
    }
}

export const unFocusUser = (userId, focusId) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/user/unFocusUser',
        {
            userId,
            focusId
        })
        .then(res => {
            if(res.data.status) {
                dispatch(changeIsFocus(false))
                dispatch(getFocus(userId))
            }
        })
    }
}

export const likeArticle = (userId, articleId) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/like/likeArticle', {
                userId,
                articleId
            }).then( res => {
                dispatch(getLike(userId))
                dispatch(getArticle(userId))
        })
    }
}

export const unLikeArticle = (userId, articleId) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/like/unLikeArticle', {
                userId,
                articleId
            }).then( res => {
                dispatch(getLike(userId))
                dispatch(getArticle(userId))
        })
    }
}

