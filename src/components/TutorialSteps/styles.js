import styled from 'styled-components'

export const TutorialsContainer = styled.div`
    width: 100%;
    color: ${({ theme, isCameraTutorial }) => isCameraTutorial ? theme.colors.white : theme.colors.black};
`

export const Tutorial = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 40px;
    justify-content: space-between;

    h1 {
        font-size: 44px;
        font-weight: 500;
        line-height: 48px;
        position: relative;
        margin-bottom: 40px;

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
    }

    #img {
        width: 537px;
    }

    img {
        width: 100%
    }

    @media screen and (max-width: 800px) {
        padding: 0px;
        background: red;
        flex-direction: column-reverse;
        justify-content: flex-start;

        #img {
            width: 440px;
        }
    }

`
