import styled from 'styled-components'
import { useState } from 'react'
import WhiteLogo from '../images/Logo all White.png'
import Drone from '../images/Drone.png'
import { Link } from 'react-router-dom'

const Lines = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
        border-radius: 10px;
        background: ${props => props.toggleMenu ? props.theme.colors.white : props.theme.colors.orange};
        height: 3px;
        display: inline-block;
        cursor: pointer;

        &:first-of-type {
            width: 29px;
            transform: ${props => props.toggleMenu && 'rotate(45deg)'};
            transition: transform 0.4s ease-in-out;
        }

        &:last-of-type {
            margin-top: ${props => !props.toggleMenu ? '6px' : '-2px'};
            width: ${props => props.toggleMenu ? '29px' : '22px'};
            transform: ${props => props.toggleMenu && 'rotate(-45deg)'};
            transition: transform 0.4s ease-in-out;
        }
    }
`

const SideMenu = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.colors.orange};
    text-align: center;

    img {
        margin: 38px 0 0 0;
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 100px 205px;


        ul {
            display: block;
            text-align: right;

            a {
                color: ${({ theme }) => theme.colors.white};
                font-size: 44px;
                line-height: 48px;
                text-transform: none;
            }
        }
    }

    @media screen and (max-width: 786px) {
        div {
            flex-direction: column-reverse;
        }
    }
`

export default function HamburgerMenu() {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <>
            {toggleMenu &&
                <SideMenu>
                    <img width={176} height={26} src={WhiteLogo} alt='logo' />
                    <div>
                        <img width={573} height={444} src={Drone} alt='drone' />
                        <ul>
                            <li><Link to=''>Store</Link></li>
                            <li><Link to='/tutorials'>Tutorials</Link></li>
                            <li><Link to=''>Blog</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                </SideMenu>}
            <Lines toggleMenu={toggleMenu} onClick={() => setToggleMenu(!toggleMenu)}>
                <span />
                <span />
            </Lines>
        </>
    )
}
