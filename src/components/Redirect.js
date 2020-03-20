import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Title } from './StyledCollection'
import { Button } from './Button'

export const Redirect = () => {
  const history = useHistory()
  return (
    <Container>
      <Title>You need to log in/create an account</Title>
      <Button label="Log in" onClick={() => history.push('/login')} />
    </Container>
  )
}
