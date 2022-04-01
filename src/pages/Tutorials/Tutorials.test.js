import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Tutorials from './Tutorials.page'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const theme = {
    colors: {
        beige: '#F4F1ED',
        black: '#31211B',
        orange: '#EE5F20',
        white: '#FFFFFF'
    }
}

describe('Tutorials page', () => {
    let component

    beforeEach(() => {
        component = render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element={<Tutorials />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider >
        )
    })

    it('should render content', () => {
        component.getByText('F-210 Performance Racing Drone')
    })
})
