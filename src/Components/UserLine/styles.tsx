import styled from "styled-components";

export const UserImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #000;  
    object-fit: cover;
`;

export const UserLineContainer = styled.div`
    display: flex;
    padding: 10px;
    gap: 10px;
`;

export const ChildrenContainer = styled.div`
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-left: 100px;
`;

export const Initials = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #000;
`;

export const Expander = styled.div<{ clickable?: boolean }>`
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
    cursor: ${({ clickable }) => clickable ? "pointer" : "default"};
`;
