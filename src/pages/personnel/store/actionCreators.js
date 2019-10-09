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
            console.log(res)
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

