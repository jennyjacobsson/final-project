import React from 'react'
import styled from 'styled-components/macro'

export const Image = styled.img`
margin:auto;
width:100%;
display:block;
`

export const PlantImg = (props) => {
  return (
    <Image src={props.imageUrl} />
  )
}