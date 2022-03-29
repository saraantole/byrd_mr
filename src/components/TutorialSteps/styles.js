import styled from 'styled-components'

export const TutorialsContainer = styled.div`
    width: 100%;
    color: ${({ theme, isCameraTutorial }) => isCameraTutorial ? theme.colors.white : theme.colors.black};
`

export const Tutorial = styled.div`
    padding: 0 100px;
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 100%;

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
        width: 432px;
        margin-right: 30px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    #drone {
        width: 537px;
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
    }

    #detail {
        position: absolute;
        width: 559px;
        height: 627px;
        top: -60px;
        left: 60px;

        svg {
            cursor: pointer;
            position: absolute;
            right: 24px;
            top: 24px;
        }


        img {
            height: 100%;
            object-fit: cover;
            object-position: center;
        }

    }

    #camera {
        width: 447px;
    }

    #remote {
        width: 600px;
    }

    #camera-details {
        position: absolute;
        bottom: -20%;
        left: 50%;
        transform: translate(-50%, 0);
        display: flex;
        justify-content: center;

        div {
            text-align: center;
            margin: 0 40px;

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
    }

    #tabs {
        bottom: 45%;
        right: 0;
        position: absolute;
        width: 2px;
        height: 94px;
        list-style: none;

        li {
            background: ${({ theme }) => theme.colors.beige};
            border-radius: 5.5px;
            width: 2px;
            height: 30px;
            margin-bottom: 2px;
            cursor: pointer;
        }

        .active {
            background: ${({ theme }) => theme.colors.orange};
        }
    }

    @media screen and (max-width: 1000px) {
        padding: 0px;
        flex-direction: column-reverse;

        p {
            width: 100%;
        }

        #drone, #remote {
            margin: 0 auto 20px auto;
            width: 100%;
        }


        #tabs {
            transform: rotate(-90deg);
            bottom: -50px;
            right: 50%;
        }

        #detail {
            top: 0;
            width: 100%;
            height: 441px;
            left: 0;
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


        #detail {
            height: 300px;
        }
    }
`
