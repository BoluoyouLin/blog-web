import React, { PureComponent, Fragment } from 'react';
import Header from '../../common/header';
import {
    ListWrapper,
    Information,
    ListTitle,
    ListBottom,
    ListItem,
    BottomItem,
    Text,
    Portrait
} from './style';
import { connect } from 'react-redux';
import { searchActionCreators } from './store';
import { homeActionCreators } from '../home/store'; 
import portraitImg from '../../statics/images/portrait.png';

class Search extends PureComponent {

    constructor() {
        super()
        this.state = {
            page : 0,
            pageSize : 20
        }
    }
    render() {
        return (
            <Fragment>
                <Header />
                <ListWrapper>
                {
                    this.props.articles.map( item => {
                        return (
                            <ListItem key={item.id}>
                                <Information>
                                    <Portrait 
                                    onClick = {() => this.goUserHomePage(item.authorId)}
                                    src = { item.portrait || portraitImg }
                                    />
                                    <Text
                                    onClick = {() => this.goUserHomePage(item.authorId)}
                                    className = "userName"
                                    >{item.userName}</Text>
                                    <Text>{item.createAt}</Text>
                                    </Information>
                                    <ListTitle
                                    onClick = {() => this.goArticleDetails(item.id)}
                                    >{item.title}</ListTitle>
                                    <ListBottom>
                                            {
                                                item.userLike 
                                                ?
                                                <BottomItem
                                                onClick = {() => this.unLikeArticle(item.id)}
                                                >
                                                    <span
                                                    className="iconfont zoom">&#xe60c;</span>
                                                    {item.likesCount}
                                                </BottomItem>
                                                :
                                                <BottomItem
                                                onClick = {() => this.likeArticle(item.id)}
                                                >
                                                    <span 
                                                    className="iconfont zoom">&#xe616;</span>
                                                    {item.likesCount}
                                                </BottomItem>
                                            }
                                        <BottomItem>
                                            <span className="iconfont zoom">&#xe600;</span>
                                            {item.commentCount}
                                        </BottomItem>
                                    </ListBottom>
                            </ListItem>
                        )
                    })
                }
            </ListWrapper>
            </Fragment>
        )
    }

    likeArticle(articleId) {
        if(this.props.currentUser) {
            this.props.likeArticle(this.state.page, this.state.pageSize
                , this.props.location.state.keyword, this.props.currentUser.id, articleId)
        }
        else {
           this.props.showTip()
        }
    }

    unLikeArticle(articleId) {
        if(this.props.currentUser) {
            this.props.likeArticle(this.state.page, this.state.pageSize
                , this.props.location.state.keyword, this.props.currentUser.id, articleId)
        }
        else {
           this.props.showTip()
        }
    }

    goUserHomePage(userId) {
        this.props.history.push('/userHomePage',{
            userId
        })
    }
 
    goArticleDetails(articleId) {
        this.props.history.push('/articleDetails', {
            articleId
        })
    }
}

const mapState = (state) => ({
    articles : state.getIn(['search', 'articles']),
    currentUser : state.getIn(['home', 'currentUser'])
})

const mapDispatch = (dispatch) => ({
    likeArticle(page, pageSize, keyword, userId, articleId) {
        dispatch(searchActionCreators.likeArticle(page, pageSize, keyword, userId, articleId))
    },
    unLikeArticle(page, pageSize, keyword, userId, articleId) {
        dispatch(searchActionCreators.unLikeArticle(page, pageSize, keyword, userId, articleId))
    },
    showTip() {
        dispatch(homeActionCreators.changeHeaderTips({
            status : true,
            message : "登录后才能点赞哟"
        }))
    }
})

export default connect(mapState, mapDispatch)(Search);