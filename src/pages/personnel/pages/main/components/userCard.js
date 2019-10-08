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

        const { mainUser, isCurrent } = this.props;
        return (
            <CardWrapper>
                <Portrait 
                src = {mainUser.portrait || portraitImg}
                />
                <TextBox>
                    <UserName>{mainUser.userName}</UserName>
                    <Desc>{mainUser.description}</Desc>
                </TextBox>
                {
                    isCurrent 
                    ?
                    <Link to='/information'>
                        <InfoButton>编辑个人信息</InfoButton>
                    </Link>
                    :
                    null
                }
            </CardWrapper>
        )
    }
}
const mapState = (state) =>({
    mainUser : state.getIn(['personnel', 'mainUser']),
    isCurrent : state.getIn(['personnel', 'isCurrent'])
})

export default connect(mapState)(UserCard);