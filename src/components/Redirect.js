import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Title } from './StyledCollection'
import { Button } from './Button'

export const Redirect = () => {
  const history = useHistory()
  return (
    <Container>
      <Title>You are not logged in</Title>
      <Button label="Log in" onClick={() => history.push('/login')} />
    </Container>
  )
}
