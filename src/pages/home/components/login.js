import React, { PureComponent } from 'react';
import { 
    LoginWrapper,
    LoginTitle,
    Input,
    LoginBottom
} from '../style';
import { connect } from 'react-redux';
import { homeActionCreators } from '../store';
import Error from '../../../common/error';

class Login extends PureComponent {

    constructor() {
        super()
        this.state = {
            userName : '',
            password : '',
            error : false,
            message : ''
        }
    }

    render() {

        const { userName, password, error, message } = this.state;

        return(
            <LoginWrapper>
                    <LoginTitle>菠萝·写你所想</LoginTitle>
                    <Input 
                    placeholder='用户名' 
                    value = {userName}
                    onChange = {this.handleChangeUserName.bind(this)}
                    />
                    <Input 
                    placeholder='密码' 
                    value = {password}
                    onChange = {this.handleChangePassword.bind(this)}
                    type = 'password'
                    />
                    <LoginBottom onClick = {() => this.handleLogin()}>登录</LoginBottom>
                    <Error 
                    isShow = { error }
                    message = { message }
                    />
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
            this.showError('用户名不能为空')
        }
        else if( this.state.password === '') {
            this.showError('密码不能为空')
        }
        else {
            this.props.login(this.state.userName, this.state.password)
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
            }, 1000)
        })
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