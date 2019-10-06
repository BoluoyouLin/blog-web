import React, { PureComponent } from 'react';
import {
    InfoWrapper,
    InfoTitle,
    InfoItem,
    ItemLabel,
    ItemInput,
    Button
} from '../style';
import { connect } from 'react-redux';
import Error from '../../../../../common/error';
import { personnelActionCreators } from '../../../store';

class ModifyPassword extends PureComponent {

    constructor() {
        super()
        this.state = {
            oldPassword : '',
            newPassword : '',
            checkPassword : '',
            error : false,
            message : ''
        }
    }

    render() {

        const { oldPassword, newPassword, checkPassword, error, message } = this.state;

        return (
            <InfoWrapper>
                <InfoTitle>修改密码</InfoTitle>
                <InfoItem>
                    <ItemLabel>旧密码</ItemLabel>
                    <ItemInput 
                    type = 'password'
                    placeholder = '请输入原来的密码'
                    value = {oldPassword}
                    onChange = {this.handleChangeOldPassword.bind(this)}
                    />
                </InfoItem>
                <InfoItem>
                    <ItemLabel>新密码</ItemLabel>
                    <ItemInput
                    type = 'password'
                    placeholder = '请输入新密码'
                    value = {newPassword} 
                    onChange = {this.handleChangeNewPassword.bind(this)}
                    />
                </InfoItem>
                <InfoItem>
                    <ItemLabel>确认新密码</ItemLabel>
                    <ItemInput 
                    type = 'password'
                    placeholder = '确认新密码'
                    value = {checkPassword}
                    onChange = {this.handleChangeCheckPassword.bind(this)}
                    />
                </InfoItem>
                <Button
                onClick = {() => this.savePassword()}
                >保存修改</Button>
                <Error 
                isShow = { error }
                message = { message }
                />
            </InfoWrapper>
        )
    }

    handleChangeOldPassword(e) {
        this.setState({
            oldPassword : e.target.value
        })
    }

    handleChangeNewPassword(e) {
        this.setState({
            newPassword : e.target.value
        })
    }

    handleChangeCheckPassword(e) {
        this.setState({
            checkPassword : e.target.value
        })
    }

    savePassword() {
        if(this.state.newPassword === this.state.checkPassword) {
            personnelActionCreators.modifyPassword(this.state.oldPassword, this.state.newPassword);
        }
        else {
            this.showError('两次输入的新密码不一致')
        }
    }  
    
    showError(message) {
        this.setState({
            error: true,
            message: message
        }, () => {
            setTimeout(() => {
                this.setState({
                    error: false,
                    message: ''
                })
            }, 2000)
        })
    }
    
}

const mapState = (state) => ({
    currentUser : state.getIn(['home', 'currentUser'])
})

export default connect(mapState)(ModifyPassword);