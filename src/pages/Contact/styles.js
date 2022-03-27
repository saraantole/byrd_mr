import styled from 'styled-components'

export const Container = styled.main`
    background: ${({ theme }) => theme.colors.beige};
    min-height: 100vh;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form {
        width: 658px;
        height: 485px;
    }

    label {
        font-weight: 500;
        font-size: 14px;
        line-height: 15px;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        padding-bottom: 10px;
    }

    input, textarea {
        width: 100%;
        background: transparent;
        padding: 0;
        margin: 8px 0;
        display: inline-block;
        border: none;
        border-bottom: 1px solid rgba(49, 33, 27, 0.2);
        font-size: 18px;
        padding-bottom: 20px;
        margin-bottom: 24px;

        &:placeholder {
            color: ${({ theme }) => theme.colors.black};
            opacity: 0.3;
        }

        &:focus {
            outline: none;
        }
    }

    textarea {
        resize: none;
        height: 80px;
    }

    button {
        font-family: 'Archivo';
        font-size: 20px;
        font-weight: 500;
        line-height: 23px;
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.orange};
        padding: 22px;
        border: none;
        cursor: pointer;

        svg {
            margin-left: 5px;
        }
    }
`
