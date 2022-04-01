import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import RemoteControl from './RemoteControl.component'
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

describe('Remote Control', () => {
    let component

    beforeEach(() => {
        component = render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <RemoteControl />
                </BrowserRouter>
            </ThemeProvider >
        )
    })

    it('should render content', () => {
        component.getByAltText('remote control')
    })
})
