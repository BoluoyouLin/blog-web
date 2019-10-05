import { searchActionTypes } from './index';
import axios from 'axios';

const changeArticle = (data) => ({
    type: searchActionTypes.SEARCH_ARTICLES,
    data
})

export const searchArticle = (keyword) => {
    return (dispatch) => {
        axios.get('/api/loadData.json').then( res => {
            dispatch(changeArticle(res.data.data))
        })
    }
}