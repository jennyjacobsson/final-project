import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

const Outer = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
box-sizing: border-box;
text-align:left;
padding: 16px 0;
background-color: #35749fc4;

a {
    text-decoration: none;
}
`

const Wrap = styled.div`
max-width: 600px;
margin: auto;
padding: 0 10px;
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
  <Outer>
    <Wrap>
      <Link to="/"><Text>Plants Ahoy!</Text></Link>
    </Wrap>
  </Outer>
)