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

class Register extends PureComponent {
    render() {
        return (
        <RegisterWrapper>
            <Link to='/'>
                <Logo />
            </Link>
            <Title>注册</Title>
            <Input placeholder='用户名'/>
            <Input placeholder='密码'/>
            <Input placeholder='再次输入密码'/>
            <Button>注册</Button>
            <Link to='/'>
                <BackHome>返回首页</BackHome>
            </Link>
        </RegisterWrapper>)
    }
}

export default Register;