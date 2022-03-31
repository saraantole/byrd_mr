import styled from 'styled-components'

export const Lines = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
        border-radius: 10px;
        background: ${props => props.toggleMenu ? props.theme.colors.white : props.theme.colors.orange};
        height: 3px;
        display: inline-block;
        cursor: pointer;

        &:first-of-type {
            width: 29px;
            transform: ${props => props.toggleMenu && 'rotate(45deg)'};
            transition: transform 0.8s ease-in-out;
            transition: background 1s ease-in-out;
        }

        &:last-of-type {
            margin-top: ${props => !props.toggleMenu ? '6px' : '-2px'};
            width: ${props => props.toggleMenu ? '29px' : '22px'};
            transform: ${props => props.toggleMenu && 'rotate(-45deg)'};
            transition: transform 0.8s ease-in-out;
            transition: background 1s ease-in-out;
        }
    }
`

export const SideMenu = styled.div`
    position: fixed;
    top: 0;
    left: ${({ toggleMenu }) => toggleMenu ? '0' : '100%'};
    transition: 0.8s left ease-in-out;
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.colors.orange};
    text-align: center;

    img {
        margin: 38px 0 0 0;
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 100px 205px;


        ul {
            display: block;
            text-align: right;

            li {
                cursor: pointer;
                color: ${({ theme }) => theme.colors.white};
                font-size: 44px;
                line-height: 48px;
                text-transform: none;
            }
        }

        img {
            width: 573px;
            height: 444px;
        }
    }

    @media screen and (max-width: 950px) {
        div {
            flex-direction: column-reverse;

            img {
                width: 400px;
                height: 300px;
            }
        }
    }
`
