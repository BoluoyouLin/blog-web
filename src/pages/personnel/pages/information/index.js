import React , { PureComponent } from 'react';
import {
    InformationWrapper,
    InformationBody,
    TopBar,
    TopBarItem
} from './style';
import Header from '../../../../common/header';
import PersonnelInfo from './components/personnelInfo';
import ModifyPassword from './components/modifyPassword';

class Information extends PureComponent {

    constructor() {
        super()
        this.state = {
            onPersonnel : true,
            onPassword : false
        }
    }
    render() {

        const { onPersonnel, onPassword } = this.state;

        return (
            <InformationWrapper>
                <Header />
                <InformationBody>
                    <TopBar>
                        <TopBarItem
                        className = { onPersonnel ? 'on' : ''}
                        onClick = { this.handleOnPersonnel.bind(this)}
                        >个人资料</TopBarItem>
                        <TopBarItem
                        className = { onPassword ? 'on' : ''}
                        onClick = { this.handleOnPassword.bind(this)}
                        >修改密码</TopBarItem>
                    </TopBar>
                    { onPersonnel ? <PersonnelInfo /> : null}
                    { onPassword ? <ModifyPassword /> : null}
                </InformationBody>
            </InformationWrapper>
        )
    }

    handleOnPersonnel() {
        this.setState({
            onPersonnel : true,
            onPassword : false
        })
    }

    handleOnPassword() {
        this.setState({
            onPersonnel : false,
            onPassword : true
        })
    }
}

export default Information;