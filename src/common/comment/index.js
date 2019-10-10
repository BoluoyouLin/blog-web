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
    CommentInputBox,
    CommentInputBottom
} from './style';

class Comment extends PureComponent {

    constructor() {
        super()
        this.state = {
            page : 0,
            pageSize : 20,
            commentList :[
                {
                    id : 1,
                    userId : 1,
                    userName : "小林",
                    content : "为自己的文章顶楼",
                    createAt : "2019-10-10",
                    articleId : 1,
                    forId : "",
                    portrait : "",
                    secondCommentList : [
                        {
                            id : 2,
                            userId : 2,
                            userName : "小林",
                            content : "为自己的文章顶楼",
                            createAt : "2019-10-10",
                            articleId : "",
                            forId : 2,
                            forUserId : 3,
                            forUserName : "小明"
                        },
                        {
                            id : 3,
                            userId : 3,
                            userName : "小林",
                            content : "为自己的文章顶楼",
                            createAt : "2019-10-10",
                            articleId : "",
                            forId : 3,
                            forUserId : 3,
                            forUserName : "小明"
                        },
                        {
                            id : 4,
                            userId : 4,
                            userName : "小林",
                            content : "为自己的文章顶楼",
                            createAt : "2019-10-10",
                            articleId : "",
                            forId : 4,
                            forUserId : 3,
                            forUserName : "小明"
                        }
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <CommentWrapper>

            </CommentWrapper>
        )
    }
}

export default Comment;