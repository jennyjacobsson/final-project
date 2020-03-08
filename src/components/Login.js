import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
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

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const history = useHistory()

  const handleLogin = (event) => {
    event.preventDefault()
    setErrorMessage('')
    fetch('http://localhost:8080/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Your e-mail and/or password was incorrect')
        }
        return res.json()
      })
      .then(({ accessToken, userId }) => {
        window.localStorage.setItem('accessToken', accessToken)
        window.localStorage.setItem('userId', userId)
        history.push('/mypage');
      })
      .catch((err) => {
        setErrorMessage(err.message)
      })
  }

  return (
    <Form>
      <Title>Log in</Title>
      <Input
        type="text"
        onChange={(event) => setEmail(event.target.value)}
        value={email}
        placeholder="Email" />

      <Input
        type="password"
        onChange={(event) => setPassword(event.target.value)}
        value={password}
        placeholder=" Password" />

      <Button
        label="Log in"
        type="submit"
        onClick={handleLogin} />
      {errorMessage}
    </Form>
  )
}