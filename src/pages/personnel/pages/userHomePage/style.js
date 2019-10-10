import styled from 'styled-components';
import backgroundImg from '../../../../statics/images/background.jpg';

export const UserHomePageWrapper = styled.div`
    width: 100%;
`;

export const HomePageHeaderWrapper = styled.div`
    box-sizing: border-box;
    padding-top: 70px;
    width: 100%;
    height: 270px;
    background: url(${backgroundImg});
    text-align: center;
`;

export const Portrait = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
`;

export const HomePageBodyWrapper = styled.div`
    width: 960px;
    margin: 20px auto;
    background: #fff;
    padding: 30px 20px;
`;

export const UserName = styled.p`
    margin-top: 10px;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
`;

export const FocusButton = styled.div`
    width: 100px;
    height: 30px;
    line-height: 30px;
    background: #fb9803;
    border: 1px solid #fff;
    border-radius: 2px;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    margin: 10px auto;
    cursor: pointer;
`;

export const TextBox = styled.div`
    font-size: 16px;
    color: #fff;
    margin-top: 10px;
`;

export const TextItem = styled.p`
    margin: 0 10px;
    &.blog {
        font-size: 20px;
        border-bottom: 2px solid #fdb103;
        padding: 0 0 10px 10px;
        font-weight: 300;
    }
    &.date {
        font-weight: 300;
    }
`;

export const ArticleTitle = styled.p`
    font-weight: 300;
    cursor: pointer;
`;

export const ArticleWrapper = styled.div`
    margin: 20px 13px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
`;

export const ArticleItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid #d9d9d9;
`;


