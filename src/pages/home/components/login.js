import React, { PureComponent } from 'react';
import { 
    LoginWrapper,
    LoginTitle,
    Input,
    LoginBottom
} from '../style'

class Login extends PureComponent {
    render() {
        return(
            <LoginWrapper>
                <LoginTitle>菠萝·写你所想</LoginTitle>
                <Input placeholder='用户名' />
                <Input placeholder='密码' />
                <LoginBottom>登录</LoginBottom>
            </LoginWrapper>
        )
    }
}

export default Login;