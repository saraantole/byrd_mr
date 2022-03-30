import { RemoteContainer } from './styles'
import RemoteControlImage from '../../../images/Remote.png'
import { Tutorial, Description } from '../Design/styles'

const RemoteControl = () => {
    return (
        <Tutorial>
            <Description>
                <h1>Remote Control</h1>
                <p>Classic outer design, more humane control design. Adopting 2.4Hz direct sequence spread spectrum technology (DSSS), the Devo 7 can match frequency and assign ID automatically. The devo7 has wireless copy function, The player can set his own fixed checkpoints.</p>
            </Description>
            <RemoteContainer>
                <img src={RemoteControlImage} alt='remote control' />
            </RemoteContainer>
        </Tutorial>
    )
}

export default RemoteControl
