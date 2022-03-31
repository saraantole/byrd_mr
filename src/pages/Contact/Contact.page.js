import { Container, Form } from './Contact.styles'
import ArrowIcon from '../../icons/ArrowIcon'
import { useState } from 'react'

const Contact = () => {
    const [inputs, setInputs] = useState({ name: '', email: '', message: '' })

    const handleInputs = event => {
        const input = event.target.name
        const value = event.target.value
        setInputs(prevInputs => ({ ...prevInputs, [input]: value }))
    }

    const handleSubmit = event => {
        event.preventDefault()

        const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g
        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
        const messageRegex = /^[a-zA-Z0-9\s',.?!@;:-]+$/g

        if (!inputs.name.match(nameRegex)) { return alert('Please, insert a valid name.') }
        if (!inputs.email.match(emailRegex)) { return alert('Please, insert a valid email.') }
        if (!inputs.message.match(messageRegex)) { return alert('Please, insert a valid message.') }

        alert(`Hi, ${inputs.name}. Your message was submitted! You can check your console`)
        console.log(inputs)
        // TODO: handle form submission
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <label>
                    Full Name
                    <input onChange={handleInputs} name='name' value={inputs.name} type='text' placeholder='Enter your full name' />
                </label>
                <label>
                    Email
                    <input onChange={handleInputs} name='email' value={inputs.email} type='email' placeholder='Enter your email' />
                </label>
                <label>
                    Message
                    <textarea onChange={handleInputs} name='message' value={inputs.message} placeholder='What are your plans?' />
                </label>
                <button type='submit'>Send Message <ArrowIcon /></button>
            </Form>
        </Container>
    )
}

export default Contact
