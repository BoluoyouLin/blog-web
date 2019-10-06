import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import Nothing from '../../../../../common/nothing';
import {
    ArticleItem,
    ArticleTitle,
    ArticleText,
    ArticleAuthorImage,
    Article,
    InfoWrapper
} from '../styled';
import portraitImg from '../../../../../statics/images/portrait.png';
import { personnelActionCreators } from '../../../store';

class Articles extends PureComponent {
    render() {

        const { articles } = this.props;
        return (
            <Fragment>
                {
                    !articles ?
                    <Nothing />
                    :
                    articles.map(item => {
                        return (
                            <ArticleItem key={item.articleId}>
                                <InfoWrapper>
                                    <ArticleAuthorImage 
                                    src = {item.authorPortrait || portraitImg}
                                    />
                                    <ArticleText>{item.author}</ArticleText>
                                </InfoWrapper>
                                <ArticleTitle>{item.title}</ArticleTitle>
                                <Article>{item.content}</Article>
                            </ArticleItem>
                        )
                    })
                }
            </Fragment>
        )
    }

    componentDidMount() {
        this.props.getArticles();
    }
}

const mapState = (state) => ({
    articles : state.getIn(['personnel', 'userArticles'])
})

const mapDispatch = (dispatch) => {
    return {
        getArticles() {
            dispatch(personnelActionCreators.getArticle())
        }
    }
}

export default connect(mapState, mapDispatch)(Articles);