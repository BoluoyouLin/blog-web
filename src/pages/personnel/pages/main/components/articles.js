import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import Nothing from '../../../../../common/nothing';
import {
    ArticleItem,
    ArticleTitle,
    ArticleText,
    ArticleAuthorImage,
    InfoWrapper
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
                                    <ArticleText>发布于 {item.createAt}</ArticleText>
                                </InfoWrapper>
                                <ArticleTitle
                                onClick = {() => this.goArticleDetails(item.id)}
                                >{item.title}</ArticleTitle>
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
}

const mapState = (state) => ({
    articles : state.getIn(['personnel', 'userArticles']),
    currentUser : state.getIn(['personnel', 'mainUser'])
})

const mapDispatch = (dispatch) => {
    return {
        getArticles(id) {
            dispatch(personnelActionCreators.getArticle(id))
        }
    }
}

export default withRouter(connect(mapState, mapDispatch)(Articles));