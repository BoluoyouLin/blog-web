import React ,{ PureComponent, Fragment } from 'react';
import Header from '../../../common/header';
import {
    DetailsWrapper,
    DetailsHeader,
    DetailsTitle,
    DetailsInfo,
    InfoItem,
    DetailsBody,
    ArticleContent,
    InfoBar,
    InfoBarItem
} from '../style';
import { connect } from 'react-redux';
import { articleActionCreators } from '../store';
import 'braft-editor/dist/output.css';
import { homeActionCreators } from '../../home/store';


class ArticleDetails extends PureComponent {
    render() {

        const { article } = this.props;
        return (
            <Fragment>
                <Header />
                <DetailsWrapper>
                    <DetailsHeader>
                        <DetailsTitle>{ article.title }</DetailsTitle>
                        <DetailsInfo>
                            <InfoItem
                            className = "userName"
                            onClick = {() => this.goUserHomePage(article.authorId)}
                            >作者：{ article.userName }</InfoItem>
                            <InfoItem>发布于：{ article.createAt }</InfoItem>
                        </DetailsInfo>
                    </DetailsHeader>
                    <DetailsBody>
                        <ArticleContent
                        className="braft-output-content"
                        dangerouslySetInnerHTML={{__html: article.contentHtml}}
                        />
                        <InfoBar>
                                {
                                    article.userLike 
                                    ?
                                    <InfoBarItem
                                    onClick = {() => this.unLikeArticle(article.id)}
                                    >
                                    <span
                                    className="iconfont zoom">&#xe60c;</span>
                                    {article.likesCount}
                                    </InfoBarItem>
                                    :
                                    <InfoBarItem
                                    onClick = {() => this.likeArticle(article.id)}
                                    >
                                    <span 
                                    className="iconfont zoom">&#xe616;</span>
                                    {article.likesCount}
                                    </InfoBarItem>
                                    }
                                    <InfoBarItem>
                                        <span className="iconfont zoom">&#xe600;</span>
                                        {article.commentCount}
                                    </InfoBarItem>
                        </InfoBar>
                    </DetailsBody>
                </DetailsWrapper>
            </Fragment>
        )
    }

    componentDidMount() {
        let userId = 0
        if(this.props.currentUser) {
            userId = this.props.currentUser.id
        }
        this.props.getArticleDetails(userId, this.props.location.state.articleId)
    }

    likeArticle(articleId) {
        if(this.props.currentUser) {
            this.props.likeArticle(this.props.currentUser.id, articleId)
        }
        else {
           this.props.showTip("登录后才能点赞哟")
        }
    }

    unLikeArticle(articleId) {
        if(this.props.currentUser) {
            this.props.likeArticle(this.props.currentUser.id, articleId)
        }
        else {
           this.props.showTip("登录后才能点赞哟")
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
    article : state.getIn(['article', 'detailsArticle']),
    currentUser : state.getIn(['home', 'currentUser'])
})

const mapDispatch = (dispatch) => ({
    getArticleDetails(userId, articleId) {
        dispatch(articleActionCreators.getArticleDetails(userId, articleId))
    },
    likeArticle(userId, articleId) {
        dispatch(articleActionCreators.likeArticle(userId, articleId))
    },
    unLikeArticle(userId, articleId) {
        dispatch(articleActionCreators.unLikeArticle(userId, articleId))
    },
    showTip(message) {
        dispatch(homeActionCreators.changeHeaderTips({
            status : true,
            message
        }))
    }
})

export default connect(mapState, mapDispatch)(ArticleDetails);