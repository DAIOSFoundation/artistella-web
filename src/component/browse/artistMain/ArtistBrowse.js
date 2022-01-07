import React from 'react';
import styled from 'styled-components';
import InfoNumber from './artistInfoNumber';


const Div =styled.div`
  margin-top: 100px;
  width:100%;
  background-color:white;
  text-align:center;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Photo=styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    margin-bottom:12px;
    border: 3px solid transparent;
    border-radius: 50%;
    background-image: linear-gradient(#fff, #fff), 
    linear-gradient(135deg, #fcd900, #fb9800);
    background-origin: border-box;
    background-clip: content-box, border-box;
`

const PhotoDiv=styled.div`
  width: 160px;
  height: 160px;
  margin-bottom: 30px;
`

const Name=styled.h1`
  font-size:2.2em;
  font-weight:900;
  margin-bottom:30px;
`
const Content=styled.p`
  width: 30%;
  font-size:0.9em;
  line-height:1.71;
  color:#737170;
`
const ArtistGrid=styled.div`
  width: 40%;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 12px;
  margin-bottom:20px;
`

function ArtistBrowse(){
  return(
    <Div>
      <PhotoDiv>
        <Photo src='images/itemList/profile.png'/>
      </PhotoDiv>
      <Name>Artist Name Here</Name>
      <ArtistGrid>
          <InfoNumber info='FLOOR PRICE' number='0.25 SOL'/>
          <InfoNumber info='TOTAL VOLUME' number='387.57 SOL'/>
          <InfoNumber info='AVG SALE PRICE' number='0.50 SOL'/>
          <InfoNumber info='TOTAL LISTED COUNT' number='335'/>
      </ArtistGrid>
      <Content>The Baby Ape Social Club is a limited collection of 5,000 “Baby Apes” that reside on Dab Island in the heart of the Bermuda Triangle. Inspired by our fellow Bored Apes on the Ethereum chain, we are here to bring the Baby Ape Social Club to the Solana ecosystem.</Content>
    </Div>
  )
}


export default ArtistBrowse;