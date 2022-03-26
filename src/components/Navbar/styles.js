import styled from 'styled-components'

export const Header = styled.header`
    position: fixed;
    width: 100%;

    #img {
        position: fixed;
        left: 50%;
        transform: translate(-50%, 0);
        top: ${({ path }) => path === '/' ? '50px' : '38px'};
    }

    ul {
        list-style: none;
        display: flex;
    }

    nav > ul {
        padding: ${({ path }) => path === '/' ? '60px 135px' : '40px 33px'};
        justify-content: space-between;
        align-items: center;
        
    } 

    a {
        font-weight: 500;
        text-transform: uppercase;
        font-size: 14px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 1px;
        color: ${({ theme }) => theme.colors.black};

        &:nth-child(odd) {
            padding-right: 55px;
        }

        svg {
            opacity: 20%;
        }
    }

    @media screen and (max-width: 786px) {
        #left-menu {
            opacity: 0;
        }

        nav > ul {
            padding: 40px 33px;
        } 
    }
`
