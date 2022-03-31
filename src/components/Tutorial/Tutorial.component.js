import { TutorialContainer } from './Tutorial.styles'
import { useSearchParams } from 'react-router-dom'
import Camera from './Camera/Camera.component'
import Design from './Design/Design.component'
import RemoteControl from './RemoteControl/RemoteControl.component'
import Tabs from './Tabs/Tabs.component'

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
