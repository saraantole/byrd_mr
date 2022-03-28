import { TutorialsContainer, Tutorial } from './styles'
import DroneImage from '../../images/Drone.png'
import RemoteControlImage from '../../images/Remote.png'
import CameraImage from '../../images/camera.png'
import { useSearchParams } from 'react-router-dom'

const TutorialSteps = () => {
    const [searchParams] = useSearchParams()

    return (
        <TutorialsContainer isCameraTutorial={searchParams.get('t') === 'camera'}>
            <Tutorial>
                {
                    !searchParams.get('t')
                        ? <>
                            <div id='description'>
                                <h1>Craft and design.</h1>
                                <p>Breakthrough design makes F-210 essentially improved. With a new bow body design and carbon fiber material, it has superior ruggedness and anti-drop ability. Though improved small details, it will definitely give you more satisfaction. Axis equidistant design ensures the gravity center of the aircraft in the middle, which makes the flight more stable and turning agiler. Motor protection cover makes flying safer.</p>
                            </div>
                            <div id='img'>
                                <img src={DroneImage} alt='drone' />
                            </div>
                        </>
                        : searchParams.get('t') === 'camera'
                            ? <>
                                <div id='img'>
                                    <img width={442} src={CameraImage} alt='camera' />
                                </div>
                                <div id='description'>
                                    <h1>Camera</h1>
                                    <p>Breakthrough design makes F-210 essentially improved. With a new bow body design and carbon fiber material, it has superior ruggedness and anti-drop ability. Though improved small details, it will definitely give you more satisfactionAxis equidistant design ensures the gravity center of the aircraft in the middle, which makes the flight more stable and turning agiler. Motor protection cover makes flying safer.</p>
                                </div>
                            </>
                            : <>
                                <div id='description'>
                                    <h1>Remote Control</h1>
                                    <p>Classic outer design, more humane control design. Adopting 2.4Hz direct sequence spread spectrum technology (DSSS), the Devo 7 can match frequency and assign ID automatically. The devo7 has wireless copy function, The player can set his own fixed checkpoints.</p>
                                </div>
                                <div id='img'>
                                    <img src={RemoteControlImage} alt='remote control' />
                                </div>
                            </>

                }

            </Tutorial>

        </TutorialsContainer>
    )
}

export default TutorialSteps
