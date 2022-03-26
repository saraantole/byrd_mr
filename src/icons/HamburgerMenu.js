import styled from 'styled-components'
import { useState } from 'react'

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
`

export default function HamburgerMenu() {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <>
            {toggleMenu &&
                <SideMenu>
                    <div>

                    </div>
                </SideMenu>}
            <Lines toggleMenu={toggleMenu} onClick={() => setToggleMenu(!toggleMenu)}>
                <span />
                <span />
            </Lines>
        </>
    )
}
