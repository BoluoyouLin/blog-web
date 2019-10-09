import React ,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from '../../../../common/header';
import { personnelActionCreators } from '../../store';
import {
    UserHomePageWrapper,
} from './style';
import HomePageHeader from './component/homePageHeader';
import HomePageBody from './component/homePageBody';

class UserHomePage extends PureComponent {
    render() {

        return (
            <UserHomePageWrapper>
                <Header />
                <HomePageHeader />
                <HomePageBody />
            </UserHomePageWrapper>
        )
    }

    componentDidMount() {
        let userId
        try {
            userId = this.props.location.state.userId;
        }catch(e){
            console.error(e)
            this.props.history.push('/');
        }
        this.props.getHomePageUser(userId);
        this.props.getUserArticles(userId);
    }

}

const mapState = (state) => ({})

const mapDispatch = (dispatch) => ({
    getHomePageUser(userId) {
        dispatch(personnelActionCreators.getHomePageUser(userId));
    },
    getUserArticles(userId) {
        dispatch(personnelActionCreators.getArticle(userId));
    }
})

export default connect(mapState, mapDispatch)(UserHomePage);