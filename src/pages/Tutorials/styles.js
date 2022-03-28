import styled from 'styled-components'

export const Container = styled.main`
    background: ${({ theme, isCameraTutorial }) => isCameraTutorial ? '#040404' : theme.colors.white};
    min-height: 100vh;
    padding: 100px 35px 35px 35px;
    position: relative;
    transition: all 0.4s ease-in-out;

    #aside {
        bottom: 20%;
        position: absolute;
        font-weight: 500;
        font-size: 14px;
        text-align: center;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        opacity: 0.24;
        transform: rotate(-90deg);
        transform-origin: 0 0;
    }

    #tabs {
        top: 45%;
        right: 35px;
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

    @media screen and (max-width: 800px) {
        #aside {
            display: none;
        }
    }
`
