import { useSearchParams } from 'react-router-dom'
import Tutorial from '../../components/Tutorial/Tutorial.component'
import { Container } from './Tutorials.styles'

const Tutorials = () => {
    const [searchParams] = useSearchParams()

    return (
        <Container isCameraTutorial={searchParams.get('t') === 'camera'}>
            <p id='aside'>F-210 Performance Racing Drone</p>
            <Tutorial />
        </Container>
    )
}

export default Tutorials
