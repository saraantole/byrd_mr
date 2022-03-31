import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Contact from './Contact.page'
import { ThemeProvider } from 'styled-components'
import userEvent from '@testing-library/user-event'

const theme = {
    colors: {
        beige: '#F4F1ED',
        black: '#31211B',
        orange: '#EE5F20',
        white: '#FFFFFF'
    }
}

describe('Contact page', () => {
    let component

    const nameValue = 'John Doe'
    const emailValue = 'john.doe@gmail.com'
    const messageValue = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur sapien a urna suscipit, sit amet egestas mi egestas. Donec maximus tortor sit amet nisi cursus dapibus. Ut facilisis sem eu augue maximus eleifend. Vestibulum vitae sapien ut sem rutrum accumsan. Mauris aliquet lacus nec purus aliquam bibendum.'

    beforeEach(() => {
        component = render(
            <ThemeProvider theme={theme}>
                <Contact />
            </ThemeProvider>
        )
    })

    it('should render content', () => {
        component.getByText('Email')
    })

    it('should enter name successfully', () => {
        const nameInput = component.getByPlaceholderText('Enter your full name')
        userEvent.type(nameInput, nameValue)
        expect(nameInput).toHaveValue(nameValue)
    })

    it('should enter email successfully', () => {
        const emailInput = component.getByPlaceholderText('Enter your email')
        userEvent.type(emailInput, emailValue)
        expect(emailInput).toHaveValue(emailValue)
    })

    it('should enter message successfully', () => {
        const messageInput = component.getByPlaceholderText('What are your plans?')
        userEvent.type(messageInput, messageValue)
        expect(messageInput).toHaveValue(messageValue)
    })

    it('submits successfully', () => {
        const nameInput = component.getByPlaceholderText('Enter your full name')
        const emailInput = component.getByPlaceholderText('Enter your email')
        const messageInput = component.getByPlaceholderText('What are your plans?')
        const submitButton = component.getByText('Send Message')
        // const error = component.container.querySelector('#error');

        userEvent.type(nameInput, nameValue)
        userEvent.type(emailInput, emailValue)
        userEvent.type(messageInput, messageValue)
        userEvent.click(submitButton)

        const successMessage = component.getByText('Your message was submitted!')

        expect(successMessage).toBeVisible()
    })

    it('shows error if user tries to submit an empty form', () => {
        const submitButton = component.getByText('Send Message')

        userEvent.click(submitButton)

        const errorMessage = component.container.querySelector('#error')

        expect(errorMessage).toBeVisible()
    })

    it('shows error if user tries to submit an invalid name', () => {
        const nameInput = component.getByPlaceholderText('Enter your full name')
        const emailInput = component.getByPlaceholderText('Enter your email')
        const messageInput = component.getByPlaceholderText('What are your plans?')
        const submitButton = component.getByText('Send Message')

        userEvent.type(nameInput, 'Test12!')
        userEvent.type(emailInput, emailValue)
        userEvent.type(messageInput, messageValue)
        userEvent.click(submitButton)

        const errorMessage = component.container.querySelector('#error')

        expect(errorMessage).toHaveTextContent('Please, insert a valid name.')
    })

    it('shows error if user tries to submit an invalid email', () => {
        const nameInput = component.getByPlaceholderText('Enter your full name')
        const emailInput = component.getByPlaceholderText('Enter your email')
        const messageInput = component.getByPlaceholderText('What are your plans?')
        const submitButton = component.getByText('Send Message')

        userEvent.type(nameInput, nameValue)
        userEvent.type(emailInput, 'email@gmail')
        userEvent.type(messageInput, messageValue)
        userEvent.click(submitButton)

        const errorMessage = component.container.querySelector('#error')

        expect(errorMessage).toHaveTextContent('Please, insert a valid email.')
    })

    it('shows error if user tries to submit an invalid message', () => {
        const nameInput = component.getByPlaceholderText('Enter your full name')
        const emailInput = component.getByPlaceholderText('Enter your email')
        const messageInput = component.getByPlaceholderText('What are your plans?')
        const submitButton = component.getByText('Send Message')

        userEvent.type(nameInput, nameValue)
        userEvent.type(emailInput, emailValue)
        userEvent.type(messageInput, '>mkjsd diKM3nvblfioj $ kfngldk << ¿+v')
        userEvent.click(submitButton)

        const errorMessage = component.container.querySelector('#error')

        expect(errorMessage).toHaveTextContent('Please, insert a valid message.')
    })
})
