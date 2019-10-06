import styled from 'styled-components';

export const InformationWrapper = styled.div`
    width: 100%;
`;

export const InformationBody = styled.div`
    width: 960px;
    margin: 0 auto;
    margin-top: 20px;
`;

export const TopBar = styled.div`
    width: 70%;
    height: 30px;
    display: flex;
    background: #fff;
`;

export const TopBarItem = styled.div`
    flex: 1;
    text-align: center;
    height: 30px;
    line-height: 30px;
    font-size: 15px;
    color: #878787;
    cursor: pointer;
    &.on {
        color: #fdb103;
    }
`;

// personnelInfo.js
export const InfoWrapper = styled.div`
    width: 70%;
    box-sizing: border-box;
    padding: 32px 48px;
    background: #fff;
    margin-top: 10px;
    overflow: hidden;
`;

export const InfoTitle = styled.p`
    width: 100%;
    font-size: 20px;
    height: 33px;
    line-height: 33px;
    color: #333;
    padding: 16px 0;
    border-bottom: 1px solid #eee;
    font-weight: 500;
`;

export const InfoItem = styled.div`
    width: 100%;
    padding: 12px 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    min-height: 50px;
`;

export const ItemLabel = styled.p`
    width: 100px;
    font-size: 14px;
    color: #333;
`; 

export const ItemInput = styled.input`
    flex: 1;
    border: none;
    color: #909090;
    height: 35px;
    font-size: 15px;
    &:focus {
        outline: none;
    }
`;

export const OptionText = styled.p`
    width: 40px;
    font-size: 16px;
    color: #fdb103;
    cursor: pointer;
`;

export const NormalText = styled.p`
    width: 40px;
    font-size: 16px;
    color: #878787;
    cursor: pointer;
`;

// modifyPassword.js
export const Button = styled.div`
    width: 95px;
    height: 35px;
    font-size: 16px;
    margin-top: 20px;
    background: #fdb103;
    color: #fff;
    border-radius: 2px;
    text-align: center;
    line-height: 35px;
    float: right;
    cursor: pointer;
`;


