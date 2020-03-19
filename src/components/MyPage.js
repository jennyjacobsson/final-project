import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { LinkAd } from './LinkAd'
import { Loading } from './Loader'
import { Container } from './StyledCollection'
import { Redirect } from './Redirect'
import { getAuth, SERVER_URL } from '../App'

const Outer = styled.div`
  text-align: center;
`

const Title = styled.h1`
  font-size:24px;
  margin:20px;
`

const Text = styled.h3`
`

const LinkWrap = styled.div`
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`

export const MyPage = () => {
  const [secret, setSecret] = useState(false)
  const [loading, setLoading] = useState(true)
  const [loadingLogin, setLoadingLogin] = useState(true)
  const [userAds, setUserAds] = useState([])
  const { userId, userName, accessToken } = getAuth()

  useEffect(() => {
    fetch(`${SERVER_URL}/mypage`, {
      method: 'GET',
      headers: { Authorization: accessToken }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Access denied')
        } return res.json()
      })
      .then(() => {
        setSecret(true)
        setLoadingLogin(false)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [accessToken])

  useEffect(() => {
    setLoading(true)
    fetch(`${SERVER_URL}/ads?userId=${userId}`)
      .then((res) => res.json())
      .then((json) => {
        json.reverse()
        setUserAds(json)
        setLoading(false)
      })
  }, [userId])

  if (loadingLogin) {
    return (
      <Container>
        <Loading />
      </Container>
    )
  }

  return (
    <Container>
      {secret && (
        <Outer>
          <Title>Hello {`${userName} `}
            <span role="img" aria-label="leaf">
              🌱
            </span>
          </Title>
          <Text>Here are your current ads: </Text>
          {loading && <Loading />}
          {!loading && !userAds.length && <p>You have no plants!</p>}
          {userAds.map((userAd) => {
            return (
              <LinkWrap><LinkAd
                key={userAd._id}
                id={userAd._id}
                type={userAd.type}
                price={userAd.price}
                imageUrl={userAd.imageUrl}
                title={userAd.title}
                location={userAd.location} />
              </LinkWrap>
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