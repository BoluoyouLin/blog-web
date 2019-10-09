import styled from 'styled-components';
import logoPath from '../../statics/logo/logo.png';
import backgroundImg from '../../statics/images/background.jpg';

export const NewArticleWrapper = styled.div`
    width: 100%;
    background: #fff;
`;

export const TopBar = styled.div`
    width: 80%;
    height: 70px;
    padding: 0 10%;
    position: relative;
    background-color: #fff;
    border-bottom: 1px solid #fff46f;
`;

export const Title = styled.div`
    line-height: 70px;
    text-align: center;
    color: #fbd103;
    font-size: 20px;
    font-weight: 500px;
    position: absolute;
    left: 180px;
`;

export const Logo = styled.div`
    width: 160px;
    height: 60px;
    display: block;
    background: url(${logoPath});
    background-size: contain;
    cursor: pointer;
    position: absolute;
    left: 0;
`;

export const Body = styled.div`
    width: 90%;
    background-color: #fff;
    padding: 20px 5%;
`;

export const Label = styled.p`
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 10px;
`;

export const Input = styled.input`
    width: 100%;
    height: 35px;
    color: #000;
    background: #fff;
    font-size: 16px;
    text-indent: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: rgba(0,0,0,0.1) 0px 0px 12px;
    margin-bottom: 10px;
    &:focus {
        outline: #fff46f solid;
        border-shadow: 0 0 2px #fff46f;
    }
`;

export const Button = styled.div`
    height: 35px;
    line-height: 35px;
    border-radius: 4px;
    background: #fbd103;
    font-size: 16px;
    color: #fff;
    text-align: center;
    margin: 0 5px;
    padding: 4px 8px;
    cursor: pointer;
`;

export const ArticleBottom = styled.div`
    width: 90%;
    padding: 10px 5%;
    height: 50px;
    display: flex;
    justify-content: center;
`;

// articleDetails.js
export const DetailsWrapper = styled.div`
    width: 100%;
`;

export const DetailsHeader = styled.div`
    width: 100%;
    height: 340px;
    background: url(${backgroundImg});
    text-align: center;
    padding-top: 160px;
    box-sizing: border-box;
`;

export const DetailsTitle = styled.div`
    color: #fff;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 30px;
`;

export const DetailsInfo = styled.div`
    display: flex;
    justify-content: center;
`;

export const InfoItem = styled.p`
    margin: 0 15px;
    color: #fff;
    font-size: 14px;
`;

export const DetailsBody = styled.div`
    width: 1080px;
    margin: 0 auto;
    margin-top: 20px;
    background: #fff;
    padding: 50px 30px;
    box-sizing: border-box;
    font-size: 16px;
    color: #333;
`;
