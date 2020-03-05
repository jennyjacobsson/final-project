import React, { useState, useRef } from 'react'
import styled from 'styled-components/macro'
import Button from './Button'

const Container = styled.div`
min-height:100vh;
display:flex;
flex-direction:column;
text-align:center;
justify-content: space-between;
`
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

const FileInput = styled(Input)`
width:50%;
font-size:16px;
`

const Image = styled.img`
height:200px;
flex-shrink:0;
flex-grow:0;
width:auto;
object-fit:contain;
object-position:right;
`

export const SalesForm = () => {
  const fileInput = useRef()
  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmitAd = (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('image', fileInput.current.files[0])
    formData.append('title', title)
    formData.append('type', type)
    formData.append('location', location)
    formData.append('description', description)
    formData.append('price', price)

    fetch('http://localhost:8080/ad', {
      method: 'POST',
      body: formData
    })
      .then((res) => {
        res.json()
          .then((json) => setMessage(json.message))
        setTitle('')
        setType('')
        setLocation('')
        setDescription('')
        setPrice('')
      })
      .catch((err) => console.log('error', err))

    // fetch('http://localhost:8080/ad', {
    //   method: 'POST',
    //   body: JSON.stringify({ title, type, location, description, price }),
    //   headers: { 'Content-Type': 'application/json ' }
    // })
    //   .then((res) => {
    //     res.json().then((json) => setMessage(json.message))
    //   })
    //   .catch((err) => console.log('error:', err))
  }

  return (
    <Container>
      <Form onSubmit={handleSubmitAd}>
        <Title>Send out an SOS!</Title>
        <Input
          type="text"
          required
          placeholder="Title"
          onChange={(event) => setTitle(event.target.value)}
          value={title} />
        <Input
          type="text"
          required
          placeholder="Type of plant"
          onChange={(event) => setType(event.target.value)}
          value={type} />
        <Input
          type="text"
          required
          placeholder="Location"
          onChange={(event) => setLocation(event.target.value)}
          value={location} />
        <Input
          type="text"
          required
          placeholder="Description"
          onChange={(event) => setDescription(event.target.value)}
          value={description} />
        <Input
          type="text"
          required
          placeholder="Price"
          onChange={(event) => setPrice(event.target.value)}
          value={price} />
        <FileInput
          type="file"
          ref={fileInput} />
        <Button label="Submit!" />
      </Form>
      <Image src="/assets/plant.jpg" />
      {message}
    </Container>

  )
}
