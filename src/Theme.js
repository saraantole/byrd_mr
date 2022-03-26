import { ThemeProvider } from 'styled-components'

const theme = {
    colors: {
        beige: '#F4F1ED',
        black: '#31211B',
        orange: '#EE5F20',
        white: '#FFFFFF'
    },

    fontSizes: {
        small: '1em',
        medium: '2em',
        large: '3em'
    }
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
