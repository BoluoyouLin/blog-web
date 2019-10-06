import React, { PureComponent } from 'react';
import {
    ContentWrapper,
    ContentBar,
    ContentBarItem,
    ContentBody
} from '../styled';
import Focus from './focus';
import Articles from './articles';
import Like from './like';

class Content extends PureComponent {
    constructor() {
        super()
        this.state = {
            onFocus : true,
            onArticles : false,
            onLike : false
        }
    }
    render() {

        const { onFocus, onArticles, onLike } = this.state;

        return (
            <ContentWrapper>
                <ContentBar>
                    <ContentBarItem 
                    className = {onFocus ? 'on' : '' }
                    onClick = { this.handleOnFocus.bind(this) }
                    >关注</ContentBarItem>
                    <ContentBarItem
                    className = {onArticles ? 'on' : '' }
                    onClick = { this.handleOnArticles.bind(this) }
                    >文章</ContentBarItem>
                    <ContentBarItem
                    className = {onLike ? 'on' : '' }
                    onClick = { this.handleOnLike.bind(this) }
                    >赞</ContentBarItem>
                </ContentBar>
                <ContentBody>
                    {onFocus ? <Focus /> : null }
                    {onArticles ? <Articles /> : null }
                    {onLike ? <Like /> : null }
                </ContentBody>
            </ContentWrapper>
        )
    }

    handleOnFocus() {
        this.setState({
            onFocus : true,
            onArticles : false,
            onLike : false
        })
    }

    handleOnArticles() {
        this.setState({
            onFocus : false,
            onArticles : true,
            onLike : false
        })
    }

    handleOnLike() {
        this.setState({
            onFocus : false,
            onArticles : false,
            onLike : true
        })
    }
}

export default Content;