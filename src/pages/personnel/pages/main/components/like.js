import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import Nothing from '../../../../../common/nothing';
import {
    ListItem,
    ListTitle,
    Information,
    ListBottom,
    BottomItem,
    ArticleText
} from '../styled';
import { personnelActionCreators } from '../../../store';
import { homeActionCreators } from '../../../../home/store';
import { withRouter } from 'react-router-dom';

class Like extends PureComponent {
    render() {

        const { likes } = this.props;

        return (
            <Fragment>
                {
                    likes.length === 0 ?
                    <Nothing />
                    :
                    likes.map( item => {
                        return(
                            <ListItem key={item.id}>
                                <Information>
                                    <ArticleText
                                    className = "username"
                                    onClick = { () => this.goUserHomePage(item.authorId)}
                                    >{item.userName}</ArticleText>
                                    <ArticleText
                                    className = "date"
                                    >{item.createAt}</ArticleText>
                                    </Information>
                                    <ListTitle
                                    onClick = { () => this.goArticleDetails(item.articleId)}
                                    >{item.title}</ListTitle>
                                    <ListBottom>
                                            {
                                                item.userLike 
                                                ?
                                                <BottomItem
                                                onClick = {() => this.unLikeArticle(item.articleId)}
                                                >
                                                    <span
                                                    className="iconfont zoom">&#xe60c;</span>
                                                    {item.likesCount}
                                                </BottomItem>
                                                :
                                                <BottomItem
                                                onClick = {() => this.likeArticle(item.articleId)}
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
            </Fragment>
        )
    }

    componentDidMount() {
        this.props.getLike(this.props.currentUser.id);
    }

    likeArticle(articleId) {
        if(this.props.currentUser) {
            this.props.likeArticle(this.props.currentUser.id, articleId)
        }
        else {
           this.props.showTip()
        }
    }

    unLikeArticle(articleId) {
        if(this.props.currentUser) {
            this.props.unLikeArticle(this.props.currentUser.id, articleId)
        }
        else {
           this.props.showTip()
        }
    }

    goArticleDetails(articleId) {
        this.props.history.push('/articleDetails', {
            articleId
        })
    }

    goUserHomePage(userId) {
        this.props.history.push('/userHomePage', {
            userId
        })
    }
}

const mapState = (state) => ({
    likes : state.getIn(['personnel', 'likes']),
    currentUser : state.getIn(['personnel', 'mainUser'])
})

const mapDispatch = (dispatch) => {
    return {
        getLike(id) {
            dispatch(personnelActionCreators.getLike(id))
        },
        showTip() {
            dispatch(homeActionCreators.changeHeaderTips({
                status : true,
                message : "登录后才能点赞哟"
            }))
        },
        likeArticle(userId, articleId) {
            dispatch(personnelActionCreators.likeArticle(userId, articleId))
        },
        unLikeArticle(userId, articleId) {
            dispatch(personnelActionCreators.unLikeArticle(userId, articleId))
        }
    }
}

export default withRouter(connect(mapState, mapDispatch)(Like));