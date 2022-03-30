import styled from 'styled-components'

export const Tutorial = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 1000px) {
        flex-direction: column-reverse;
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
            max-width: 100%;
        }
    }
    
    @media screen and (max-width: 600px) {
        h1 {
            font-size: 32px;
        }

        p {
            font-size: 16px;
            line-height: 26px;
        }
    }

`

export const Drone = styled.div`
    width: 537px;
    height: 444px;
    position: relative;

    svg {
        position: absolute;
        cursor: pointer;

        &:nth-of-type(1) {
            top: 0;
            left: 50%;
        }

        &:nth-of-type(2) {
            top: 40%;
            left: 40%;
        }

        &:nth-of-type(3) {
            top: 70%;
            left: 5%;
        }

        &:nth-of-type(4) {
            top: 60%;
            right: 15%;
        }
    }
    
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
        height: 266px;
        width: 322px;
        margin: 0 auto 40px auto;
    }
`

export const Detail = styled.div`
    position: absolute;
    width: 559px;
    height: 627px;
    top: -60px;
    left: 60px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    svg {
        cursor: pointer;
        position: absolute;
        top: 24px;
        right: 24px;
    }


    @media screen and (max-width: 1000px) {
        top: 0;
        width: 100%;
        height: 441px;
        left: 0;
    }

    @media screen and (max-width: 600px) {
        height: 266px;
    }

`
