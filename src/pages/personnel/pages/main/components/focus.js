import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import Nothing from '../../../../../common/nothing';
import {
    ActivitiesItem,
    Text,
    ActivitiesImg,
    FocusButton
} from '../styled';
import normalPortrait from '../../../../../statics/images/portrait.png';
import { personnelActionCreators } from '../../../store';
import { withRouter } from 'react-router-dom';

class Focus extends PureComponent {
    render() {

        const { focus, currentUser } = this.props;
        return (
            <Fragment>
                { 
                    focus.length === 0 
                    ? 
                    <Nothing /> 
                    : 
                    focus.map( item => {
                        return (
                            <ActivitiesItem key={item.id}>
                                <ActivitiesImg
                                onClick = { () => this.goUserHomePage(item.id)}
                                src = { item.portrait || normalPortrait}
                                />
                                <Text 
                                onClick = { () => this.goUserHomePage(item.id)}
                                className = 'name' >{ item.userName }</Text>
                                <FocusButton
                                onClick = {() => this.handleUnFocusUser(currentUser.id, item.id)}
                                >已关注</FocusButton>
                            </ActivitiesItem>
                        )
                    })
                }
            </Fragment>
        )
    }

    componentDidMount() {
        this.props.getFocus(this.props.location.state.userId);
    }

    handleUnFocusUser(userId, focusId) {
        this.props.unFocusUser(userId, focusId)
        this.props.getFocus(userId)
    }

    goUserHomePage(userId) {
        this.props.history.push('/userHomePage', {
            userId
        })
    }
}

const mapState = (state) => ({
    focus : state.getIn(['personnel', 'focus']),
    currentUser : state.getIn(['personnel', 'mainUser'])
})

const mapDispatch = (dispatch) => {
    return {
        getFocus(id) {
            dispatch(personnelActionCreators.getFocus(id))
        },
        unFocusUser(userId, focusId) {
            dispatch(personnelActionCreators.unFocusUser(userId, focusId))
        }
    }
}

export default withRouter(connect(mapState, mapDispatch)(Focus));