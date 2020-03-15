import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import Button from 'components/Button'
import { Input, Form, Title, SwitchLinks } from 'components/StyledCollection'
import { SERVER_URL } from '../App'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const history = useHistory()

  const handleLogin = (event) => {
    event.preventDefault()
    setErrorMessage('')
    fetch(`${SERVER_URL}/login`, {
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
      .then(({ accessToken, userId, userName }) => {
        window.localStorage.setItem('accessToken', accessToken)
        window.localStorage.setItem('userId', userId)
        window.localStorage.setItem('userName', userName)
        history.push('/mypage');
      })
      .catch((err) => {
        setErrorMessage(err.message)
      })
  }

  return (
    <>
      <Form onSubmit={handleLogin}>
        <Title>Login</Title>
        <Input
          type="text"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          placeholder="Email"
          required />

        <Input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          placeholder=" Password"
          required />

        <Button
          label="Log in"
          type="submit" />
        {errorMessage}
      </Form>
      <SwitchLinks>
        <Link to="/register">Want to create an account?</Link>
      </SwitchLinks>
    </>
  )
}