import styled from 'styled-components'

export const RemoteContainer = styled.div`
    width: 633px;
    height: 559px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    @media screen and (max-width: 1000px) {
        margin: 0 auto 40px auto;
        width: 474px;
        height: 418px;
    }

    @media screen and (max-width: 600px) {
        width: 323px;
        height: 285px;
    }
`
