import { TutorialsContainer, Tutorial } from './styles'
import DroneImage from '../../images/Drone.png'
import RemoteControlImage from '../../images/Remote.png'
import CameraImage from '../../images/camera.png'
import Detail4 from '../../images/detail.png'
import { useNavigate, useSearchParams } from 'react-router-dom'
import PlusIcon from '../../icons/PlusIcon'
import CrossIcon from '../../icons/CrossIcon'
import { useState } from 'react'

const TutorialSteps = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const [detail, setDetail] = useState(undefined)

    const handleTutorials = step => {
        if (!step) {
            navigate('/tutorials')
        } else {
            navigate(`/tutorials?t=${step}`)
        }
    }

    const handleDetail = selectedDetail => setDetail(selectedDetail)

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
                            <div id='drone'>
                                <img src={DroneImage} alt='drone' />
                                <PlusIcon selected={detail === 1} action={() => handleDetail(1)} />
                                <PlusIcon selected={detail === 2} action={() => handleDetail(2)} />
                                <PlusIcon selected={detail === 3} action={() => handleDetail(3)} />
                                <PlusIcon selected={detail === 4} action={() => handleDetail(4)} />
                            </div>
                            {
                                detail && <div id='detail'>
                                    <CrossIcon action={() => handleDetail(undefined)} />
                                    <img src={Detail4} alt='drone details' />
                                </div>
                            }
                        </>
                        : searchParams.get('t') === 'camera'
                            ? <>
                                <div id='camera'>
                                    <img src={CameraImage} alt='camera' />
                                </div>
                                <div id='description'>
                                    <h1>Camera</h1>
                                    <p>Breakthrough design makes F-210 essentially improved. With a new bow body design and carbon fiber material, it has superior ruggedness and anti-drop ability. Though improved small details, it will definitely give you more satisfactionAxis equidistant design ensures the gravity center of the aircraft in the middle, which makes the flight more stable and turning agiler. Motor protection cover makes flying safer.</p>
                                </div>
                                <div id='camera-details'>
                                    <div>
                                        <h2>700</h2>
                                        <h3>TVL Video</h3>
                                    </div>
                                    <div>
                                        <h2>120˚</h2>
                                        <h3>Visual Range</h3>
                                    </div>
                                    <div>
                                        <h2>HD</h2>
                                        <h3>Night Vision</h3>
                                    </div>
                                </div>
                            </>
                            : <>
                                <div id='description'>
                                    <h1>Remote Control</h1>
                                    <p>Classic outer design, more humane control design. Adopting 2.4Hz direct sequence spread spectrum technology (DSSS), the Devo 7 can match frequency and assign ID automatically. The devo7 has wireless copy function, The player can set his own fixed checkpoints.</p>
                                </div>
                                <div id='remote'>
                                    <img src={RemoteControlImage} alt='remote control' />
                                </div>
                            </>

                }
                <ul id='tabs'>
                    <li className={!searchParams.get('t') ? 'active' : null} onClick={() => handleTutorials(undefined)} />
                    <li className={searchParams.get('t') === 'camera' ? 'active' : null} onClick={() => handleTutorials('camera')} />
                    <li className={searchParams.get('t') === 'remote' ? 'active' : null} onClick={() => handleTutorials('remote')} />
                </ul>
            </Tutorial>

        </TutorialsContainer>
    )
}

export default TutorialSteps
