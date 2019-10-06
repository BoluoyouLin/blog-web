import React, { PureComponent } from 'react';
import {
    CardWrapper,
    Portrait,
    TextBox,
    UserName,
    InfoButton,
    Desc
} from '../styled';
import portraitImg from '../../../../../statics/images/portrait.png';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class UserCard extends PureComponent {
    render() {

        const { currentUser } = this.props;
        return (
            <CardWrapper>
                <Portrait 
                src = {portraitImg}
                />
                <TextBox>
                    <UserName>{currentUser.userName}</UserName>
                    <Desc>{currentUser.desc}</Desc>
                </TextBox>
                <Link to='/information'>
                    <InfoButton>编辑个人信息</InfoButton>
                </Link>
            </CardWrapper>
        )
    }
}
const mapState = (state) =>({
    currentUser : state.getIn(['home', 'currentUser'])
})

export default connect(mapState)(UserCard);