import React from 'react'
import styled, { keyframes } from 'styled-components/macro'

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Loader = styled.h2`
  span {
    display: block;
    transform: rotate(0deg);
    animation: 1s ${rotate} linear infinite forwards;
  }
`

export const Loading = () => {
  return (
    <Loader>
        Plants coming up!
      <span role="img" aria-label="leaf">
        🌱
      </span>
    </Loader>
  )
}