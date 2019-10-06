import React, { PureComponent } from 'react';
import { 
    RegisterWrapper,
    Title,
    Input,
    Button,
    BackHome,
    Logo
 } from './style';
 import { Link } from 'react-router-dom';
 import Error from '../../common/error';
 import { registerActionCreators } from './store';

class Register extends PureComponent {

    constructor() {
        super()
        this.state = {
            userName : '',
            password : '',
            checkPassword : '',
            error : false,
            message : ''
        }
    }
    render() {

        const { userName, password, checkPassword, error, message } = this.state;

        return (
            <RegisterWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Title>注册</Title>
                <Input 
                placeholder='用户名'
                value = {userName}
                onChange = {this.handleChangeUserName.bind(this)}
                />
                <Input 
                type = 'password'
                placeholder='密码'
                value = {password}
                onChange = {this.handleChangePassword.bind(this)}
                />
                <Input
                type = 'password' 
                placeholder='再次输入密码'
                value = {checkPassword}
                onChange = {this.handleChangeCheckPassword.bind(this)}
                />
                <Button
                onClick = { () => this.handleRegister()}
                >注册</Button>
                <Link to='/'>
                    <BackHome>返回首页</BackHome>
                </Link>
                <Error 
                isShow = { error }
                message = { message }
                />
            </RegisterWrapper>
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

    handleChangeCheckPassword(e) {
        this.setState({
            checkPassword : e.target.value
        })
    }

    handleRegister() {
        if(!this.state.userName) {
            this.showError('用户名不能为空')
        }
        else if(!this.state.password) {
            this.showError('密码不能为空')
        }
        else if(!this.state.checkPassword) {
            this.showError('再次输入密码不能为空')
        }
        else if(this.state.password !== this.state.checkPassword) {
            this.showError('两次输入的密码不一致')
        }
        else {
            registerActionCreators.register(this.state.userName, this.state.password)
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

export default Register;