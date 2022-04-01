import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Tutorial from './Tutorial.component'
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

describe('Tutorial', () => {
    let component

    beforeEach(() => {
        component = render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Tutorial />
                </BrowserRouter>
            </ThemeProvider >
        )
    })

    it('should render content', () => {
        component.getByText('Craft and design.')
    })

    it('should change tutorial when clicking on the second tab', () => {
        const secondTab = component.getByTestId('tab-2')

        userEvent.click(secondTab)

        component.getByText('Camera')
    })

    it('should change tutorial when clicking on the third tab', () => {
        const thirdTab = component.getByTestId('tab-3')

        userEvent.click(thirdTab)

        component.getByText('Remote Control')
    })
})
