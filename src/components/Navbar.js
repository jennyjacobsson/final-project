import React, { useState } from 'react'
import HamburgerMenu from 'react-hamburger-menu'
import styled from 'styled-components/macro'
import { Link, useLocation } from 'react-router-dom'
import { Header } from './Header'

const HeaderPlaceholder = styled.div`
  height: 50px;
`

const LinkElement = styled(Link)`
  display: block;
  padding: 10px;
  text-decoration: none;
  color:inherit;
`

const MenuWrap = styled.div`
  position:absolute;
  top: 0;
  right: 0;
  z-index:1000;
  width: 100%;
  height: ${(props) => (props.open ? '100%' : 'auto')};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.open ? 'rgb(203, 250, 255)' : 'transparent')};
  font-size: 24px;
  font-weight: 600;
`

const BurgerWrap = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 100%;
  max-width: 600px;
  @media (min-width: 768px) {
    max-width: ${(props) => (props.isStartPage ? 1000 : 600)}px;}
    padding: 0 10px;
    box-sizing: border-box;
`

const Burger = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 16px;
`

const NavLinks = styled.div`
  display:flex;
  flex-direction:column;
  text-decoration:none;
`

export const Navbar = () => {
  const location = useLocation()
  const [burgerOpen, setBurgerOpen] = useState(false)

  const handleBurgerClick = () => {
    setBurgerOpen(!burgerOpen)
  }

  const handleSignout = () => {
    setBurgerOpen(false)
    window.localStorage.removeItem('accessToken')
    window.localStorage.removeItem('userId')
    window.localStorage.removeItem('userName')
  }

  return (
    <>
      {location.pathname !== '/' && <HeaderPlaceholder />}
      <MenuWrap open={burgerOpen}>
        {location.pathname !== '/' && <Header />}
        <BurgerWrap isStartPage={location.pathname === '/'}>
          <Burger>
            <HamburgerMenu
              isOpen={burgerOpen}
              menuClicked={handleBurgerClick}
              width={24}
              height={18}
              strokeWidth={1}
              rotate={0}
              color={location.pathname === '/' ? 'black' : 'white'}
              borderRadius={0}
              animationDuration={0.5} />
          </Burger>
        </BurgerWrap>
        {burgerOpen && (
          <NavLinks>
            <LinkElement to="/" onClick={() => setBurgerOpen(false)}>
              Plants Ahoy!
            </LinkElement>
            <LinkElement to="/login" onClick={() => setBurgerOpen(false)}>
              Log In
            </LinkElement>
            <LinkElement to="/newad" onClick={() => setBurgerOpen(false)}>
              Create Ad
            </LinkElement>
            <LinkElement to="/mypage" onClick={() => setBurgerOpen(false)}>
              My Page
            </LinkElement>
            <LinkElement to="/" onClick={handleSignout}>
              Log Out
            </LinkElement>
          </NavLinks>
        )}
      </MenuWrap>
    </>
  )
}