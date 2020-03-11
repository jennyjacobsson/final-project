import React, { useState } from 'react'
import HamburgerMenu from 'react-hamburger-menu'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

const LinkElement = styled(Link)`
  text-decoration: none;
  color:inherit;
`

const MenuWrap = styled.div`
position:absolute;
background-color:rgb(203, 250, 255);
padding:8px;
border-radius:6px;
`

const NavLinks = styled.div`
display:flex;
flex-direction:column;
text-decoration:none;
`
const MenuButton = styled.p`
padding:5px;
font-size:16px;
font-weight:bold;


&:hover {
  color:darkblue;
}
`

export const Navbar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false)

  const handleBurgerClick = () => {
    setBurgerOpen(!burgerOpen)
  }

  return (
    <>
      <MenuWrap>
        <HamburgerMenu
          isOpen={burgerOpen}
          menuClicked={handleBurgerClick}
          width={18}
          height={15}
          strokeWidth={1}
          rotate={0}
          color="black"
          borderRadius={0}
          animationDuration={0.5} />
        {burgerOpen && (
          <NavLinks>
            <LinkElement to="/login" onClick={() => setBurgerOpen(false)}>
              <MenuButton>
        Login/Register
              </MenuButton>
            </LinkElement>

            <LinkElement to="/newad" onClick={() => setBurgerOpen(false)}>
              <MenuButton>
        Create Ad
              </MenuButton>
            </LinkElement>

            <LinkElement to="/mypage" onClick={() => setBurgerOpen(false)}>
              <MenuButton>
        My Ads
              </MenuButton>
            </LinkElement>

            <LinkElement to="/" onClick={() => setBurgerOpen(false)}>
              <MenuButton>
        Logout
              </MenuButton>
            </LinkElement>
          </NavLinks>
        )}
      </MenuWrap>

    </>
  )
}