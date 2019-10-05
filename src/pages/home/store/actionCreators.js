import { homeActionTypes } from './index';
import axios from 'axios'; 

const loadHomeData = (data) => ({
    type: homeActionTypes.LOAD_HOME_DATA,
    data
})

const setCurrentUser = (data) => ({
    type: homeActionTypes.LOGIN,
    data
})

export const getArticles = () => {
    return (dispatch) => {
        axios.get('/api/loadData.json').then(res => {
            dispatch(loadHomeData(res.data.data))
        })
    }
}

export const login = (userName, password) => {
    return (dispatch) => {
        let currentUser = {
            userName:'linwei',
            userId: 1,
            portrait : ''
        }
        dispatch(setCurrentUser(currentUser))
    }
}

export const showBar = () => {
    return {
        type: homeActionTypes.SHOW_BAR
    }
}

export const hiddenBar = () => {
    return {
        type: homeActionTypes.HIDDEN_BAR
    }
}