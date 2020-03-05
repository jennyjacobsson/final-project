import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { PlantImg } from './PlantImg'

const Container = styled.div`
  border: 1px solid lightgrey;
  color:gray;
`

const Title = styled.h4`
text-align:left;
`
const Location = styled.p`
margin:0;
font-size:14px;
`
const Wrap = styled.div`
display:flex;
justify-content:space-between;
`

const Emoji = styled.img`
width:auto;
height:20px;
`

export const LinkAd = ({ title, type, location, description, price }) => {
  return (
    <Link to="/plants">
      <Container>
        <PlantImg />
        <Wrap>
          <Location>- {location}</Location>
          <Emoji src="https://cdn.pixabay.com/photo/2013/07/12/17/20/four-leaf-clover-152047_960_720.png" />
        </Wrap>
        <Title>Svärmorstunga i behov av nytt hem med mycket kärlek</Title>
      </Container>
    </Link>
  )
}