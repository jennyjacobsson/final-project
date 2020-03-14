import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { useDebounce } from 'use-debounce'
import { Link } from 'react-router-dom';
import { Loading } from 'components/Loader'
import { LinkAd } from 'components/LinkAd'
import { GlassSvg } from './icons/GlassSvg'
import { Container } from './StyledCollection'

const Header = styled.div` 
  display:flex;
  height:400px;
  width:auto;
  text-align:center;
  justify-content:center;`

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
  margin-bottom: 20px;

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
    fetch(`http://localhost:8080/ads?search=${searchQuery}`)
      .then((res) => res.json())
      .then((json) => setAds(json))
    setLoading(false)
  }, [searchQuery])

  return (
    <>
      <Header>
        <HeaderText>
          <LogoImage src="/assets/logo.png" />
          <h1>Plants Ahoy!</h1>
          <h2>Easy plant adoption</h2>
          {/* <h1>SAVE A PLANT</h1>
          <h2>Adopt plants in need of saving!</h2>
          <Link to="/newad">
            <p>Give your plants a new change</p>
          </Link> */}
        </HeaderText>
      </Header>
      <Outer>
        {loading
          && <Loading />}
        <Form>
          <GlassSvg />
          <SearchField type="search" onChange={(event) => setSearch(event.target.value)} value={search} placeholder="Search for type or location" />
        </Form>

        <CreateLink to="/newad">Create ad</CreateLink>

        {!loading && (
          <>
            <h2>Plants looking for a new home</h2>
            {ads.map((ad) => {
              return (
                <LinkAd
                  key={ad._id}
                  id={ad._id}
                  title={ad.title}
                  type={ad.type}
                  location={ad.location}
                  price={ad.price}
                  imageUrl={ad.imageUrl} />
              );
            })}
          </>
        )}
      </Outer>
    </>
  )
}