import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button } from './Button'
import { Container, Input, Form, Title, SwitchLinks } from './StyledCollection'
import { SERVER_URL } from '../App'

export const Registration = () => {
  const history = useHistory()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleRegister = (event) => {
    event.preventDefault()
    fetch(`${SERVER_URL}/users`, {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        res.json().then((json) => setMessage(json.message))
      })
      .then(() => {
        history.push('/login')
      })
      .catch((err) => console.log('error:', err))
  }

  return (
    <Container>
      <Form>
        <Title>Create account</Title>
        <Input
          type="text"
          required
          onChange={(event) => setName(event.target.value)}
          value={name}
          placeholder="Name" />
        <Input
          type="e-mail"
          required
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          placeholder="Email" />

        <Input
          type="password"
          required
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          placeholder="Password" />

        <Button
          type="submit"
          onClick={handleRegister}
          label="Register" />
      </Form>
      <SwitchLinks>
        <Link to="/login"> Do you have an account?</Link>
      </SwitchLinks>
      {message}
    </Container>
  )
}