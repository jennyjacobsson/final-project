import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Button from 'components/Button'

const Title = styled.h1`
font-size:24px;

`
const Form = styled.form`
border: 1px solid lightgray;
`

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  border: 1px solid lightgrey;
  border-radius: 3px;
`

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
        <Title>Register</Title>
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
      {message}
    </>

  )
}