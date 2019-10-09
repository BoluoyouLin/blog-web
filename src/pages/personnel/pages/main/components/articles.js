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
                                    src = {item.authorPortrait || portraitImg}
                                    />
                                    <ArticleText>{item.userName}</ArticleText>
                                    <ArticleText>{item.createAt}</ArticleText>
                                </InfoWrapper>
                                <ArticleTitle>{item.title}</ArticleTitle>
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

export default connect(mapState, mapDispatch)(Articles);