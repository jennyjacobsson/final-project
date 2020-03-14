import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Title } from 'components/StyledCollection'
import Button from 'components/Button'

export const Redirect = () => {
  const history = useHistory()
  return (
    <Container>
      <Title>You are not logged in</Title>
      <Button label="Login here" onClick={() => history.push('/login')} />
    </Container>
  )
}
