/* eslint-disable max-len */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Loading } from 'components/Loader'
import { PlantImg } from './PlantImg'
import Button from './Button'

const Header = styled.div`
padding: 20px 0;
background-color:lightblue;
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
margin:20px;
color:gray;
`
const Title = styled.h1`
`

const Text = styled.p`
margin-bottom:20px;
`

const Emoji = styled.img`
width:auto;
height:20px;
`

const Wrap = styled.div`
margin:15px 0;
font-size:14px;
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
              <Emoji src="https://cdn.pixabay.com/photo/2013/07/12/17/20/four-leaf-clover-152047_960_720.png" />Located in: {ad.location}
            </Wrap>
            <Wrap><Emoji src="https://cdn.pixabay.com/photo/2013/07/12/17/20/four-leaf-clover-152047_960_720.png" /> Has screamed for 15 days.</Wrap>
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
