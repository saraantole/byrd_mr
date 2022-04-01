import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import HamburgerMenu from './HamburgerMenu.component'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

const theme = {
    colors: {
        beige: '#F4F1ED',
        black: '#31211B',
        orange: '#EE5F20',
        white: '#FFFFFF'
    }
}

describe('HamburgerMenu', () => {
    let component

    beforeEach(() => {
        component = render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <HamburgerMenu />
                </BrowserRouter>
            </ThemeProvider >
        )
    })

    it('should render logo', () => {
        component.getByAltText('logo')
    })

    it('should render Store link', () => {
        component.getByText('Store')
    })

    it('should render Tutorials link', () => {
        component.getByText('Tutorials')
    })

    it('should render Blog link', () => {
        component.getByText('Blog')
    })

    it('should render Contact link', () => {
        component.getByText('Contact')
    })

    it('should hide sidebar at first render', () => {
        const droneImage = component.getByAltText('drone')
        expect(droneImage).not.toBeVisible()
    })

    it('should show sidebar after clicking on hamburger icon', () => {
        const droneImage = component.getByAltText('drone')
        const hamburgerIcon = component.getByTestId('hamburger')

        userEvent.click(hamburgerIcon)

        expect(droneImage).toBeVisible()
    })

    it('should hide sidebar after clicking on any link', () => {
        const droneImage = component.getByAltText('drone')
        const hamburgerIcon = component.getByTestId('hamburger')
        const tutorialsLinK = component.getByText('Tutorials')

        userEvent.click(hamburgerIcon)
        userEvent.click(tutorialsLinK)

        expect(droneImage).not.toBeVisible()
    })
})
