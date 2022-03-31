import styled from 'styled-components'

export const Container = styled.main`
    background: ${({ theme }) => theme.colors.beige};
    min-height: 100vh;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 500px) {
        justify-content: flex-start;
    }
`

export const Form = styled.form`
    width: 658px;

    label {
        font-weight: 700;
        font-size: 14px;
        line-height: 15px;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        padding-bottom: 12px;
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

        &::placeholder {
            color: ${({ theme }) => theme.colors.black};
            opacity: 0.2;
        }

        &:focus {
            outline: none;
        }
    }

    textarea {
        resize: none;
        height: 120px;
    }

    button {
        font-family: 'Archivo';
        font-size: 20px;
        font-weight: 500;
        line-height: 23px;
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.orange};
        padding: 18px 22px;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 224px;
    }

    @media screen and (max-width: 800px) {
        width: 85%;

        textarea {
            height: 200px;
        }
    }

    @media screen and (max-width: 500px) {
        margin-top: 127px;

        button {
            width: 100%;
        }

        textarea {
            height: 160px;
        }
    }
`
