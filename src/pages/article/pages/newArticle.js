import React, { PureComponent } from 'react';
// 引入编辑器组件
import BraftEditor from 'braft-editor';
// 引入编辑器样式
import 'braft-editor/dist/index.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { articleActionCreators } from '../store';
import { 
    NewArticleWrapper,
    TopBar,
    Title,
    Logo,
    Body,
    Label,
    Input,
    Button,
    ArticleBottom
} from '../style';
import Error from '../../../common/error';
import axios from 'axios';

class NewArticle extends PureComponent {

    constructor() {
        super()
        this.state = {
            tempTitle : undefined,
            tempArticle : BraftEditor.createEditorState(null),
            error : false,
            message : ''
        }
    }

    handleChangeTitle(e) {
        let tempTitle = e.target.value
        this.setState({
            tempTitle
        })
    }

    handleChangeArticle(tempArticle) {
        this.setState({
            tempArticle
        })
    }

    componentDidMount() {
        if( this.props.title !== null ) {
            this.setState( {
                tempTitle : this.props.title
            })
        }
        if( this.props.article !== null ) {
            let htmlString = BraftEditor.createEditorState(this.props.article)
            this.setState( {
                tempArticle : htmlString
            })
        }
    }

    addArticle(title, article, userId) {
        if(!title) {
            this.showError("标题不能为空",function(){})
        }
        else if(!article) {
            this.showError("内容不能为空",function(){})
        }
        else if(!userId) {
            this.showError("文章发布失败",function(){})
        }
        else {
            let htmlString = article.toHTML();
            axios.post('http://localhost:8080/article/addArticle',
            {
                authorId : userId,
                title : title,
                contentHtml : htmlString
            }
            ).then( res => {
                if(res.data.status) {
                    this.props.clearTemp()
                }
                this.showError(res.data.message + ",正在返回首页",() => {
                    this.props.history.push("/")
                })
            })
        }
    }

    showError(message, callback) {
        this.setState({
            error: true,
            message: message
        }, () => {
            setTimeout(() => {
                this.setState({
                    error: false,
                    message: ''
                }, () => callback())
            }, 2000)
        })
    }

    render() {
        const { saveArticle, clearTemp, currentUser } = this.props;
        const { tempTitle, tempArticle, error, message} = this.state

        return (
            <NewArticleWrapper>
                <TopBar>
                    <Link to='/'>
                        <Logo />
                    </Link>
                    <Title>编辑Blog</Title>
                </TopBar>
                <Body>
                    <Label>标题</Label>
                    <Input 
                    placeholder='请输入文章标题' 
                    value = { tempTitle || '' } 
                    onChange = { this.handleChangeTitle.bind(this) }
                    />
                    <Label>正文</Label>
                    <BraftEditor 
                    value={ tempArticle }
                    onChange={ this.handleChangeArticle.bind(this) }
                    onSave={ () => saveArticle(tempTitle, tempArticle) }
                    />
                </Body>
                <ArticleBottom>
                    <Button 
                    onClick = { () => this.addArticle(tempTitle, tempArticle, currentUser.id) }
                    >发布文章</Button>
                    <Link to='/'>
                        <Button onClick = { () => clearTemp() }>返回首页</Button>
                    </Link>
                </ArticleBottom>
                <Error 
                isShow = { error }
                message = { message }
                />
            </NewArticleWrapper>
        )
    }

}

const mapState = (state) => ({
    article: state.getIn(['article', 'article']),
    title: state.getIn(['article', 'articleTitle']),
    currentUser: state.getIn(['home', 'currentUser'])
})

const mapDispatch = (dispatch) => {
    return {
        saveArticle(title, article) {
            dispatch(articleActionCreators.saveTemplateArticle(title, article.toHTML()))
        },
        clearTemp() {
            dispatch(articleActionCreators.clearTemp())
        }
    }
}

export default connect(mapState, mapDispatch)(NewArticle);