import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
    max-width: 700px;
    background: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    margin: 80px auto;

    h1 {
        font-size: 20px;
        display: flex;
        flex-direction: row;
    }

    svg {
        margin-right: 10px;
    }
`;

export const Form = styled.form`
    margin-top: 20px;
    display: flex;
    flex-direction: row;

    input {
        flex: 1;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 16px;
        border: 1px solid #ddd;
    }
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading
}))`
    background: #7159c1;
    border-radius: 4px;
    border: 0;
    margin-left: 10px;
    padding: 0 15px;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        margin-right: 0px;
    }

    &:hover {
        background: #7159f1;
    }

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.5;

        :hover {
            background: #7159c1;
        }
    }

    ${props =>
        props.loading &&
        css`
            svg {
                animation: ${rotate} 2s linear infinite;
            }
        `}
`;

export const Result = styled.h1`
    color: #555;
`;

export const List = styled.ul`
    list-style: none;
    margin-top: 30px;

    li {
        padding: 15px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        & + li {
            border-top: 1px solid #ddd;
        }

        a {
            text-decoration: none;
            font-weight: bold;
            color: #7159c1;
        }
    }
`;
