import styled from 'styled-components'

export const Tutorial = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        margin: 0 auto 20px auto;
    }
`

export const CameraContainer = styled.div`
    width: 537px;
    height: 444px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    @media screen and (max-width: 1000px) {
        margin: 0 auto 20px auto;
        width: 480px;
        height: 441px;
    }

    @media screen and (max-width: 600px) {
        height: 277px;
        width: 269px;
        margin: 0 auto 20px auto;
    }
`

export const Description = styled.div`
    h1 {
        font-size: 44px;
        font-weight: 500;
        line-height: 48px;
        position: relative;
        margin-bottom: 40px;
        white-space: nowrap;

        &::after {
            content: '';
            left: 0;
            top: 50px;
            position: absolute;
            height: 4px;
            width: 82px;
            background: ${({ theme }) => theme.colors.orange};
        }
    }

    p {
        font-size: 20px;
        line-height: 32px;
        opacity: 0.5;
        max-width: 432px;
    }

    @media screen and (max-width: 1000px) {
        p {
            max-width: 70%;
        }
    }
    
    @media screen and (max-width: 600px) {
        h1 {
            font-size: 32px;
        }

        p {
            max-width: 100%;
            font-size: 16px;
            line-height: 26px;
        }
    }

`

export const Details = styled.div`
    position: absolute;
    bottom: -25%;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    justify-content: center;

    div {
        text-align: center;
        margin: 0 40px;
        white-space: nowrap;

        h2 {
            font-weight: 400;
            font-size: 52px;
            line-height: 57px;
        }

        h3 {
            font-weight: 500;
            font-size: 14px;
            line-height: 15px;
            letter-spacing: 1px;
            text-transform: uppercase;
            opacity: 0.24;
        }
    }

    @media screen and (max-width: 1000px) and (min-width: 601px)  {
        flex-direction: column;
        bottom: 5%;
        left: 95%;

        div {
            margin: 20px 0;
        }
    }

    @media screen and (max-width: 600px) {
        position: relative;

        div {
            margin: 40px 20px 0 20px;

            h2 {
                font-size: 34px;
                line-height: 39px;
            }

            h3 {
                font-size: 11px;
                line-height: 12px;
            }
        }
    }
`
