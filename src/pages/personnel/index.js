import React, { PureComponent, Fragment } from 'react';
import Header from '../../common/header';
import {
    PersonnelWrapper
} from './style';
import Main from './pages/main';
import { connect } from 'react-redux';
import { personnelActionCreators } from './store';

class Personnel extends PureComponent {
    render() {
        return(
            <Fragment>
                <Header />
                <PersonnelWrapper>
                    <Main />
                </PersonnelWrapper>
            </Fragment>
        )
    }

    componentDidMount() {
        if(!this.props.currentUser) {
            this.props.history.push('/');
        }
        else {
            let userId = this.props.location.state.userId;
            let isCurrent = false
            if(this.props.currentUser.id === userId) {
                isCurrent = true
            }
            this.props.getMainUser(userId, isCurrent);
        }
    }

    componentWillUnmount() {
        this.props.changeMainUser();
    }
}

const mapState = (state) => ({
    currentUser : state.getIn(['home', 'currentUser'])
})

const mapDispatch = (dispatch) => ({
    changeMainUser() {
        dispatch(personnelActionCreators.changeMainUser({
            mainUser : {
                id : undefined,
                userName : '',
                description : '',
                portrait : '',
                homePage : '',
                createAt : ''
            },
            isCurrent : false
        }))
    },
    getMainUser(userId, isCurrent) {
        dispatch(personnelActionCreators.getMainUser(userId, isCurrent))
    }
})

export default connect(mapState, mapDispatch)(Personnel);