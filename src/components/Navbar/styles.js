import styled from 'styled-components'

export const Header = styled.header`
    position: fixed;
    z-index: 1;
    width: 100%;

    #img {
        position: fixed;
        left: 50%;
        transform: translate(-50%, 0);
        top: ${({ path }) => path === '/' ? '50px' : '38px'};
        padding: 0;

        img {
            width: ${({ path }) => path === '/' ? '216px' : '176px'}; 
        }
        
    }

    ul {
        list-style: none;
        display: flex;
    }

    nav > ul {
        padding: ${({ path }) => path === '/' ? '60px 135px' : '40px 35px'};
        justify-content: space-between;
        align-items: center;
    } 

    nav > ul > li {
        width: 50%;

        &:nth-of-type(2) {
            display: flex;
            justify-content: flex-end;
        }

        li:nth-of-type(even) {
            margin-left: 55px;
        }
    }

    a {
        font-weight: 500;
        text-transform: uppercase;
        font-size: 14px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 1px;
        color: ${({ theme }) => theme.colors.black};

        svg {
            opacity: 20%;
        }
    }

    .right-menu {
        visibility: ${({ path }) => path === '/' ? 'visible' : 'hidden'};
    }

    #hamburger-icon {
        visibility: ${({ path }) => path === '/' ? 'hidden' : 'visible'};
    }

    @media screen and (max-width: 970px) {
        #left-menu, .right-menu {
            visibility: hidden;
            width: 50%;
        }

        #hamburger-icon {
            visibility: visible;
        }

        nav > ul {
            padding: 40px 33px;
        } 
    }

    @media screen and (max-width: 600px) {
        #img {
            top: 35px;

            img {
                width: 136px; 
            }   
        }
    }
`
