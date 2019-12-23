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

export const Owner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        color: #7159c1;
        font-size: 14px;
        text-decoration: none;
        font-weight: bold;
    }

    img {
        width: 100px;
        border-radius: 50%;
        margin-top: 15px;
    }

    h1 {
        font-size: 24px;
        margin-top: 10px;
    }

    p {
        font-size: 14px;
        color: #666;
        line-height: 1.4;
        text-align: center;
        max-width: 400px;
    }
`;

export const IssuesList = styled.ul`
    padding-top: 30px;
    margin-top: 30px;
    border-top: 1px solid #ddd;
    list-style: none;

    li {
        display: flex;
        padding: 15px 10px;
        border: 1px solid #eee;
        border-radius: 4px;

        & + li {
            margin-top: 10px;
        }

        img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: 2px solid #eee;
        }

        div {
            flex: 1;
            margin-left: 15px;

            strong {
                font-size: 16px;

                a {
                    text-decoration: none;
                    color: #333;

                    :hover {
                        color: #7159c1;
                    }
                }

                span {
                    font-size: 12px;
                    background: #eee;
                    color: #333;
                    font-weight: 600;
                    border-radius: 4px;
                    padding: 3px 4px;
                    margin-left: 10px;
                    height: 20px;
                    line-height: 15px;
                }
            }

            p {
                margin-top: 5px;
                font-size: 12px;
                color: #999;
            }
        }
    }
`;
