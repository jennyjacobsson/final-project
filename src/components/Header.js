import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

const Wrapper = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
box-sizing: border-box;
text-align:left;
padding: 16px 10px;
background-color: #35749fc4;

a {
    text-decoration: none;
}
`

const Text = styled.h2`
margin:0;
font-size:18px;
line-height: 1;
color: #fff;
font-family: 'Knewave', cursive;
font-weight: normal;
`

export const Header = () => (
  <Wrapper>
    <Link to="/"><Text>Plants Ahoy!</Text></Link>
  </Wrapper>
)