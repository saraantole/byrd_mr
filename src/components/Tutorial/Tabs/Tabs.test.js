import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Tabs from './Tabs.component'
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

describe('Tabs', () => {
    let component

    beforeEach(() => {
        component = render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Tabs />
                </BrowserRouter>
            </ThemeProvider >
        )
    })

    it('should have first tab selected at first render', () => {
        const firstTab = component.getByTestId('tab-1')

        expect(firstTab).toHaveClass('active')
    })

    it('should change selected tab to third when clicked', () => {
        const firstTab = component.getByTestId('tab-1')
        const thirdTab = component.getByTestId('tab-3')

        userEvent.click(thirdTab)

        expect(firstTab).not.toHaveClass('active')
        expect(thirdTab).toHaveClass('active')
    })
})
