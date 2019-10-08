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

    componentWillUnmount() {
        this.props.changeMainUser();
    }
}

const mapState = (state) => ({})

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
    }
})

export default connect(mapState, mapDispatch)(Personnel);