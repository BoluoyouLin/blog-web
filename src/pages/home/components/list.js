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
import axios from 'axios';

class List extends PureComponent {

    constructor() {
        super()
        this.state = {
            page : 0,
            pageSize : 20,
            normalUserId : 0
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
                                    <ArticleText
                                    className = "date"
                                    >发布于 {item.createAt}</ArticleText>
                                    </Information>
                                    <ListTitle
                                    onClick = { () => this.goArticleDetails(item.id)}
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
        )
    }

    componentDidMount() {
        let userId = this.state.normalUserId
        if(this.props.currentUser) {
            userId = this.props.currentUser.id
        }
        this.props.loadData(this.state.page, this.state.pageSize, userId);
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

    likeArticle(articleId) {
        if(this.props.currentUser) {
            axios.post('http://localhost:8080/like/likeArticle', {
                userId : this.props.currentUser.id,
                articleId
            }).then( res => {
                let userId = this.state.normalUserId
                if(this.props.currentUser) {
                    userId = this.props.currentUser.id
                }
                this.props.loadData(this.state.page, this.state.pageSize, userId);
            })
        }
        else {
           this.props.showTip()
        }
    }

    unLikeArticle(articleId) {
        if(this.props.currentUser) {
            axios.post('http://localhost:8080/like/unLikeArticle', {
                userId : this.props.currentUser.id,
                articleId
            }).then( res => {
                let userId = this.state.normalUserId
                if(this.props.currentUser) {
                    userId = this.props.currentUser.id
                }
                this.props.loadData(this.state.page, this.state.pageSize, userId);
            })
        }
        else {
           this.props.showTip()
        }
    }
}

const mapState = (state) => {
    return {
        articles: state.getIn(['home', 'articles']),
        currentUser : state.getIn(['home', 'currentUser'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        loadData(page, pageSize, userId) {
            dispatch(homeActionCreators.getArticles(page, pageSize, userId))
        },
        showTip() {
            dispatch(homeActionCreators.changeHeaderTips({
                status : true,
                message : "登录后才能点赞哟"
            }))
        }
    }
}

export default withRouter(connect(mapState, mapDispatch)(List));