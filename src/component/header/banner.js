import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MenuIn from './MenuIn';
import Searchs from './SearchBar';

const HeaderNav = styled.nav`
  margin: 0 auto;
  width: 100%;
  height: 80px;
  background-color:#fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index:1000; // position fixed
  top:0;
  left:0;
`


const NavDiv = styled.div`
  width : 80%;
  height : 100%;
  margin : 0 auto;
  display : flex;
  align-items: center;
  justify-content: space-between;
`

const Menudiv = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 30%;
    color: #252220;
    font-size: 1rem;
    *{
      width: 20%;
      align-items: center;
      justify-content: flex-start;
    }
`

const Logo=styled.div`
  width: 8%;
  height: 50%;
  display: flex;
  justify-content: center;
`

const MenuImg =styled.img`
    width: 36px;
    height: 36px;
`
const MenuImgDiv =styled.div`
  display: flex;
`


const Wallet=styled.div`
  width: 30%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content : center;
  border-radius: 6px;
  border: solid 1px #252220;
  background-color: #fff;
  padding: 5px;
`
const Icon_wallet=styled.div`
  width: 20%;
  height: 100%;
  margin-right: 3px;
`
const ConnectDiv=styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    width: auto;
    font-size: 0.8rem;
  }
`

const ImgWallet = styled.img`
  width : 100%;
  height: 100%;
`

const LogoImg = styled.img`
  width : 98%;
`

function Banner(){
    return (
      <HeaderNav>
        <NavDiv>
          <Logo onClick={LogoClick}><LogoImg src='images/artistella-logo.png' srcSet='images/artistella-logo@2x.png 2x, images/artistella-logo@3x.png 3x'/></Logo>
          <Searchs />
          <Menudiv>
            <MenuIn child="BROWSE"/>
            <MenuIn child="SELL"/>
            <MenuIn child="RAYDIUM"/>
            <MenuImgDiv>
              <MenuImg src="images/icon-id.png" srcSet="images/icon-id@2x.png 2x,images/icon-id@3x.png 3x"/>
            </MenuImgDiv>
            <Wallet>
              <Icon_wallet>
                <ImgWallet src="images/icon-wallet.png" srcSet="images/icon-wallet@2x.png 2x, images/icon-wallet@3x.png 3x"/>
              </Icon_wallet>
              <ConnectDiv>
                <span>Connect Wallet</span>
              </ConnectDiv>
            </Wallet>
        </Menudiv>
      </NavDiv>
    </HeaderNav>
  )
}

function LogoClick(e){
  e.preventDefault()
  return(window.location.assign("/"))
}


export default Banner;