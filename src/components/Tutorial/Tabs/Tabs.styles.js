import styled from 'styled-components'

export const TabsContainer = styled.div`
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


    @media screen and (max-width: 1000px) {
        transform: rotate(-90deg);
        bottom: -50px;
        right: 50%;
    }
`
