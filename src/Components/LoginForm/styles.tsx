import styled from "styled-components";

export const LoginFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;

    h1 {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 1rem;
        text-align: center;
    }
`;

export const LoginFormInput = styled.input`
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid #000000;
    width: 300px;
`;

export const LoginFormButton = styled.button`
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid #000000;
    background-color: var(--color-lavender);
    color: #fff;
    width: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

export const FormLabel = styled.label`
    font-size: 1rem;
    font-weight: 400;
    width: 140px;
    line-height: 36px;
    text-align: right;
    margin-right: 1rem;
`;

export const FormError = styled.p`
    color: red;
    font-size: 0.8rem;
    font-weight: 600;
`;

interface InputGroupProps {
    isCentered?: boolean;
}

export const InputGroup = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isCentered'
}) <InputGroupProps>`
    margin-bottom: 1rem;
    display: flex;
    width: 400px;
    justify-content: ${props => props.isCentered ? "center" : "space-between"};
`;

export const Form = styled.form`
    border: 1px solid #000000;
    padding: 1rem;
    border-radius: 0.25rem;
`;