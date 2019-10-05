import React, { PureComponent } from 'react';
import {
    UserInfoWrapper,
    UserName,
    Portrait,
    LoginTitle
} from '../style';
import { connect } from 'react-redux';
import portrait from '../../../statics/images/portrait.png'

class UserInfo extends PureComponent {

    constructor() {
        super()
        let today = new Date()
        this.state = {
            today
        }
    }

    render() {
        return (
            <UserInfoWrapper>
                <LoginTitle>菠萝·写你所想</LoginTitle>
                <Portrait src = { this.props.currentUser.portrait || portrait}/>
                <UserName>{ this.props.currentUser.userName }</UserName>
            </UserInfoWrapper>
        )
    }
}

const mapState = (state) => ({
    currentUser : state.getIn(['home', 'currentUser'])
})

export default connect(mapState)(UserInfo);