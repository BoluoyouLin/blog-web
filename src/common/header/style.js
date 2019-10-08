import styled from 'styled-components';
import logoPath from '../../statics/logo/logo.png'

export const HeaderWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 80px;
    background-color: white;
    padding: 0 18%;
    box-shadow: 0px 1px 2px #fff46f;
`;

export const Logo = styled.div`
    width: 160px;
    height: 60px;
    display: block;
    position: absolute;
    top: 10px;
    left: 18%;
    background: url(${logoPath});
    background-size: contain;
    cursor: pointer;
`;

export const Nav = styled.div`
    height: 60px;
    font-size: 18px;
    position: absolute;
    top: 10px;
    right: 18%;
`;

export const NavItem = styled.div`
    margin-left: 10px;
    height: 100%;
    color: #fbd103;
    float: right;
    line-height: 60px;
    text-align: center;
    cursor: pointer;
`;

export const NavInput = styled.input.attrs({
    placeholder: '搜你想看',
  })`
    width: 150px;
    height: 40px;
    background-color: #eee;
    border: 1px solid #eee;
    border-radius: 4px;
    color: #656363;
    margin: 10px 0;
    font-size: 16px;
    text-indent: 10px;
    &:focus {
        outline: #fff46f solid;
        border-shadow: 0 0 2px #fff46f;
        background: #fff;
    }
`;

export const Portrait = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    float: right;
    margin: 10px;
    cursor: pointer;
`;

export const PersonnelBar = styled.div`
    width: 150px;
    height: 200px;
    background: #fff;
    position: absolute;
    right: 0;
    top: 70px;
    border: 1px solid #eee;
    border-radius: 4px; 
    &.hidden {
        visibility: hidden;
    }
    &.show {
        visibility : initial;
    }
`;

export const BarItem = styled.div`
    width: 120px;
    line-height: 30px;
    padding: 5px 15px;
    font-size: 16px;
    color: #8c8686;
    cursor: pointer;
    border-bottom: 1px solid #eee;
    .zoom {
        margin-right: 15px;
    }
`;

export const LeftBar = styled.div`

`;

export const LeftBarItem = styled.div`
    
`;