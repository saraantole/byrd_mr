import { CameraContainer, Description, Details, Tutorial } from './Camera.styles'
import CameraImage from '../../../images/camera.png'

const Camera = () => {
    return (
        <Tutorial>
            <CameraContainer>
                <img src={CameraImage} alt='camera' />
            </CameraContainer>
            <Description>
                <h1>Camera</h1>
                <p>Breakthrough design makes F-210 essentially improved. With a new bow body design and carbon fiber material, it has superior ruggedness and anti-drop ability. Though improved small details, it will definitely give you more satisfactionAxis equidistant design ensures the gravity center of the aircraft in the middle, which makes the flight more stable and turning agiler. Motor protection cover makes flying safer.</p>
            </Description>
            <Details>
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
            </Details>
        </Tutorial>
    )
}

export default Camera
