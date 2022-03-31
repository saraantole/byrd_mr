import { useState } from 'react'
import WhiteLogo from '../../../images/Logo all White.png'
import Drone from '../../../images/Drone.png'
import { useNavigate } from 'react-router-dom'
import { SideMenu, Lines } from './HamburgerMenu.styles'

export default function HamburgerMenu() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const navigate = useNavigate()

    const handlePageChange = path => {
        navigate(path)
        setToggleMenu(false)
    }

    return (
        <>
            <SideMenu toggleMenu={toggleMenu}>
                <img width={176} height={26} src={WhiteLogo} alt='logo' />
                <div>
                    <img src={Drone} alt='drone' />
                    <ul>
                        <li onClick={() => handlePageChange('#')}>Store</li>
                        <li onClick={() => handlePageChange('/tutorials')}>Tutorials</li>
                        <li onClick={() => handlePageChange('#')}>Blog</li>
                        <li onClick={() => handlePageChange('/contact')}>Contact</li>
                    </ul>
                </div>
            </SideMenu>
            <Lines toggleMenu={toggleMenu} onClick={() => setToggleMenu(!toggleMenu)}>
                <span />
                <span />
            </Lines>
        </>
    )
}
