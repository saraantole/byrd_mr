import styled from 'styled-components'

export const Container = styled.main`
    background: ${({ theme, isCameraTutorial }) => isCameraTutorial ? '#040404' : theme.colors.white};
    min-height: 100vh;
    padding: 100px 35px 35px 35px;
    position: relative;
    transition: all 0.4s ease-in-out;
    display: flex;
    align-items: center;

    #aside {
        bottom: 20%;
        position: absolute;
        font-weight: 500;
        font-size: 14px;
        text-align: center;
        letter-spacing: 1px;
        text-transform: uppercase;
        color:  ${({ theme, isCameraTutorial }) => isCameraTutorial ? theme.colors.white : theme.colors.black};
        opacity: 0.24;
        transform: rotate(-90deg);
        transform-origin: 0 0;
    }

    @media screen and (max-width: 1000px) {
        padding: 140px 60px 95px 60px;

        #aside {
            display: none;
        }
    }

    @media screen and (max-width: 600px) {
        padding: 120px 27px 33px 27px;
    }
`
