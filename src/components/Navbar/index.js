import { Link, useLocation } from 'react-router-dom'
import { Header } from './styles'
import defaultLogo from '../../images/Logo.png'
import whiteLogo from '../../images/Logo White.png'
import FacebookIcon from '../../icons/FacebookIcon'
import TwitterIcon from '../../icons/TwitterIcon'
import HamburgerMenu from '../../icons/HamburgerMenu'

const Navbar = () => {
    const url = useLocation()

    return (
        <Header path={url.pathname}>
            <Link to='/' id='img'>
                <img src={url.search === '?t=camera' ? whiteLogo : defaultLogo} alt='logo' />
            </Link>
            <nav>
                <ul>
                    <li id='left-menu'>
                        <ul>
                            {url.pathname === '/'
                                ? <li><Link to='#'>Store</Link></li>
                                : <li><Link to='#'>
                                    <FacebookIcon />
                                </Link></li>
                            }
                            {url.pathname === '/'
                                ? <li><Link to='/tutorials'>Tutorials</Link></li>
                                : <li><Link to='#'>
                                    <TwitterIcon />
                                </Link></li>
                            }
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li className='right-menu'><Link to='#'>Blog</Link></li>
                            <li className='right-menu'><Link to='/contact'>Contact</Link></li>
                            <li id='hamburger-icon'><HamburgerMenu /></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </Header>
    )
}

export default Navbar
