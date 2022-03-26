import { Link, useLocation } from 'react-router-dom'
import { Header } from './styles'

const Navbar = () => {
    const url = useLocation()

    console.log(url.pathname)
    return (
        <Header>
            <Link to='/contact'>Contact</Link>
            <Link to='/tutorials'>Tutorials</Link>
        </Header>
    )
}

export default Navbar
