import { TutorialContainer } from './styles'
import { useSearchParams } from 'react-router-dom'
import Camera from './Camera'
import Design from './Design'
import RemoteControl from './RemoteControl'
import Tabs from './Tabs'

const Tutorial = () => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get('t')

    return (
        <TutorialContainer isCameraTutorial={query === 'camera'}>
            {
                !query
                    ? <Design />
                    : query === 'camera'
                        ? <Camera />
                        : <RemoteControl />
            }
            <Tabs />
        </TutorialContainer>
    )
}

export default Tutorial
