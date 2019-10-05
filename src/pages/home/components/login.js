import React, { PureComponent } from 'react';
import { 
    LoginWrapper,
    LoginTitle,
    Input,
    LoginBottom
} from '../style';
import { connect } from 'react-redux';
import { homeActionCreators } from '../store';

class Login extends PureComponent {

    constructor() {
        super()
        this.state = {
            userName : '',
            password : '',
            userNameTip : false,
            passwordTip : false
        }
    }

    render() {

        const { userName, password, userNameTip, passwordTip } = this.state;

        return(
            <LoginWrapper>
                    <LoginTitle>菠萝·写你所想</LoginTitle>
                    <Input 
                    placeholder='用户名' 
                    value = {userName}
                    onChange = {this.handleChangeUserName.bind(this)}
                    className = { userNameTip ? 'error' : ''}
                    />
                    <Input 
                    placeholder='密码' 
                    value = {password}
                    onChange = {this.handleChangePassword.bind(this)}
                    type = 'password'
                    className = { passwordTip ? 'error' : ''}
                    />
                    <LoginBottom onClick = {() => this.handleLogin()}>登录</LoginBottom>
            </LoginWrapper>
        )
    }

    handleChangeUserName(e) {
        this.setState({
            userName : e.target.value
        })
    }

    handleChangePassword(e) {
        this.setState({
            password : e.target.value
        })
    }

    handleLogin() {
        if(this.state.userName === '') {
            this.setState({
                userNameTip : true
            })
        }
        else if( this.state.password === '') {
            this.setState({
                userNameTip : false,
                passwordTip : true
            })
        }
        else {
            this.props.login(this.state.userName, this.state.password)
            this.setState({
                userNameTip : false,
                passwordTip : false
            })
        }
    }
    
}

const mapState = (state) => ({})

const mapDispatch = (dispatch) => {
    return {
        login(userName, password) {
            dispatch(homeActionCreators.login(userName, password))
        }
    }
}

export default connect(mapState, mapDispatch)(Login);