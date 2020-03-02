import React from 'react'
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
const Image = styled.img`
height:200px;
flex-shrink:0;
flex-grow:0;
width:auto;
object-fit:contain;
object-position:right;
`

export const SalesForm = () => {
  return (
    <Container>
      <Form>
        <Title>Send out an SOS!</Title>
        <Input type="text" placeholder="Type of plant" />
        <Input type="text" placeholder="Location" />
        <Input type="text" placeholder="Description" />
        <Input type="text" placeholder="Price" />
        <Button label="Submit!" />
      </Form>
      <Image src="/assets/plant.jpg" />
    </Container>

  )
}

// TODO: Write onlclick function, sen in as props in btn