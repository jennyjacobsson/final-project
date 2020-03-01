import React from 'react'
import styled from 'styled-components/macro'

export const Image = styled.img`
margin:auto;
width:100%;
display:block;
`

export const PlantImg = () => {
  return (
    <Image src="https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=300" />
  )
}