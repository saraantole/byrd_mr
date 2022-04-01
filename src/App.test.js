import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
    let component

    beforeEach(() => {
        component = render(<App />)
    })

    it('should render homepage content at first render', () => {
        component.getByText('“The Fastest Drone on the Planet”')
    })

    it('should change route to contact page when clicking on link', () => {
        const contactLink = component.getAllByText('Contact')[0]

        userEvent.click(contactLink)

        component.getByText('Send Message')
    })

    it('should change route to tutorials page when clicking on link', () => {
        const tutorialsLink = component.getAllByText('Tutorials')[0]

        userEvent.click(tutorialsLink)

        component.getByText('F-210 Performance Racing Drone')
    })

    it('should change route to home page when clicking on logo', () => {
        const tutorialsLink = component.getAllByText('Tutorials')[0]
        const logo = component.getAllByAltText('logo')[0]

        userEvent.click(tutorialsLink)
        userEvent.click(logo)

        component.getByText('“The Fastest Drone on the Planet”')
    })
})
