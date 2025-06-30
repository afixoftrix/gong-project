import styled from "styled-components";

export const PageLayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`;

export const PageContent = styled.div<{ centerAlign?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: ${({ centerAlign }) => centerAlign ? "center" : "flex-start"};
    justify-content: ${({ centerAlign }) => centerAlign ? "center" : "flex-start"};
    height: 100%;
    width: 100%;
    overflow-y: scroll;
`;