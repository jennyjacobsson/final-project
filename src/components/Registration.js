import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'components/Button'
import { Input, Form, Title, SwitchLinks } from 'components/StyledCollection'

export const Registration = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleRegister = (event) => {
    event.preventDefault()
    fetch('http://localhost:8080/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        res.json().then((json) => setMessage(json.message))
      })
      .then(() => {
        setName('')
        setEmail('')
        setPassword('')
      })
      .catch((err) => console.log('error:', err))
  }

  return (
    <>
      <Form>
        <Title>Create account</Title>
        <Input
          type="text"
          onChange={(event) => setName(event.target.value)}
          value={name}
          placeholder="Name" />
        <Input
          type="text"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          placeholder="Email" />

        <Input
          type="password"
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
    </>

  )
}