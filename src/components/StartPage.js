import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { useDebounce } from 'use-debounce'
import { Link } from 'react-router-dom';
import { Loading } from './Loader'
import { LinkAd } from './LinkAd'
import { GlassSvg } from './icons/GlassSvg'
import { Ad, Ads, Container } from './StyledCollection'
import { SERVER_URL } from '../App'

const Header = styled.div` 
  display:flex;
  height:400px;
  width:auto;
  text-align:center;
  justify-content:center;
`

const LogoImage = styled.img`
  height:200px;
  object-position:top;
`

const HeaderText = styled.div`
  display:block;

  h1 {
    font-family: 'Knewave', cursive;
    font-weight: normal;
  }

  h2 {
    text-transform: uppercase;
    font-weight: normal;
    font-size: 18px;
    margin: 0;
  }

  a {
    color:white;
    cursor:pointer;
 }
`

const Outer = styled(Container)`
  @media (min-width: 768px) {
    max-width: 1000px;
  }

  h2 {
    margin: 40px 0 20px;
    text-transform: uppercase;
    font-weight: normal;
    font-size: 18px;
  }
`

const Form = styled.form` 
  text-align: center;
  position:relative;
  margin: 0 auto 20px;
  max-width:400px;

  svg {
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    left:8px;
  }
`

const SearchField = styled.input`
  width:100%;
  height:40px;
  text-align: center;
  border: none;
  border-radius:6px;
  font-size:18px;
`

const CreateLink = styled(Link)`
  color: #35749f;
  font-size: 18px;
`

export const StartPage = () => {
  const [search, setSearch] = useState('')
  const [ads, setAds] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery] = useDebounce(search, 500)

  useEffect(() => {
    fetch(`${SERVER_URL}/ads?search=${searchQuery}`)
      .then((res) => res.json())
      .then((json) => {
        json.reverse()
        setAds(json)
        setLoading(false)
      })
  }, [searchQuery])

  return (
    <>
      <Header>
        <HeaderText>
          <LogoImage src="/assets/logo.png" />
          <h1>Plants Ahoy!</h1>
          <h2>Easy plant adoption</h2>
        </HeaderText>
      </Header>

      <Outer>
        <Form>
          <GlassSvg />
          <SearchField
            type="search"
            onChange={(event) => setSearch(event.target.value)}
            value={search}
            placeholder="Search for type or location" />
        </Form>
        <CreateLink to="/newad">Create ad</CreateLink>

        {loading
          && <Loading />}

        {!loading && (
          <>
            <h2>Plants looking for a new home</h2>
            <Ads>
              {ads.map((ad) => {
                return (
                  <Ad>
                    <LinkAd
                      key={ad._id}
                      id={ad._id}
                      title={ad.title}
                      location={ad.location}
                      price={ad.price}
                      imageUrl={ad.imageUrl} />
                  </Ad>
                );
              })}
            </Ads>
          </>
        )}
      </Outer>
    </>
  )
}