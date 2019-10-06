import styled from 'styled-components';
import imgPath from '../../statics/images/article.png';

export const Wrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 200px;
    padding: 50px 0;
    text-align: center;
    background: #fff;
`;

export const Image = styled.img.attrs({
    src : imgPath
})`
    width: 80px;
`;

export const Tip = styled.p`
    font-size: 16px;
    color: #707070;
`;
