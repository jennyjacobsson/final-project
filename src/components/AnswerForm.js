import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { Container } from 'components/StyledCollection'
import Button from './Button'

// const FormContainer = styled(Container)`
// /* min-height:100vh;
// display:flex;
// flex-direction:column;
// text-align:center;
// justify-content: space-between; */
// `

const Title = styled.h1`
font-size:24px;

`
const Form = styled.form`
text-align:center;

`

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  border: 1px solid lightgrey;
  border-radius: 3px;
`

const MessageInput = styled(Input).attrs({
  as: 'textarea'
})`
  resize:vertical;
`

const Image = styled.img`
/* position:absolute;
bottom:20px;
right:10px; */
height:150px;
flex-shrink:0;
flex-grow:0;
width:auto;
object-fit:contain;
object-position:center;
`
const ImageWrap = styled.div`
display:flex;
flex-direction:column;
`

export const AnswerForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [handleMessage, setHandleMessage] = useState('')

  const handleAnswerForm = (event) => {
    event.preventDefault()
    fetch('http://localhost:8080/answer', {
      method: 'POST',
      body: JSON.stringify({ name, email, subject, message }),
      headers: { 'Content-Type': 'application/json ' }
    })
      .then((res) => {
        res.json().then((json) => setHandleMessage(json.message))
      })
      .catch((err) => console.log('error:', err))
  }
  return (
    <Container>
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
          //   required
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
          value={email} />
        <Input
          type="text"
          //   required
          placeholder="Subject"
          onChange={(event) => setSubject(event.target.value)}
          value={subject} />
        <MessageInput
          type="text-area"
          rows="4"
          required
          placeholder="Message"
          onChange={(event) => setMessage(event.target.value)}
          value={message} />
        <Button label="Send!" />
      </Form>
      <ImageWrap>
        <Image src="assets/ShinePlant.png" />
      </ImageWrap>
      <Link to="/">
        <p>Back to the plants</p>
      </Link>
      {handleMessage}
    </Container>
  )
}