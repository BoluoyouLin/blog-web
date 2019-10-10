import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import Nothing from '../../../../../common/nothing';
import {
    ArticleItem,
    ArticleTitle,
    ArticleText,
    ArticleAuthorImage,
    InfoWrapper,
    ListBottom,
    BottomItem
} from '../styled';
import portraitImg from '../../../../../statics/images/portrait.png';
import { personnelActionCreators } from '../../../store';
import { withRouter } from 'react-router-dom';

class Articles extends PureComponent {
    render() {

        const { articles } = this.props;
        return (
            <Fragment>
                {
                    articles.length === 0 ?
                    <Nothing />
                    :
                    articles.map(item => {
                        return (
                            <ArticleItem key={item.id}>
                                <InfoWrapper>
                                    <ArticleAuthorImage
                                    onClick = {() => this.goPersonnel(item.authorId)} 
                                    src = {item.authorPortrait || portraitImg}
                                    />
                                    <ArticleText
                                    className = 'username'
                                    onClick = {() => this.goPersonnel(item.authorId)}
                                    >{item.userName}</ArticleText>
                                    <ArticleText
                                    className = "date"
                                    >发布于 {item.createAt}</ArticleText>
                                </InfoWrapper>
                                <ArticleTitle
                                onClick = {() => this.goArticleDetails(item.id)}
                                >{item.title}</ArticleTitle>
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
                            </ArticleItem>
                        )
                    })
                }
            </Fragment>
        )
    }

    componentDidMount() {
        this.props.getArticles(this.props.currentUser.id);
    }

    goPersonnel(userId) {
        this.props.history.push('/personnel', {
            userId
        })
    }

    goArticleDetails(articleId) {
        this.props.history.push('/articleDetails', {
            articleId
        })
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
}

const mapState = (state) => ({
    articles : state.getIn(['personnel', 'userArticles']),
    currentUser : state.getIn(['personnel', 'mainUser'])
})

const mapDispatch = (dispatch) => {
    return {
        getArticles(id) {
            dispatch(personnelActionCreators.getArticle(id))
        },
        likeArticle(userId, articleId) {
            dispatch(personnelActionCreators.likeArticle(userId, articleId))
        },
        unLikeArticle(userId, articleId) {
            dispatch(personnelActionCreators.unLikeArticle(userId, articleId))
        }
    }
}

export default withRouter(connect(mapState, mapDispatch)(Articles));