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

class Home extends PureComponent {
    render() {
        return (
            <HomeWrapper>
                <Header />
                <BodyWrapper>
                    <LeftWrapper>
                        <List />
                    </LeftWrapper>
                    { this.props.currentUser === undefined ? <Login /> : <UserInfo /> }
                </BodyWrapper>
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.initData()
    }
}

const mapState = (state) => {
    return {
        currentUser: state.getIn(['home', 'currentUser'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        initData() {
            dispatch(homeActionCreators.getArticles())
        },

    }
}

export default connect(mapState, mapDispatch)(Home);