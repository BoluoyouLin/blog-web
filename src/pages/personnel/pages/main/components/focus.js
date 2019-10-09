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

class Focus extends PureComponent {
    render() {

        const { focus } = this.props;
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
                                src = { item.portrait || normalPortrait}
                                />
                                <Text className = 'name' >{ item.userName }</Text>
                                <FocusButton>已关注</FocusButton>
                            </ActivitiesItem>
                        )
                    })
                }
            </Fragment>
        )
    }

    componentDidMount() {
        this.props.getFocus(this.props.currentUser.id);
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
        }
    }
}

export default connect(mapState, mapDispatch)(Focus);