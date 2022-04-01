import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Navbar from './Navbar.component'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

const theme = {
    colors: {
        beige: '#F4F1ED',
        black: '#31211B',
        orange: '#EE5F20',
        white: '#FFFFFF'
    }
}

describe('Navbar', () => {
    let component

    beforeEach(() => {
        component = render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </ThemeProvider >
        )
    })

    it('should render logo', () => {
        component.getAllByAltText('logo')
    })

    it('should render Store link', () => {
        component.getAllByText('Store')
    })

    it('should render Tutorials link', () => {
        component.getAllByText('Tutorials')
    })

    it('should render Blog link', () => {
        component.getAllByText('Blog')
    })

    it('should render Contact link', () => {
        component.getAllByText('Contact')
    })
})
