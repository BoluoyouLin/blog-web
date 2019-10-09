import { articleActionTypes } from './index'; 
const changeArticle = (data) => ({
    type: articleActionTypes.CHANGE_ARTICLE,
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