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


class PersonnelInfo extends PureComponent {

    constructor() {
        super()
        this.state = {
            onUserName: false,
            onDesc: false,
            onHomePage: false,
            userName: '',
            desc: '',
            homePage: ''
        }
    }

    render() {

        const { onUserName, onHomePage, onDesc, userName, desc, homePage } = this.state;

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
                            <OptionText>保存</OptionText>
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
                            <OptionText>保存</OptionText>
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
                            <OptionText>保存</OptionText>
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
            desc : this.props.currentUser.desc,
            homePage : this.props.currentUser.homePage
        })
    }

    saveUserName(e) {
        let value = e.target.value;
        if(value) {
            this.props.changeUserName(value)
        } 
        else {

        }
    }

    saveDesc(e) {
        let value = e.target.value;
        if(value) {
            this.props.changeDesc(value)
        } 
        else {
            
        }
    }

    saveHomePage(e) {
        let value = e.target.value;
        if(value) {
            this.props.changeHomePage(value)
        } 
        else {
            
        }
    }
}

const mapState = (state) => ({
    currentUser : state.getIn(['home', 'currentUser'])
})

const mapDispatch = (dispatch) => ({
    changeUserName(userName) {
        dispatch(homeActionCreators.modifyUserName(userName));
    },
    changeDesc(desc) {
        dispatch(homeActionCreators.modifyDesc(desc));
    },
    changeHomePage(homePage) {
        dispatch(homeActionCreators.modifyHomePage(homePage));
    }
})


export default connect(mapState, mapDispatch)(PersonnelInfo);