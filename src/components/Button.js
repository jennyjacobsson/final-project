/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
margin:40px 0;
text-align:center;`

const Btn = styled.button`
height:40px;
width:140px;
border: 1px solid lightgray;
border-radius:2px;
font-size:16px;
color:gray;
`

const Button = ({ label, onClick }) => {
  return (
    <Container>
      <Btn type="submit" onClick={onClick}>{label}</Btn>
    </Container>
  )
}

export default Button