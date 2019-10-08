import React, { PureComponent } from 'react';
import Editor from 'for-editor';
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

class NewArticle extends PureComponent {

    constructor() {
        super()
        this.state = {
            tempTitle : undefined,
            tempArticle : undefined
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
            this.setState( {
                tempArticle : this.props.article
            })
        }
    }

    render() {
        const { saveArticle, clearTemp, addArticle } = this.props;
        const { tempTitle, tempArticle} = this.state

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
                    onChange = {this.handleChangeTitle.bind(this)}
                    />
                    <Label>正文</Label>
                    <Editor 
                    placeholder='尽情释放你的才华～' 
                    value = { tempArticle } 
                    onChange = {this.handleChangeArticle.bind(this)}
                    onSave = {() => saveArticle(tempTitle, tempArticle)}
                    />
                </Body>
                <ArticleBottom>
                    <Button onClick = { () => addArticle(tempTitle, tempArticle, 1) }>发布文章</Button>
                    <Link to='/'>
                        <Button onClick = { () => clearTemp() }>返回首页</Button>
                    </Link>
                </ArticleBottom>
            </NewArticleWrapper>
        )
    }

}

const mapState = (state) => ({
    article: state.getIn(['article', 'article']),
    title: state.getIn(['article', 'articleTitle'])
})

const mapDispatch = (dispatch) => {
    return {
        saveArticle(title, article) {
            dispatch(articleActionCreators.saveTemplateArticle(title, article))
        },
        addArticle(title, article, userId) {
            console.log(title, article, userId)
            console.log(Object.prototype.toString.call(article))
            // dispatch(articleActionCreators.addArticle(title, article, userId))
            dispatch(articleActionCreators.clearTemp())
        },
        clearTemp() {
            dispatch(articleActionCreators.clearTemp())
        }
    }
}

export default connect(mapState, mapDispatch)(NewArticle);