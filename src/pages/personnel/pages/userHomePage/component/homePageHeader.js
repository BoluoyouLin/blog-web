import React , { PureComponent } from 'react';
import {
    HomePageHeaderWrapper,
    Portrait,
    UserName,
    FocusButton,
    TextBox,
    TextItem,
} from '../style';
import { connect } from 'react-redux';
import noPortrait from '../../../../../statics/images/portrait.png';
import { personnelActionCreators } from '../../../store';
import { homeActionCreators } from '../../../../home/store';

class HomePageHeader extends PureComponent {
    render() {

        const { homePageUser, isFocus, currentUser, unFocusUser } = this.props;

        return (
            <HomePageHeaderWrapper>
                    <Portrait 
                    src = { homePageUser.portrait || noPortrait }
                    />
                    <UserName>{ homePageUser.userName }</UserName>
                    <TextBox>
                        <TextItem
                        className = "date"
                        >加入于 { homePageUser.createAt }</TextItem>
                    </TextBox>
                    {
                        isFocus 
                        ? 
                        <FocusButton
                        onClick = {() => unFocusUser(currentUser.id, homePageUser.id)}
                        >已关注</FocusButton> 
                        : 
                        <FocusButton
                        onClick = {() => this.handleFocus(homePageUser.id)}
                        >关注</FocusButton>
                    }
                    
            </HomePageHeaderWrapper>
        )
    }

    handleFocus(focusId) {
        if(!this.props.currentUser) {
            this.props.showHeaderTip()
        }
        else {
            this.props.focusUser(this.props.currentUser.id, focusId)
        } 
    }
}

const mapState = (state) => ({
    homePageUser : state.getIn(['personnel', 'homePageUser']),
    isFocus : state.getIn(['personnel', 'isFocus']),
    currentUser : state.getIn(['home', 'currentUser'])
})

const mapDispatch = (dispatch) => ({
    focusUser(userId, focusId) {
        dispatch(personnelActionCreators.focusUser(userId, focusId))
    },
    unFocusUser(userId, focusId) {
        dispatch(personnelActionCreators.unFocusUser(userId, focusId))
    },
    showHeaderTip() {
        dispatch(homeActionCreators.changeHeaderTips({
            status : true,
            message : "登录后才能关注哟"
        }))
    }
})

export default connect(mapState, mapDispatch)(HomePageHeader);