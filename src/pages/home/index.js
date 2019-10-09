import React, { PureComponent } from 'react';
import Header from '../../common/header';
import List from './components/list';
import Login from './components/login';
import UserInfo from './components/userInfo';
import { 
    HomeWrapper,
    BodyWrapper,
    LeftWrapper,
} from './style';
import { connect } from 'react-redux';
import { homeActionCreators } from './store';
import Error from '../../common/error';

class Home extends PureComponent {
    render() {
        const { message, status, currentUser } = this.props; 
        return (
            <HomeWrapper>
                <Header />
                <BodyWrapper>
                    <LeftWrapper>
                        <List />
                    </LeftWrapper>
                    { currentUser === undefined ? <Login /> : <UserInfo /> }
                </BodyWrapper>
                <Error 
                isShow = { status }
                message = { message }
                />
            </HomeWrapper>
        )
    }

    componentDidUpdate() {
        this.props.changeLoginStatus()
    }
}

const mapState = (state) => {
    return {
        currentUser : state.getIn(['home', 'currentUser']),
        message : state.getIn(['home', 'message']),
        status : state.getIn(['home', 'loginStatus'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        changeLoginStatus() {
            setTimeout(() => {
                dispatch(homeActionCreators.changeLoginStatus())
            }, 1000)
        }
    }
}

export default connect(mapState, mapDispatch)(Home);