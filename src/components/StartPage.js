import React from 'react'
import styled from 'styled-components/macro'
import { LinkAd } from './LinkAd'

const Header = styled.div` 
  display:flex;
  height:300px;
  width:auto;
  background-image: url('https://images.pexels.com/photos/2495651/pexels-photo-2495651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=300');
  text-align:center;
  align-items:center;
  justify-content:center;
`

const HeaderText = styled.div`
  display:block;
  color:white;
`

const Container = styled.div`
  padding:25px;
  color:gray;
  justify-content:center;
  align-items:center;
  text-align:center;

  h3 {
    margin:30px 0;
  }
  `

const Form = styled.form` 
  text-align: center;
`

const SearchField = styled.input`
  width:200px;
  height:30px;
  text-align: center;
  border: 1px solid lightgrey;
`

export const StartPage = () => {
  return (
    <>
      <Header>
        <HeaderText>
          <h1>SAVE A PLANT</h1>
          <h2>Adopt plants in need of saving!</h2>
          <p>Give your plants a new change</p>
        </HeaderText>
      </Header>
      <Container>
        <Form>
          <SearchField type="search" placeholder="Search for specific plants" />
        </Form>
        <h3>PLANTS READY FOR ADOPTION</h3>
        <LinkAd />
      </Container>
    </>
  )
}