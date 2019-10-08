import React, { PureComponent, Fragment } from 'react';
import {
    InfoWrapper,
    InfoTitle,
    InfoItem,
    ItemLabel,
    ItemInput,
    OptionText,
    NormalText
} from '../style';
import { connect } from 'react-redux';
import { homeActionCreators } from '../../../../home/store';
import Error from '../../../../../common/error';


class PersonnelInfo extends PureComponent {

    constructor() {
        super()
        this.state = {
            onUserName: false,
            onDesc: false,
            onHomePage: false,
            userName: '',
            desc: '',
            homePage: '',
            error: false,
            message: ''
        }
    }

    render() {

        const { onUserName, onHomePage, onDesc, userName, desc, homePage, error, message } = this.state;

        return(
            <InfoWrapper>
                <InfoTitle>个人资料</InfoTitle>
                <InfoItem>
                    <ItemLabel>头像</ItemLabel>
                </InfoItem>
                <InfoItem>
                    <ItemLabel>用户名</ItemLabel>
                    <ItemInput
                    placeholder = '请输入用户名'
                    value = {userName}
                    onChange = {this.handleChangeUserName.bind(this)}
                    readOnly = { onUserName ? '' : 'readOnly'}
                    />
                    {
                        onUserName 
                        ?
                        <Fragment>
                            <OptionText
                            onClick = {() => this.saveUserName()}
                            >保存</OptionText>
                            <NormalText
                            onClick = {() => this.handleOnUserName()}
                            >取消</NormalText>
                        </Fragment>
                        :
                        <OptionText 
                        onClick = {() => this.handleOnUserName()}
                        >修改</OptionText>
                    }
                </InfoItem>
                <InfoItem>
                    <ItemLabel>个人介绍</ItemLabel>
                    <ItemInput
                    placeholder = '请输入个人介绍'
                    value = {desc}
                    onChange = {this.handleChangeDesc.bind(this)}
                    readOnly = { onDesc ? '' : 'readOnly'}
                    />
                    {
                        onDesc 
                        ?
                        <Fragment>
                            <OptionText
                            onClick = {() => this.saveDesc()}
                            >保存</OptionText>
                            <NormalText
                            onClick = {() => this.handleOnDesc()}
                            >取消</NormalText>
                        </Fragment>
                        :
                        <OptionText
                        onClick = {() => this.handleOnDesc()}
                        >修改</OptionText>
                    }
                </InfoItem>
                <InfoItem>
                    <ItemLabel>个人主页</ItemLabel>
                    <ItemInput
                    placeholder = '请输入个人主页'
                    value = {homePage}
                    onChange = {this.handleChangeHomePage.bind(this)}
                    readOnly = { onHomePage ? '' : 'readOnly'}
                    />
                    {
                        onHomePage 
                        ?
                        <Fragment>
                            <OptionText
                            onClick = {() => this.saveHomePage()}
                            >保存</OptionText>
                            <NormalText
                            onClick = {() => this.handleOnHomePage()}
                            >取消</NormalText>
                        </Fragment>
                        :
                        <OptionText
                        onClick = {() => this.handleOnHomePage()}
                        >修改</OptionText>
                    }
                </InfoItem>
                <Error 
                isShow = { error }
                message = { message }
                />
            </InfoWrapper>
        )
    }

    handleChangeUserName(e) {
        this.setState({
            userName: e.target.value
        })
    }

    handleChangeDesc(e) {
        this.setState({
            desc: e.target.value
        })
    }

    handleChangeHomePage(e) {
        this.setState({
            homePage: e.target.value
        })
    }

    handleOnUserName() {
        let value = !this.state.onUserName;
        this.setState({
            onUserName: value,
            onDesc: false,
            onHomePage: false,
        })
        this.initData();
    }

    handleOnDesc() {
        let value = !this.state.onDesc;
        this.setState({
            onUserName: false,
            onDesc: value,
            onHomePage: false,
        })
        this.initData();
    }

    handleOnHomePage() {
        let value = !this.state.onHomePage;
        this.setState({
            onUserName: false,
            onDesc: false,
            onHomePage: value,
        })
        this.initData();
    }

    componentDidMount() {
        this.initData();
    }

    initData() {
        this.setState({
            userName : this.props.currentUser.userName,
            desc : this.props.currentUser.description,
            homePage : this.props.currentUser.homePage
        })
    }

    saveUserName() {
        let value = this.state.userName
        if(value) {
            this.props.changeUserName(value, this.props.currentUser.id);
            this.handleOnUserName();
            this.initData();
        } 
        else {
            this.showError('用户名不能为空')
        }
    }

    saveDesc() {
        this.props.changeDesc(this.state.desc, this.props.currentUser.id);
        this.handleOnDesc();
        this.initData();
    }

    saveHomePage() {
        this.props.changeHomePage(this.state.homePage, this.props.currentUser.id);
        this.handleOnHomePage();
        this.initData();
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

const mapDispatch = (dispatch) => ({
    changeUserName(userName, id) {
        dispatch(homeActionCreators.modifyUserName(userName, id));
    },
    changeDesc(desc, id) {
        dispatch(homeActionCreators.modifyDesc(desc, id));
    },
    changeHomePage(homePage, id) {
        dispatch(homeActionCreators.modifyHomePage(homePage, id));
    }
})


export default connect(mapState, mapDispatch)(PersonnelInfo);