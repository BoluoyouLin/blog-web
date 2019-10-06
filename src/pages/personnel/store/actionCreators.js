import axios from 'axios';
import { personnelActionTypes } from './index';

const changeFocus = (data) => ({
    type: personnelActionTypes.CHANGE_FOCUS,
    data
})

const changeArticle = (data) => ({
    type: personnelActionTypes.CHANGE_ARTICLES,
    data
})

const changeLike = (data) => ({
    type: personnelActionTypes.CHANGE_LIKE,
    data
})

export const getFocus = (userId) => {
    return (dispatch) => {
        axios.get('/api/focus.json').then( res => {
            dispatch(changeFocus(res.data.data))
        })
    }
}

export const getArticle = (userId) => {
    return (dispatch) => {
        axios.get('/api/articles.json').then( res => {
            dispatch(changeArticle(res.data.data))
        })
    }
}

export const getLike = (userId) => {
    return (dispatch) => {
        axios.get('/api/loadData.json').then( res => {
            dispatch(changeLike(res.data.data))
        })
    }
}
