import styled from 'styled-components';

// userCard.js
export const CardWrapper = styled.div`
    width: 30%;
    height: 160px;
    background: #fff;
    display: flex;
    order: 1;
`;

export const Portrait = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    padding: 20px;
`;

export const TextBox = styled.div`
    height: 100px;
    width: 40%;
    padding: 30px 0;
`;

export const UserName = styled.div`
    font-size: 25px;
    font-weight: 700;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    width: 100%;
    line-height: 30px;
    padding: 10px;
`;

export const Desc = styled.div`
    font-size: 16px;
    color: #e3e3e3;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    width: 100%;
    padding: 10px;
`;

export const InfoButton = styled.div`
    width: 120px;
    height: 35px;
    border: 2px solid #fbd103;
    box-sizing: border-box;
    text-align: center;
    background: #fff;
    color: #fbd103;
    border-radius: 5px;
    line-height: 35px;
    font-size: 16px;
    margin: 65px 0 0 40px;
    cursor: pointer;
`;

// content.js

export const ContentWrapper = styled.div`
    width: 65%;
    background: #fff;
    margin-right: 5%;
`;

export const ContentBar = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
`;

export const ContentBarItem = styled.div`
    height: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    flex: 1;
    border-bottom: 2px solid #e3e3e3;
    cursor: pointer;
    &.on {
        color: #fbd103;
        border-bottom: 2px solid #fbd103;
    }
`;

export const ContentBody = styled.div`
    width: 100%;
    background: #fff;
`;

// activities.js
export const ActivitiesItem = styled.div`
    width: 100%;
    box-sizing: border-box;
    height: 80px;
    padding: 16px 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
`;

export const ActivitiesImg = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
`;

export const Text = styled.span`
    margin: 0 4px;
    font-size: 15px;
    color: #8a9aa9;
    &.name {
        font-weight: 600;
        font-size: 15px;
        color: #17181a;
    }
`;

export const FocusButton = styled.div`
    width: 80px;
    height: 23px;
    background: #fbd103;
    text-align: center;
    line-height: 23px;
    margin-left: 400px;
    color: #fff;
    font-size: 14px;
    border-radius: 2px;
    cursor: pointer;
`;

// article.js
export const ArticleItem = styled.div`
    width: 92%;
    height: 100px;
    padding: 20px 4%;
    border-bottom: 1px solid #eee;
`;

export const InfoWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

export const ArticleTitle = styled.p`
    height: 30px;
    font-size: 20px;
    font-weight: 500;
    width: 100%;
    margin: 10px 0;
`;

export const ArticleText = styled.span`
    font-size: 15px;
    color: #878787;
    margin: 0 4px;
`;

export const ArticleAuthorImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
`;

export const Article = styled.p`
    width: 100%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    color: #8b8b8b;
    font-size: 16px;
`;

// like.js

export const ListItem = styled.div`
    padding: 28px 18px;
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
