import { homeActionTypes } from './index';
import axios from 'axios'; 

const loadHomeData = (data) => ({
    type: homeActionTypes.LOAD_HOME_DATA,
    data
})

const loginAfter = (data) => ({
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
        axios.post('http://localhost:8080/user/login', {userName, password}).then(res => {
            let data;
            if(res.data.status) {
                data = {
                    currentUser : res.data.data,
                    message : res.data.message,
                    status : true
                }
            }
            else {
                data = {
                    currentUser : undefined,
                    message : res.data.message,
                    status : res.data.status
                }
            }
            dispatch(loginAfter(data))
        })
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

export const modifyUserName = (userName, id) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/user/modifyUserName',
        {userName, id}
        ).then(res => {
            if(res.data.status) {
                dispatch(changeUserName({
                    userName, 
                    message : res.data.message,
                    show : true
                }))
            }
        }) 
    }
}

export const modifyDesc = (description, id) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/user/modifyDescription',
        {description, id}
        ).then(res => {
            if(res.data.status) {
                dispatch(changeDesc({
                    description, 
                    message : res.data.message,
                    show : true
                }))
            }
        }) 
    }
}

export const modifyHomePage = (homePage, id) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/user/modifyHomePage',
        {homePage, id}
        ).then(res => {
            if(res.data.status) {
                dispatch(changeHomePage({
                    homePage, 
                    message : res.data.message,
                    show : true
                }))
            }
        }) 
    }
}

export const changeLoginStatus = () => ({
    type : homeActionTypes.CHANGE_LOGIN_STATUS,
    status : false
})

export const changeHeaderTips = (data) => ({
    type : homeActionTypes.CHANGE_HEADER_STATUS,
    data
})

