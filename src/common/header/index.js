import React, { PureComponent } from 'react';
import { 
    HeaderWrapper, 
    Logo, 
    Nav, 
    NavItem, 
    NavInput } from './style';
import { homeActionCreators } from '../../pages/home/store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends PureComponent {
    render() {
        return(
            <HeaderWrapper>
                <Link to='/'>
                    <Logo/>
                </Link>
                <Nav>
                    <Link to='/register'>
                        <NavItem>注册</NavItem>
                    </Link>
                    <Link to='/newArticle'>
                        <NavItem>写文章</NavItem>
                    </Link>
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