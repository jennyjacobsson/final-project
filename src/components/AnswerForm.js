import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components/macro'
import { Container, Input, Form, Title } from 'components/StyledCollection'
import Button from './Button'
import { SERVER_URL } from '../App'

const MessageInput = styled(Input).attrs({
  as: 'textarea'
})`
  resize:vertical;
`
const jump = keyframes`
  0%   {transform: translate3d(0,0,0);}
  20%  {transform: translate3d(0,10%,0);}
  40%  {transform: translate3d(0,30%,0);}
  50% {transform: translate3d(0,50%,0);}
  100% {transform: translate3d(0,50%,0);}
`

const Image = styled.img`
height:150px;
flex-shrink:0;
flex-grow:0;
width:auto;
object-fit:contain;
object-position:center;
transform-origin: 50% 50%;
  animation: ${jump} .5s linear alternate infinite;
`
const ImageWrap = styled.div`
display:flex;
flex-direction:column;
`

export const AnswerForm = ({ match: { params: { id } } }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [ShowForm, setShowForm] = useState(true)

  const handleAnswerForm = (event) => {
    event.preventDefault()
    fetch(`${SERVER_URL}/answer`, {
      method: 'POST',
      body: JSON.stringify({ id, name, email, message }),
      headers: { 'Content-Type': 'application/json ' }
    })
      .then((res) => {
        res.json().then(() => setShowForm(false))
      })
      .catch((err) => console.log('error:', err))
  }
  return (
    <Container>
      {ShowForm && (
        <Form onSubmit={handleAnswerForm}>
          <Title> I'll save this one!</Title>
          <Input
            type="text"
            required
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
            value={name} />
          <Input
            type="text"
            required
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
            value={email} />
          <MessageInput
            type="text-area"
            rows="4"
            required
            placeholder="Message"
            onChange={(event) => setMessage(event.target.value)}
            value={message} />
          <Button label="Send!" />
        </Form>
      )}
      {!ShowForm && (
        <ImageWrap>
          <Title>Your answer has been sent!</Title>
          <Image src="/assets/ShinePlant.png" />
        </ImageWrap>

      )}
    </Container>
  )
}