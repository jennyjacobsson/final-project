import React from 'react'
import styled from 'styled-components/macro'

const Outer = styled.div`
  border: 10px solid white;
  border-bottom: 0;
  flex: 1;
`

const Wrap = styled.div`
  position: relative;
  padding-top: 62.5%;
  overflow: hidden;
`

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const PlantImg = (props) => {
  return (
    <Outer>
      <Wrap>
        <Image src={props.imageUrl} />
      </Wrap>
    </Outer>
  )
}