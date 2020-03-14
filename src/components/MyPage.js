import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { LinkAd } from 'components/LinkAd'
import { Loading } from 'components/Loader'
import { Container } from 'components/StyledCollection'
import { Redirect } from 'components/Redirect'
import { getAuth } from '../App'

const Outer = styled.div`
text-align: center;
`

const Title = styled.h1`
font-size:24px;
margin:20px;
`

export const MyPage = () => {
  const [secret, setSecret] = useState(false)
  const [loading, setLoading] = useState(false)
  const [userAds, setUserAds] = useState([])

  const { userId, userName, accessToken } = getAuth()

  useEffect(() => {
    fetch('http://localhost:8080/mypage', {
      method: 'GET',
      headers: { Authorization: accessToken }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Access denied')
        } return res.json()
      })
      .then((json) => setSecret(true))
      .catch((err) => {
        alert(err.message)
      })
  }, [accessToken])

  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:8080/ads?userId=${userId}`)
      .then((res) => res.json())
      .then((json) => {
        json.reverse()
        setUserAds(json)
        setLoading(false)
      })
  }, [userId])

  return (
    <Container>
      {secret && (
        <Outer>
          <Title>Hello {userName}</Title>
          {loading && <Loading />}
          {!loading && !userAds.length && <p>You have no plants!</p>}
          {userAds.map((userAd) => {
            return (
              <LinkAd
                key={userAd._id}
                id={userAd._id}
                imageUrl={userAd.imageUrl}
                title={userAd.title}
                location={userAd.location} />
            )
          })}
        </Outer>
      )}

      {!secret && (
        <Redirect />
      )}
    </Container>
  )
}