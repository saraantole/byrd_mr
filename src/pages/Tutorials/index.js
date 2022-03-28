import { useSearchParams, useNavigate } from 'react-router-dom'
import TutorialSteps from '../../components/TutorialSteps'
import { Container } from './styles'

const Tutorials = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()

    const handleTutorials = step => {
        if (!step) {
            navigate('/tutorials')
        } else {
            navigate(`/tutorials?t=${step}`)
        }
    }

    return (
        <Container isCameraTutorial={searchParams.get('t') === 'camera'}>
            <p id='aside'>F-210 Performance Racing Drone</p>
            <TutorialSteps />
            <ul id='tabs'>
                <li className={!searchParams.get('t') ? 'active' : null} onClick={() => handleTutorials(undefined)} />
                <li className={searchParams.get('t') === 'camera' ? 'active' : null} onClick={() => handleTutorials('camera')} />
                <li className={searchParams.get('t') === 'remote' ? 'active' : null} onClick={() => handleTutorials('remote')} />
            </ul>
        </Container>
    )
}

export default Tutorials
