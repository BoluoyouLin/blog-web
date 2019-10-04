import React, { PureComponent } from 'react';
import { 
    HeaderWrapper, 
    Logo, 
    Nav, 
    NavItem, 
    NavInput } from './style';
import { homeActionCreators } from '../../pages/home/store';
import { connect } from 'react-redux';

class Header extends PureComponent {
    render() {
        return(
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem>注册</NavItem>
                    <NavItem>写文章</NavItem>
                    <NavInput onKeyPress = {this.handleEnterKey.bind(this)}/>
                </Nav>
            </HeaderWrapper>
        )
    }

    handleEnterKey(e) {
        if(e.nativeEvent.keyCode === 13){ //e.nativeEvent获取原生的事件对像
            this.props.searchArticles(e.target.value)
        }
    }
}

const mapState = (state) => ({})

const mapDispatch = (dispatch) => {
    return {
        searchArticles(keyword) {
            dispatch(homeActionCreators.searchArticle(keyword))
        }
    }
}


export default connect(mapState, mapDispatch)(Header);