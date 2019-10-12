import styled from 'styled-components';

export const CommentWrapper = styled.div`
    width: 1080px;
    margin: 0 auto;
    margin-top: 20px;
    background: #fff;
    padding: 20px 30px 10px;
    box-sizing: border-box;
    font-size: 16px;
    color: #333;
`;

export const CommentList = styled.div`
    &.second {
        padding: 10px 20px;
        background: #eee;
        border-radius: 2px;
    }`
;

export const CommentListItem = styled.div`
    position: relative;
    border-bottom: 1px solid #ddd;
    &.second {
        display: flex;
    }
`;

export const Portrait = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
`;

export const CommentContentBox = styled.div`
    margin-left: 60px;
`;

export const ContentText = styled.p`
    margin: 10px 0;
    color: #333 
    &.userName {
       cursor: pointer; 
       color : #fbd103;
    }
    &.date {
        color: #656565;
        font-weight: 300;
        font-size: 14px;
    }
    &.second {
        margin-right: 20px;
    }
    &.comment {
        flex: 1
    }
`;

export const ListItemInput = styled.input`
    height: 30px;
    border-radius: 2px;
    border: 1px solid #ddd;
    flex: 1;
`;

export const CommentButton = styled.div`
    height: 30px;
    line-height: 30px;
    margin: 0 20px;
    padding: 0 10px;
    text-align: center;
    background: #fbd103;
    color: #fff;
    border-radius: 2px;
    cursor: pointer;
`;

export const CommentInputBox = styled.div`
    display: flex;
    margin-left: 60px;
    padding: 20px 0;
    align-items: center;
    
`;

export const CommentInputBottom = styled.div``;
 