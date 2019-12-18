import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const Loading = styled.div.attrs(props => ({
    loading: props.loading
}))`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    svg {
        animation: ${spinner} 2s linear infinite;
    }

    svg {
        margin-top: 15px;
    }
`;
