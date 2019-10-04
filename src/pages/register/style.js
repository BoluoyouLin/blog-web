import styled from 'styled-components';
import logoPath from '../../statics/logo/logo.png';

export const RegisterWrapper = styled.div`
   width: 450px;
   background-color: #fff;
   position: absolute;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
   margin: auto;
   padding: 200px 20px;
   box-sizing: border-box;
`;

export const Title = styled.p`
    width: 100%;
    text-align: center;
    font-size: 25px;
    font-weight: 500;
    color: #fbd103;
    line-height: 35px;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    width: 100%;
    line-height: 35px;
    background-color: #eee;
    color: #e3e3e3;
    text-indent: 10px;
    font-size: 16px;
    border: 0;
    margin-bottom: 10px;
    &:focus {
        outline: #fff46f solid;
        border-shadow: 0 0 2px #fff46f;
        background: #fff;
    }
`;
 
export const Button = styled.div`
    width: 100%;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    background-color: #fbd103;
    cursor: pointer;
`;

export const BackHome = styled.p`
    font-size: 16px;
    color: #fbd103;
    margin: 10px 0;
    line-height: 20px;
    text-align: right;
    cursor: pointer;
`;

export const Logo = styled.div`
    width: 160px;
    height: 60px;
    display: block;
    position: absolute;
    top: 50px;
    left: 50%;
    margin-left: -80px;
    background: url(${logoPath});
    background-size: contain;
    cursor: pointer;
`;
