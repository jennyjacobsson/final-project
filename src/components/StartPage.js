import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { useDebounce } from 'use-debounce'
import { Link } from 'react-router-dom';
import { Loading } from 'components/Loader'
import { Navbar } from 'components/Navbar'
import { LinkAd } from 'components/LinkAd'
import { GlassSvg } from './icons/GlassSvg'

const Header = styled.div` 
  display:flex;
  height:400px;
  width:auto;
  /* background-color:darkgrey; */
  /* background-image: url('https://images.pexels.com/photos/2495651/pexels-photo-2495651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=300'); */
  text-align:center;
  /* align-items:center; */
  justify-content:center;`

const LogoImage = styled.img`
height:200px;
object-position:top;


`

const HeaderText = styled.div`
  display:block;

  h1 {
    font-family: 'Knewave', cursive;
  }

 a {
  color:white;
  /* text-decoration:none; */
  cursor:pointer;
 }
`

const Container = styled.div`
  color:gray;
  justify-content:center;
  align-items:center;
  text-align:center;

  h2 {
    margin:40px 0;
    font-size: 20px;
  }
  `

const Form = styled.form` 
  text-align: center;
  position:relative;

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

const Text = styled.p`

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
      <Navbar />
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
      <Container>
        {loading
          && <Loading />}
        <Form>
          <GlassSvg />
          <SearchField type="search" onChange={(event) => setSearch(event.target.value)} value={search} placeholder="Search for type or location" />
        </Form> <Link to="/newad">
          <Text>Or log in and create an ad</Text>
        </Link>

        {!loading && (
          <>
            <h2>Plants looking for a new home</h2>
            {/* <h2>PLANTS READY FOR ADOPTION</h2> */}
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
      </Container>
    </>
  )
}