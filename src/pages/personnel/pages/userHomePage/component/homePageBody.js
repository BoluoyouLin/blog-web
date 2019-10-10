import React, { PureComponent } from 'react';
import {
    HomePageBodyWrapper,
    TextItem,
    ArticleWrapper,
    ArticleTitle,
    ArticleItem,
} from '../style';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class HomePageBody extends PureComponent {
    render() {

        const { userArticles } = this.props;

        return (
            <HomePageBodyWrapper>
                <TextItem
                className = "blog"
                >Blogs</TextItem>
                <ArticleWrapper>
                    {
                        userArticles.map( item => {
                            return(
                                <ArticleItem key={item.id}>
                                    <ArticleTitle
                                    onClick = { () => this.goArticleDetails(item.id)}
                                    >{item.title}</ArticleTitle>
                                    <TextItem
                                    className = "date"
                                    >{item.createAt}</TextItem>
                                </ArticleItem>
                            )
                        })
                    }
                </ArticleWrapper>
            </HomePageBodyWrapper>
        )
    }

    goArticleDetails(articleId) {
        this.props.history.push('/articleDetails', {
            articleId
        })
    }
}

const mapState = (state) => ({
    userArticles : state.getIn(['personnel', 'userArticles'])
})

export default withRouter(connect(mapState)(HomePageBody));