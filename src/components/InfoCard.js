/* eslint-disable max-len */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Loading } from 'components/Loader'
import { LocationSvg } from './icons/LocationSvg'
import { PriceSvg } from './icons/PriceSvg'
import { PlantImg } from './PlantImg'
import Button from './Button'

const Header = styled.div`
padding: 20px 0;
text-align:center;
align-items:center;
justify-content:center;
color:gray;
`

const HeaderText = styled.h2`
margin:0;
font-size:25px;
`

const Container = styled.div`
padding:15px;
color:gray;
background-color:white;
border-radius:6px;
`
const Title = styled.h1`
`

const Text = styled.p`
margin-bottom:20px;
`

const Wrap = styled.div`
margin:15px 0;
font-size:14px;

svg {
  margin-right:8px;
}
`

export const InfoCard = ({ match: { params: { id } } }) => {
  const [ad, setAd] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`http://localhost:8080/ads/${id}`)
      .then((res) => res.json())
      .then((json) => setAd(json))
    setLoading(false)
  }, [id])

  if (ad === '') {
    return null
  }

  return (
    <>
      <Header>
        <HeaderText>PLANT MISSON</HeaderText>
      </Header>
      <Container>
        {loading && <Loading />}

        {!loading && (
          <>
            <PlantImg imageUrl={ad.imageUrl} />
            <Title>{ad.title}</Title>
            <Text>{ad.description}
            </Text>
            <Wrap>
              <LocationSvg /> {ad.location}
            </Wrap>
            <Wrap><PriceSvg /> {ad.price} kr</Wrap>
            <Link to="/answer">
              <Button label="I'LL SAVE YOU!" />
            </Link>
            <Link to="/">
              <p>Back to the plants</p>
            </Link>
          </>
        )}
      </Container>
    </>
  )
}
