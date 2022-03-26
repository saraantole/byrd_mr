import styled from 'styled-components'

export const Header = styled.header`
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ path }) => path === '/' ? '60px 135px' : '40px 33px'};

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
`
