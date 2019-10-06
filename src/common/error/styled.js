import styled from 'styled-components';

export const ErrorWrapper = styled.div`
    padding: 15px 20px;
    height: 50px;
    text-align: center;
    box-sizing: border-box;
    background: #fbd103;
    font-size: 16px;
    color: #fb9803;
    position: fixed;
    top: 50px;
    right: 20px;
    visibility: hidden;
    border: 1px solid #fb9803;
    &.show {
        visibility: visible;
    }
`;