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
                    !focus 
                    ? 
                    <Nothing /> 
                    : 
                    focus.map( item => {
                        return (
                            <ActivitiesItem key={item.userId}>
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
        this.props.getFocus();
    }
}

const mapState = (state) => ({
    focus : state.getIn(['personnel', 'focus']) 
})

const mapDispatch = (dispatch) => {
    return {
        getFocus() {
            dispatch(personnelActionCreators.getFocus())
        }
    }
}

export default connect(mapState, mapDispatch)(Focus);