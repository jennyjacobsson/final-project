import React from 'react'
import styled from 'styled-components/macro'

export const Image = styled.img`
  margin:auto;
  width:100%;
  display:block;
  border: 10px solid white;
  border-bottom: 0;
  box-sizing: border-box;
`

export const PlantImg = (props) => {
  return (
    <Image src={props.imageUrl} />
  )
}