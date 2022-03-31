import { Description, Detail, Drone, Tutorial } from './Design.styles'
import DroneImage from '../../../images/Drone.png'
import Detail4 from '../../../images/detail.png'
import PlusIcon from '../../../icons/PlusIcon'
import CrossIcon from '../../../icons/CrossIcon'
import { useState } from 'react'

const DroneDesign = () => {
    const [detail, setDetail] = useState(undefined)

    const handleDetail = selectedDetail => setDetail(selectedDetail)

    return (
        <>
            <Drone>
                <img src={DroneImage} alt='drone' />
                <PlusIcon selected={detail === 1} action={() => handleDetail(1)} />
                <PlusIcon selected={detail === 2} action={() => handleDetail(2)} />
                <PlusIcon selected={detail === 3} action={() => handleDetail(3)} />
                <PlusIcon selected={detail === 4} action={() => handleDetail(4)} />
            </Drone>
            {
                detail && <Detail>
                    <CrossIcon action={() => handleDetail(undefined)} />
                    <img src={Detail4} alt='drone details' />
                </Detail>
            }
        </>
    )
}

const Design = () => {
    return (
        <Tutorial>
            <Description>
                <h1>Craft and design.</h1>
                <p>Breakthrough design makes F-210 essentially improved. With a new bow body design and carbon fiber material, it has superior ruggedness and anti-drop ability. Though improved small details, it will definitely give you more satisfaction. Axis equidistant design ensures the gravity center of the aircraft in the middle, which makes the flight more stable and turning agiler. Motor protection cover makes flying safer.</p>
            </Description>
            <DroneDesign />
        </Tutorial >
    )
}

export default Design
