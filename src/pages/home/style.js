import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 100%;
`;

export const BodyWrapper = styled.div`
    margin: 0 18%;
    display: flex;
    margin-top: 25px;
`;

export const LeftWrapper = styled.div`
    width: 70%;
    order: 0;
    margin: 0 20px;
    background: white;
`;

// list.js
export const ListWrapper = styled.div`
    padding: 10px;
`;

export const ListItem = styled.div`
    padding: 20px 10px;
    border-bottom: 1px solid #eae9e9; 
`;

export const ListTitle = styled.p`
    padding: 15px 0;
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    cursor: pointer;
`;

export const Information = styled.div`
    font-size: 14px;
    color: #9e9b9b;
`;

export const ListBottom = styled.div`
    display: flex;
`;

export const BottomItem = styled.div`
    text-align: center;
    padding: 2px 4px;
    color: #ecdba6;
    font-size: 14px;
    line-height: 20px;
    border: 1px solid #ecdba6;
    margin-left: 2px;
    cursor: pointer;
`;

// login.js
export const LoginWrapper = styled.div`
    width: 100%;
    padding: 20px 10px;
    background-color: #fff;
    height: 180px;
`;

export const LoginTitle = styled.div`
    font-size: 16px;
    font-weight: 500;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    margin-bottom: 20px;      
`;

export const Input = styled.input`
    width: 100%;
    height: 35px;
    background-color: #eee;
    border: none;
    margin-bottom: 10px;
    text-indent: 10px;
    font-size: 14px;
    &:focus {
        outline: #fff46f solid;
        border-shadow: 0 0 2px #fff46f;
        background: #fff;
    }
`;

export const LoginBottom = styled.div`
    width: 100%;
    line-height: 35px;
    background-color: #fbd103;
    color: #fff;
    margin-bottom: 10px;
    text-align: center;
    cursor: pointer;
`;
