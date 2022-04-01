import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Design from './Design.component'
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

describe('Design', () => {
    let component

    beforeEach(() => {
        component = render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Design />
                </BrowserRouter>
            </ThemeProvider >
        )
    })

    it('should render content', () => {
        component.getByAltText('drone')
    })

    it('should show details image when clicking on a point of interest', () => {
        const point = component.getAllByTestId('plus')[0]

        userEvent.click(point)

        component.getByAltText('drone details')
    })

    it('should hide details image when clicking on the cross icon', () => {
        const point = component.getAllByTestId('plus')[0]

        userEvent.click(point)

        const detail = component.getByAltText('drone details')
        const crossIcon = component.getByTestId('cross')

        userEvent.click(crossIcon)

        expect(detail).not.toBeInTheDocument()
    })
})
