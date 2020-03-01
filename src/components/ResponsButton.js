/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
margin:40px 0;
text-align:center;`

const Button = styled.button`
height:40px;
width:140px;
border: 1px solid lightgray;
border-radius:2px;
font-size:16px;
color:gray;
`

export const ResponsButton = () => {
  return (
    <Container>
      <Button>I'LL SAVE YOU!</Button>
    </Container>
  )
}