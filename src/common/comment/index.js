import React, { PureComponent } from 'react';
import {
    CommentWrapper,
    CommentList,
    CommentListItem,
    Portrait,
    CommentContentBox,
    ContentText,
    ListItemInput,
    CommentButton,
    CommentInputBox
} from './style';
import portraitImg from '../../statics/images/portrait.png';
import { connect } from 'react-redux';
import { homeActionCreators } from  '../../pages/home/store';
import { articleActionCreators } from '../../pages/article/store';

class Comment extends PureComponent {

    constructor() {
        super()
        this.state = {
            page : 0,
            pageSize : 20,
            comment: "",
            articleComment: ""
        }
    }

    render() {

        const { comment, articleComment } = this.state;
        const { commentList } = this.props;

        return (
            <CommentWrapper>
                <CommentList>
                    {
                        commentList.map( item => {
                            return (
                                <CommentListItem key = {item.id}>
                                    <Portrait
                                    src = {item.portrait || portraitImg} 
                                    />
                                    <CommentContentBox>
                                        <ContentText
                                        className = "userName"
                                        >{item.userName}</ContentText>
                                        <ContentText>{item.content}</ContentText>
                                        <ContentText
                                        className = "date"
                                        >发表于{item.createAt}</ContentText>
                                        {
                                        item.secondCommentList.length === 0 
                                        ?
                                        null
                                        :
                                        <CommentList
                                         className = "second"
                                        >
                                            {
                                                item.secondCommentList.map(item => {
                                                    return(
                                                        <CommentListItem 
                                                        key = {item.id}
                                                        className = "second"
                                                        >
                                                            <ContentText
                                                            className = "userName second"
                                                            >{item.userName}回复：</ContentText>
                                                            <ContentText
                                                            className = "second comment"
                                                            >{item.content}</ContentText>
                                                            <ContentText
                                                            className  ="date second"
                                                            >{item.createAt}</ContentText>
                                                        </CommentListItem>
                                                    )
                                                })
                                            }
                                        </CommentList>
                                    }
                                    </CommentContentBox>
                                    <CommentInputBox>
                                        <ListItemInput 
                                        value = {comment}
                                        onChange = {this.commentChange.bind(this)}
                                        ref = {(input) => {
                                            this.input = input
                                        }}
                                        />
                                        <CommentButton
                                        onClick = {() => this.insertComment(item.id)}
                                        >回复</CommentButton>
                                    </CommentInputBox>
                                </CommentListItem>
                            )
                        })
                    }
                </CommentList>
                <CommentInputBox>
                    <ListItemInput
                    value = {articleComment}
                    onChange = {this.articleCommentChange.bind(this)}
                    />
                    <CommentButton
                    onClick = {() => this.insertCommentByArticle()}
                    >发表评论</CommentButton>
                </CommentInputBox>
            </CommentWrapper>
        )
    }

    commentChange(e) {
        this.setState({
            comment : e.target.value
        })
    }

    articleCommentChange(e) {
        this.setState({
            articleComment : e.target.value
        })
    }

    insertCommentByArticle() {
        if(this.props.currentUser) {
            this.props.insertCommentByArticle(this.props.currentUser.id, this.props.article.id, 
                this.state.articleComment);
            this.setState({ articleComment : ""})
        }
        else {
            this.props.showTip("登录后才能发表评论噢！")
            this.setState({ articleComment : ""})
        }
    }

    insertComment(forId) {
        if(this.props.currentUser) {
            this.props.insertComment(this.props.currentUser.id, forId,
                 this.state.comment, this.props.article.id);
            this.setState({ comment : ""})
        }
        else {
            this.props.showTip("登录后才能回复噢！")
            this.setState({ comment : ""})
        }
    }
    
}

const mapState = (state) => ({
    currentUser : state.getIn(['home', 'currentUser']),
    article : state.getIn(['article', 'detailsArticle']),
    commentList : state.getIn(['article', 'articleComment'])
})

const mapDispatch = (dispatch) =>({
    showTip(message) {
        dispatch(homeActionCreators.changeHeaderTips({
            message,
            status : true
        }))
    },
    insertCommentByArticle(userId, articleId, content) {
        dispatch(articleActionCreators.insertCommentByArticle(userId, articleId, content))
    },
    insertComment(userId, forId, content, articleId) {
        console.log(userId, forId, content, articleId)
        dispatch(articleActionCreators.insertComment(userId, forId, content, articleId))
    }
})

export default connect(mapState, mapDispatch)(Comment);