import React, { PureComponent } from 'react';
import {
    Wrapper,
    Image,
    Tip
} from './style'

class Nothing extends PureComponent {
    render() {
        return (
            <Wrapper>
                <Image />
                <Tip>这里什么都没有</Tip>
            </Wrapper>
        )
    }
}

export default Nothing;
