import React, { Component } from 'react';
import {
    ErrorWrapper
} from './styled'

class Error extends Component {
    render() {
        return (
            <ErrorWrapper
            className = {this.props.isShow ? 'show' : ''}
            >
                {this.props.message}
            </ErrorWrapper>
        )
    }
}

export default Error;