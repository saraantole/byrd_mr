import styled from 'styled-components'

export const TutorialContainer = styled.div`
    width: 100%;
    color: ${({ theme, isCameraTutorial }) => isCameraTutorial ? theme.colors.white : theme.colors.black};
    padding: 0 100px;
    position: relative;

    @media screen and (max-width: 1000px) {
        padding: 0;
    }
`
