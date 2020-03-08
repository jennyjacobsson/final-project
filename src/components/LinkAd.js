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

export const LinkAd = ({ id, title, location, price, imageUrl }) => {
  return (
    <Link to={`/plants/${id}`}>
      <Container>
        <PlantImg imageUrl={imageUrl} />
        <Wrap>
          <Location>- {location}</Location>
        </Wrap>
        <Title>{title}</Title>
      </Container>
    </Link>
  )
}