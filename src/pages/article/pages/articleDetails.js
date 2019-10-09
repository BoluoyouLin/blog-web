import React ,{ PureComponent, Fragment } from 'react';
import Header from '../../../common/header';
import {
    DetailsWrapper,
    DetailsHeader,
    DetailsTitle,
    DetailsInfo,
    InfoItem,
    DetailsBody
} from '../style';
import { connect } from 'react-redux';
import { articleActionCreators } from '../store';
import 'braft-editor/dist/output.css'

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
                            <InfoItem>作者：{ article.userName }</InfoItem>
                            <InfoItem>发布于：{ article.createAt }</InfoItem>
                        </DetailsInfo>
                    </DetailsHeader>
                    <DetailsBody
                    className="braft-output-content"
                    dangerouslySetInnerHTML={{__html: article.contentHtml}}
                    />
                </DetailsWrapper>
            </Fragment>
        )
    }

    componentDidMount() {
        this.props.getArticleDetails(this.props.location.state.articleId)
    }
}

const mapState = (state) => ({
    article : state.getIn(['article', 'detailsArticle'])
})

const mapDispatch = (dispatch) => ({
    getArticleDetails(articleId) {
        dispatch(articleActionCreators.getArticleDetails(articleId))
    }
})
export default connect(mapState, mapDispatch)(ArticleDetails);