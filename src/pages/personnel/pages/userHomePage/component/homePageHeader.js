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

class HomePageHeader extends PureComponent {
    render() {
        const { homePageUser, isFocus } = this.props;
        return (
            <HomePageHeaderWrapper>
                    <Portrait 
                    src = { homePageUser.portrait || noPortrait }
                    />
                    <UserName>{ homePageUser.userName }</UserName>
                    <TextBox>
                        <TextItem>加入于 { homePageUser.createAt }</TextItem>
                    </TextBox>
                    <FocusButton>
                        {
                            isFocus ? '已关注' : '关注'
                        }
                    </FocusButton>
            </HomePageHeaderWrapper>
        )
    }
}

const mapState = (state) => ({
    homePageUser : state.getIn(['home', 'homePageUser']),
    isFocus : state.getIn(['home', 'isFocus'])
})

export default connect(mapState)(HomePageHeader);