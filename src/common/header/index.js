import React, { PureComponent } from 'react';
import { 
    HeaderWrapper, 
    Logo, 
    Nav, 
    NavItem, 
    NavInput,
    Portrait,
    PersonnelBar,
    BarItem
 } from './style';
import { searchActionCreators } from '../../pages/search/store';
import { homeActionCreators } from '../../pages/home/store';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import portrait from '../../statics/images/portrait.png';
import Error from '../error';
import { personnelActionCreators } from '../../pages/personnel/store';

class Header extends PureComponent {

    render() {

        const { currentUser, showBar, handleShowBar, isShow, message} = this.props;

        return(
            <HeaderWrapper>
                <Link to='/'>
                    <Logo/>
                </Link>
                <Nav>
                    {
                        currentUser === undefined ?
                        <Link to='/register'>
                            <NavItem>注册</NavItem>
                        </Link>
                        :
                        <Portrait 
                        src= {currentUser.portrait || portrait}
                        onClick = {handleShowBar.bind(this)}
                        />
                    }
                    <PersonnelBar 
                    className={showBar ? 'show' : 'hidden'}
                    // onClick = {this.handleBarClick.bind(this)}
                    >
                        <Link to='/newArticle'>
                            <BarItem>
                                <span className="iconfont zoom">&#xe652;</span>
                                写文章
                            </BarItem>
                        </Link>
                        <Link to='/personnel'>
                            <BarItem
                            onClick = { () => this.handleGetMainUser(currentUser.id)}
                            >
                                <span className="iconfont zoom">&#xe679;</span>
                                我的主页
                            </BarItem>
                        </Link>
                        <Link to='/information'>
                            <BarItem>
                                <span className="iconfont zoom">&#xe771;</span>
                                设置
                            </BarItem>
                        </Link>
                        <BarItem>
                            <span className="iconfont zoom">&#xe613;</span>
                            登出
                        </BarItem>
                    </PersonnelBar>
                    <Link to='/newArticle'>
                        <NavItem>写文章</NavItem>
                    </Link>
                    <NavInput onKeyPress = {this.handleEnterKey.bind(this)}/>
                </Nav>
                <Error 
                isShow = { isShow }
                message = { message }
                />
            </HeaderWrapper>
        )
    }

    handleEnterKey(e) {
        if(e.nativeEvent.keyCode === 13){ //e.nativeEvent获取原生的事件对像
            this.props.searchArticles(e.target.value)
            this.props.history.push('/search');
        }
    }

    handleGetMainUser(userId) {
        this.props.goPersonnelMainPage(userId)
    }

    componentDidMount() {
        document.addEventListener("click", () => {
            this.props.handleHiddenBar()
        })
    }

    componentDidUpdate() {
        this.props.handleHiddenError();
    }
}

const mapState = (state) => ({
    currentUser : state.getIn(['home', 'currentUser']),
    showBar : state.getIn(['home', 'showBar']),
    isShow : state.getIn(['home', 'headerTipStatus']),
    message : state.getIn(['home', 'headerTips'])
})

const mapDispatch = (dispatch) => {
    return {
        searchArticles(keyword) {
            dispatch(searchActionCreators.searchArticle(keyword))
        },
        handleShowBar(e) {
            e.nativeEvent.stopImmediatePropagation()
            dispatch(homeActionCreators.showBar())
        },
        handleHiddenBar() {
            dispatch(homeActionCreators.hiddenBar())
        },
        handleHiddenError() {
            setTimeout(() => {
                dispatch(homeActionCreators.changeHeaderTips({
                    status : false,
                    message : ''
                }))
            }, 2000)
        },
        goPersonnelMainPage(userId) {
            dispatch(personnelActionCreators.getMainUser(userId, true))
        }
    }
}


export default connect(mapState, mapDispatch)(withRouter(Header));