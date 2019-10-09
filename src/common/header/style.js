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
    float: left;
    margin : 10px 5px;
    background: url(${logoPath});
    background-size: contain;
    cursor: pointer;
`;

export const Nav = styled.div`
    height: 80px;
    font-size: 18px;
    float: right;
    right: 18%;
`;

export const NavItem = styled.div`
    color: #fdb103;
    float: right;
    text-align: center;
    cursor: pointer;
    padding: 39px 10px 22px; 
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
    margin: 25px 10px 10px;
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
    margin: 28px 10px 11px;
    cursor: pointer;
`;

export const PersonnelBar = styled.div`
    width: 150px;
    height: 200px;
    background: #fff;
    position: absolute;
    right: 150px;
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
    float: left;
    height: 80px;
`;

export const LeftBarItem = styled.div`
    font-weight: 400;
    color: #fdb103;
    cursor: pointer;
    font-size: 18px;
    padding: 39px 10px 22px;
`;

export const ArticleButton = styled.div`
    height: 40px;
    float: right;
    width: 91px;
    background: #fdb103;
    color: #fff;
    border-radius: 4px;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    margin: 27px 5px 12px;
    cursor: pointer;
    .zoom {
        margin-right: 6px;
    }
`;