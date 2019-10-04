import React, { PureComponent } from 'react';
import Editor from 'for-editor';
import { Link } from 'react-router-dom';
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
    render() {
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
                    <Input placeholder='请输入文章标题' />
                    <Label>正文</Label>
                    <Editor />
                </Body>
                <ArticleBottom>
                    <Button>发布文章</Button>
                    <Link to='/'>
                        <Button>返回首页</Button>
                    </Link>
                </ArticleBottom>
            </NewArticleWrapper>
        )
    }
}

export default NewArticle;