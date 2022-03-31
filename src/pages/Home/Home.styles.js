import styled from 'styled-components'

export const Container = styled.main`
    background: ${({ theme }) => theme.colors.beige};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    text-align: center;
    position: relative;

    img {
        width: 429px;
        height: 354px;
        margin-top: 160px;
    }

    h1 {
        font-weight: 700;
        font-size: 235px;
        line-height: 265px;
        letter-spacing: 18.8px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.white};
        margin-top: -20px;
        margin-bottom: -30px;
    }

    h2, h3 {
        font-weight: 500;
        color: ${({ theme }) => theme.colors.black};
        opacity: 0.2;
    }

    h2 {
        font-size: 18px;
        line-height: 20px;
        letter-spacing: 1.2px;
        margin-bottom: 10px;
        text-transform: uppercase;
    }

    h3 {
        font-size: 14px;
        line-height: 15px;
        letter-spacing: 1px;
    }

    @media screen and (max-width: 900px) {
        img {
            margin-top: 214px;
            width: 544px;
            height: 449px;
        }

        h1 {
            font-size: 175px;
        }
    }

    @media screen and (max-width: 552px) {
        img {
            margin-top: 100px;
            width: 410px;
            height: 338px;
        }

        h1 {
            font-size: 104px;
            line-height: 113px;
            letter-spacing: 4.72px;
            margin-top: 0;
            margin-bottom: 0;
        }
    }
`
