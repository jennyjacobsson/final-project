/* eslint-disable max-len */
import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Loading } from 'components/Loader'
import { LocationSvg } from './icons/LocationSvg'
import { PriceSvg } from './icons/PriceSvg'
import { PlantImg } from './PlantImg'
import Button from './Button'
import { Container } from './StyledCollection'
import { getAuth } from '../App'

const Background = styled.div`
color:gray;
background-color:white;
border-radius:6px;
`

const Wrap = styled.div`
  padding: 10px;
  text-align: left;
`

const Title = styled.h1`
`

const Text = styled.p`
margin-bottom:20px;
`

const Meta = styled.div`
display: flex;
margin: 15px 0;
font-size: 14px;

svg {
  flex-shrink: 0;
  margin-right:8px;
}
`

export const InfoCard = ({ match: { params: { id } } }) => {
  const [ad, setAd] = useState(null)
  const [loading, setLoading] = useState(true)
  const { accessToken, userId } = getAuth()
  const history = useHistory()

  useEffect(() => {
    fetch(`http://localhost:8080/ads/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setAd(json)
        setLoading(false)
      })
  }, [id])

  const handleRemoval = () => {
    const confirmed = window.confirm('Do you really want to remove this one?')
    if (confirmed) {
      fetch(`http://localhost:8080/ads/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: accessToken
        }
      }).then((res) => {
        if (!res.ok) {
          throw new Error('Error')
        }
        history.push('/mypage')
      }).catch((err) => {
        console.error(err)
      })
    }
  }

  if (ad === null) {
    return null
  }

  const MY_AD = (accessToken && userId && userId === ad.userId)

  return (
    <Container>
      <Background>
        {loading && <Loading />}

        {!loading && (
          <>
            <PlantImg imageUrl={ad.imageUrl} />
            <Wrap>
              <Title>{ad.title}</Title>
              <Text>Type: {ad.type}</Text>
              <Text>{ad.description}</Text>
              <Meta><LocationSvg /> {ad.location}</Meta>
              <Meta><PriceSvg /> {ad.price} kr</Meta>
              {!MY_AD && (
                <Link to="/answer">
                  <Button label="I'll save you" />
                </Link>
              )}
              {MY_AD && <Button label="Remove" onClick={handleRemoval} bg="#df2f2f" />}
            </Wrap>
          </>
        )}
      </Background>
    </Container>
  )
}
