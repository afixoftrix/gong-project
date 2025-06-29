import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    width: 100%;
`;

export const HeaderTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
`;

export const HeaderActions = styled.div`
    display: flex;
    gap: 1rem;
`;

export const HeaderActionButton = styled.button`
    background-color: #000000;
    color: #ffffff;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    border: none;
    cursor: pointer;
`;
