import React, { PureComponent } from 'react';
import { 
    HeaderWrapper, 
    Logo, 
    Nav, 
    NavItem, 
    NavInput,
    Portrait,
    PersonnelBar,
    BarItem,
    LeftBar,
    LeftBarItem,
    ArticleButton
 } from './style';
import { searchActionCreators } from '../../pages/search/store';
import { homeActionCreators } from '../../pages/home/store';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import portrait from '../../statics/images/portrait.png';
import Error from '../error';

class Header extends PureComponent {

    constructor() {
        super()
        this.state = {
            page : 0,
            pageSize : 20
        }
    }

    render() {

        const { currentUser, showBar, handleShowBar, isShow, message, handleClickNoLogin, logout} 
        = this.props;

        return(
            <HeaderWrapper>
                <Link to='/'>
                    <Logo/>
                </Link>
                <LeftBar>
                    <Link to='/'>
                        <LeftBarItem>首页</LeftBarItem>
                    </Link>
                </LeftBar>
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
                    >
                        <Link to='/newArticle'>
                            <BarItem>
                                <span className="iconfont zoom">&#xe652;</span>
                                写文章
                            </BarItem>
                        </Link>
                            <BarItem
                            onClick = { () => this.handleGetMainUser(currentUser.id)}
                            >
                                <span className="iconfont zoom">&#xe679;</span>
                                我的主页
                            </BarItem>
                        <Link to='/information'>
                            <BarItem>
                                <span className="iconfont zoom">&#xe771;</span>
                                设置
                            </BarItem>
                        </Link>
                        <BarItem
                        onClick = {() => logout()}
                        >
                            <span className="iconfont zoom">&#xe613;</span>
                            登出
                        </BarItem>
                    </PersonnelBar>
                    {
                        currentUser === undefined
                        ?
                        <NavItem
                        onClick = {() => handleClickNoLogin()}
                        >写文章</NavItem>
                        :
                        <Link to='/newArticle'>
                            <ArticleButton>
                                <span className="iconfont zoom">&#xe652;</span>
                                写文章
                            </ArticleButton>
                        </Link>
                    }
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
            let userId = 0
            if(this.props.currentUser) {
                userId = this.props.currentUser.id
            }
            this.props.searchArticles(e.target.value, this.state.page, 
                this.state.pageSize, userId)
            this.props.history.push('/search', {
                keyword : e.target.value
            });
        }
    }

    handleGetMainUser(userId) {
        this.props.history.push('/personnel',{
            userId
        });
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
        searchArticles(keyword, page, pageSize, userId) {
            dispatch(searchActionCreators.searchArticle(page, pageSize, keyword, userId))
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
        handleClickNoLogin() {
            dispatch(homeActionCreators.changeHeaderTips({
                status : true,
                message : '登录后才可以写文章哟'
            }))
            setTimeout(() => {
                dispatch(homeActionCreators.changeHeaderTips({
                    status : false,
                    message : ''
                }))
            }, 3000)
        },
        logout() {
            dispatch(homeActionCreators.logout())
        }
    }
}


export default connect(mapState, mapDispatch)(withRouter(Header));