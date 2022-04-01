import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Camera from './Camera.component'
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

describe('Camera', () => {
    let component

    beforeEach(() => {
        component = render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Camera />
                </BrowserRouter>
            </ThemeProvider >
        )
    })

    it('should render content', () => {
        component.getByAltText('camera')
    })
})
