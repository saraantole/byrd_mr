import { Container } from './styles'
import DroneImage from '../../images/Drone.png'

const Hero = () => {
    return (
        <Container>
            <img src={DroneImage} alt='drone' />
            <h1>F-210</h1>
            <h2>“The Fastest Drone on the Planet”</h2>
            <h3>“The&#x2013; The Wirecutter”</h3>
        </Container>
    )
}

export default Hero
