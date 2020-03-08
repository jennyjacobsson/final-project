import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Button from 'components/Button'
import styled from 'styled-components/macro'
import { LinkAd } from 'components/LinkAd'

const Title = styled.h1`
font-size:24px;
`

export const MyPage = () => {
  const history = useHistory()
  const [errorMessage, setErrorMessage] = useState('')
  const [secret, setSecret] = useState('')
  const [userAds, setUserAds] = useState([])

  const accessToken = window.localStorage.getItem('accessToken')
  const userId = window.localStorage.getItem('userId')

  useEffect(() => {
    setErrorMessage('')
    fetch('http://localhost:8080/mypage', {
      method: 'GET',
      headers: { Authorization: accessToken }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Access denied')
        } return res.json()
      })
      .then((json) => setSecret(json))
      .catch((err) => {
        setErrorMessage(err.message)
      })
  }, [accessToken])

  useEffect(() => {
    fetch(`http://localhost:8080/ads?userId=${userId}`)
      .then((res) => res.json())
      .then((json) => {
        setUserAds(json)
        console.log(json)
      })
  }, [userId])

  const handleSignOut = (event) => {
    event.preventDefault()
    window.localStorage.removeItem('accessToken')
    window.localStorage.removeItem('userId')
    history.push('/');
  }

  return (
    <>
      {secret && (
        <>
          <Title>Hello Stranger</Title>
          {userAds.map((userAd) => {
            return (
              <>
                <LinkAd imageUrl={userAd.imageUrl} title={userAd.title} />
                <Button label="Log Out" onClick={handleSignOut} />
              </>)
          })}
        </>
      )}
      {errorMessage}
    </>
  )
}