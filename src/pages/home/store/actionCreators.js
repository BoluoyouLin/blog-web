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

const changeUserName = (data) => ({
    type: homeActionTypes.CHANGE_USER_NAME,
    data
})

const changeDesc = (data) => ({
    type: homeActionTypes.CHANGE_DESC,
    data
})

const changeHomePage = (data) => ({
    type: homeActionTypes.CHANGE_HOME_PAGE,
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
            portrait : '',
            desc: '一个前端热爱者',
            homePage: ''
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

export const modifyUserName = (userName) => {
    console.log(userName)
    return (dispatch) => {
        dispatch(changeUserName(userName))
    }
}

export const modifyDesc = (desc) => {
    console.log(desc)
    return (dispatch) => {
        dispatch(changeDesc(desc))
    }
}

export const modifyHomePage = (homePage) => {
    console.log(homePage)
    return (dispatch) => {
        dispatch(changeHomePage(homePage))
    }
}