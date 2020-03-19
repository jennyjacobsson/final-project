import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Redirect } from './Redirect'
import { Container, Form, Input, Title } from './StyledCollection'
import { Button } from './Button'
import { getAuth, SERVER_URL } from '../App'

const File = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 10px 25px;
  font-size: 16px;
  background-color: white;
  overflow: hidden;
  border-radius: 6px;

input {
  position: absolute;
  left: -10000em;
}
`

const FileImage = styled.img`
  flex-shrink: 0;
  width: 50px;
  height: auto;
  margin-right: 1em;
`

const TextArea = styled(Input).attrs({
  as: 'textarea'
})`
  resize:vertical;
`

export const SalesForm = () => {
  const history = useHistory()
  const fileInput = useRef()
  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [filename, setFilename] = useState('')
  const { accessToken } = getAuth()

  const handleFileChange = () => {
    const [currentFile] = fileInput.current.files
    const { name } = currentFile
    setFilename(name || '')
  }

  const handleSubmitAd = (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('image', fileInput.current.files[0])
    formData.append('type', type)
    formData.append('title', title)
    formData.append('location', location)
    formData.append('description', description)
    formData.append('price', price)

    fetch(`${SERVER_URL}/ad`, {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: accessToken
      }
    })
      .then((res) => {
        if (!res.ok) {
          alert('umm.. nope')
        }
        history.push('/mypage')
      })
      .catch((err) => console.log('error', err))
  }

  if (!accessToken) {
    return (
      <Redirect />
    )
  }

  return (
    <Container>
      <Form onSubmit={handleSubmitAd}>
        <Title>Send out an SOS!</Title>
        <File>
          <input
            type="file"
            ref={fileInput}
            onChange={handleFileChange} />
          <FileImage src={`/assets/${filename ? 'Shine' : 'Sales'}Plant.png`} loading="lazy" />
          {filename || 'Select an image'}
        </File>
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
          placeholder="Price (numbers only)"
          onChange={(event) => setPrice(event.target.value)}
          value={price} />
        <TextArea
          type="text-area"
          rows="4"
          required
          placeholder="Description"
          onChange={(event) => setDescription(event.target.value)}
          value={description} />
        <Button label="Submit!" />
      </Form>
    </Container>
  )
}
