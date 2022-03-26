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
            <nav>
                {url.pathname === '/'
                    ? <Link to=''>Store</Link>
                    : <Link to=''>
                        <FacebookIcon />
                    </Link>
                }
                {url.pathname === '/'
                    ? <Link to='/tutorials'>Tutorials</Link>
                    : <Link to=''>
                        <TwitterIcon />
                    </Link>
                }

            </nav>
            <Link to='/'>
                <img width={url.pathname === '/' ? 216 : 176} src={defaultLogo} />
            </Link>
            <nav>
                {url.pathname === '/' && window.innerWidth > 786
                    ? <>
                        <Link to=''>Blog</Link>
                        <Link to='/contact'>Contact</Link>
                    </>
                    : <HamburgerMenu />
                }
            </nav>
        </Header>
    )
}

export default Navbar
