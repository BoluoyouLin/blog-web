import styled from 'styled-components';

export const ListWrapper = styled.div`
    padding: 10px;
    margin: 0 auto;
    width: 60%;
    background: #fff;
    margin-top: 20px;
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
    display: flex;
    align-items: center;
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

export const Text = styled.p`
    font-weight: 300px;
    color: #9e9b9b;
    margin-right: 5px;
    &.userName {
        color: #333;
        cursor: pointer;
    }
`;

export const Portrait = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
`;