import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Home from './Home.page'
import { ThemeProvider } from 'styled-components'

const theme = {
    colors: {
        beige: '#F4F1ED',
        black: '#31211B',
        orange: '#EE5F20',
        white: '#FFFFFF'
    }
}

describe('Home page', () => {
    let component

    beforeEach(() => {
        component = render(
            <ThemeProvider theme={theme}>
                <Home />
            </ThemeProvider>
        )
    })

    it('should render content', () => {
        component.getByText('“The Fastest Drone on the Planet”')
    })
})
