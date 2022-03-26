import { Link, useLocation } from 'react-router-dom'
import { Header } from './styles'
import defaultLogo from '../../images/Logo.png'
import FacebookIcon from '../../icons/FacebookIcon'
import TwitterIcon from '../../icons/TwitterIcon'
import HamburgerMenu from '../../icons/HamburgerMenu'

const Navbar = () => {
    const url = useLocation()

    return (
        <Header path={url.pathname}>
            <Link to='/' id='img'>
                <img width={url.pathname === '/' ? 216 : 176} src={defaultLogo} alt='logo' />
            </Link>
            <nav>
                <ul>
                    <li id='left-menu'>
                        <ul>
                            {url.pathname === '/'
                                ? <li><Link to=''>Store</Link></li>
                                : <li><Link to=''>
                                    <FacebookIcon />
                                </Link></li>
                            }
                            {url.pathname === '/'
                                ? <li><Link to='/tutorials'>Tutorials</Link></li>
                                : <li><Link to=''>
                                    <TwitterIcon />
                                </Link></li>
                            }
                        </ul>
                    </li>
                    <li>
                        <ul>
                            {url.pathname === '/' && window.innerWidth > 786
                                ? <>
                                    <li><Link to=''>Blog</Link></li>
                                    <li><Link to='/contact'>Contact</Link></li>
                                </>
                                : <li><HamburgerMenu /></li>
                            }
                        </ul>
                    </li>
                </ul>
            </nav>
        </Header>
    )
}

export default Navbar
