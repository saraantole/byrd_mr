import { useSearchParams } from 'react-router-dom'
import TutorialSteps from '../../components/TutorialSteps'
import { Container } from './styles'

const Tutorials = () => {
    const [searchParams] = useSearchParams()

    return (
        <Container isCameraTutorial={searchParams.get('t') === 'camera'}>
            <p id='aside'>F-210 Performance Racing Drone</p>
            <TutorialSteps />
        </Container>
    )
}

export default Tutorials
