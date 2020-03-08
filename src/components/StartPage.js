import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { useDebounce } from 'use-debounce'
import { Link } from 'react-router-dom';
import { Loading } from 'components/Loader'
import { LinkAd } from './LinkAd'

const Header = styled.div` 
  display:flex;
  height:300px;
  width:auto;
  background-color:darkgrey;
  /* background-image: url('https://images.pexels.com/photos/2495651/pexels-photo-2495651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=300'); */
  text-align:center;
  align-items:center;
  justify-content:center;
`

const HeaderText = styled.div`
  display:block;
  color:white;

 a {
  color:white;
  /* text-decoration:none; */
  cursor:pointer;
 }
`

const Container = styled.div`
  padding:25px;
  color:gray;
  justify-content:center;
  align-items:center;
  text-align:center;

  h3 {
    margin:30px 0;
  }
  `

const Form = styled.form` 
  text-align: center;
`

const SearchField = styled.input`
  width:200px;
  height:30px;
  text-align: center;
  border: 1px solid lightgrey;
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
          <h1>SAVE A PLANT</h1>
          <h2>Adopt plants in need of saving!</h2>
          <Link to="/newad">
            <p>Give your plants a new change</p>
          </Link>
        </HeaderText>
      </Header>
      <Container>
        {loading
          && <Loading />}
        <Form>
          <SearchField type="search" onChange={(event) => setSearch(event.target.value)} value={search} placeholder="Search for specific plants" />
        </Form>

        {!loading && (
          <>
            <h3>PLANTS READY FOR ADOPTION</h3>
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