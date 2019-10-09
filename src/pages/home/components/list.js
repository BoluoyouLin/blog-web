import React ,{ PureComponent } from 'react';
import { 
    ListWrapper,
    ListItem,
    ListTitle,
    Information,
    ListBottom,
    BottomItem,
    ArticleText
} from '../style';
import { connect } from 'react-redux';
import { homeActionCreators } from '../store';
import Nothing from '../../../common/nothing';
import { withRouter } from 'react-router-dom'

class List extends PureComponent {

    constructor() {
        super()
        this.state = {
            page : 0,
            pageSize : 20
        }
    }
    render() {

        const { articles } = this.props;
        return (
            <ListWrapper>
                {
                    articles.length === 0 
                    ?
                    <Nothing />
                    :
                    articles.map( item => {
                        return (
                            <ListItem key={item.id}>
                                <Information>
                                    <ArticleText
                                    className = 'username'
                                    onClick = {() => this.goPersonnel(item.authorId)}
                                    >{item.userName}</ArticleText>
                                    <ArticleText>发布于 {item.createAt}</ArticleText>
                                    </Information>
                                    <ListTitle
                                    onClick = { () => this.goArticleDetails(item.id)}
                                    >{item.title}</ListTitle>
                                    <ListBottom>
                                        <BottomItem>{item.like}</BottomItem>
                                        <BottomItem>{item.comments}</BottomItem>
                                    </ListBottom>
                            </ListItem>
                        )
                    })
                }
            </ListWrapper>
        )
    }

    componentDidMount() {
        this.props.loadData(this.state.page, this.state.pageSize);
    }

    goArticleDetails(articleId) {
        this.props.history.push("/articleDetails",{
            articleId : articleId
        })
    }

    goPersonnel(userId) {
        this.props.history.push('/userHomePage' ,{
            userId
        })
    }
}

const mapState = (state) => {
    return {
        articles: state.getIn(['home', 'articles'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        loadData(page, pageSize) {
            dispatch(homeActionCreators.getArticles(page, pageSize))
        }
    }
}

export default withRouter(connect(mapState, mapDispatch)(List));