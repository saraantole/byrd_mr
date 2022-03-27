import { Container } from './styles'
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
        alert(`Hi, ${inputs.name}. Your message was submitted! You can check your console`)
        console.log(inputs)
        // TODO: handle form submission
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
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
            </form>
        </Container>
    )
}

export default Contact
