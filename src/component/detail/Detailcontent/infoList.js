import React,{useState} from 'react';
import styled,{keyframes} from 'styled-components';

const Div=styled.div`
  width:50%;
  height:100%;
  display:flex;
  flex-direction: column;
`
const NameDiv=styled.div`
  width:100%;
`
const Name=styled.h1`
  font-size:1.25em;
  font-weight:bold;
`
const Artist=styled.div`
  font-size:1em;
  color:#737170;
  display:flex;
  align-items:center;
  margin:10px 0 20px 0;
`
const ArtistIcon=styled.img`
  margin-right:6px; 
`
const WalletDiv=styled.div`
  width:35vw;
  padding:16px 20px;
  border-radius:8px;
  border:solid 1px #dfd9ce;
`
const WalletTitle=styled.h1`
  font-size:0.75em;
  line-height:2;
  color:#737170;
`
const PriceDiv=styled.div`
  font-size:1.5em;
  font-weight:bold;
  display:flex;
  align-items:center;
  margin-top:6px;
`
const WalletButton=styled.div`
  width:100%;
  height:42px;
  border-radius:8px;
  background-image: linear-gradient(94deg, #fcd900, #fb9800);
  color:white;
  font-size:1em;
  font-weight:bold;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:16px;

  &:hover{
    cursor: pointer;
  }
`
const ListDiv=styled.div`
  width:35vw;
`
const List=styled.div`
  width:100%;
  padding:16px 20px;
  margin-top:16px;
  border-radius:8px;
  border:solid 1px #dfd9ce;
  font-size:1rem;
  line-height:normal;
  position:relative;
  display:flex;
  align-items:center;
`
const Up=styled.img`
  width:12px;
  height:12px;
  object-fit:contain;
  position:absolute;
  right:20px;

  &:hover{
    cursor: pointer;
  }
`
const Down=styled.img`
  width:12px;
  height:12px;
  object-fit:contain;
  position:absolute;
  right:20px;

  &:hover{
    cursor: pointer;
  }
`

const Text=styled.span`
  width:100%;
  font-size: 0.8rem;
  line-height:1.43;
  background-color:#faf8f4;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:4px;
  border-radius:8px;
  padding:16px 20px;
`
const Icon=styled.img`
  margin-right:4px;
`
function InfoList({title,artisitName,price,about,mintAdress,owner,tokenAdress, }){
  const [artArrow,setArtArrow]=useState('down')
  const [detailArrow,setDetailArrow]=useState('down')
  function onArtArrow(){
    artArrow=='down'?
    setArtArrow('up'):setArtArrow('down')
  }
  function onDetailArrow(){
    detailArrow=='down'?
    setDetailArrow('up'):setDetailArrow('down')
  }
  return(
    <Div>
      <NameDiv>
        <Name>{title}</Name>
        <Artist><ArtistIcon src="images/itemDetail/icon-artist-yellow.svg" />{artisitName}</Artist>
      </NameDiv>
      <WalletDiv>
        <WalletTitle>TOTAL LISTED COUNT</WalletTitle>
        <PriceDiv><img src="images/itemDetail/icon-price-tag.svg" />{price} SOL</PriceDiv>
        <WalletButton>Connect Wallet</WalletButton>
      </WalletDiv>
      <ListDiv> 
        {/* About Digital Art */}
        <List>
          <Icon src="images/itemDetail/icon-item-info.svg"/>About Digital Art
          {artArrow==='down'? 
          <Down onClick={onArtArrow} src='images/itemDetail/down_arrow.png'/>:
          <Up onClick={onArtArrow} src='images/itemDetail/up_arrow.png'/>
          }
        </List>
        {artArrow === 'down' ? <Text>{about }</Text>:null}
      </ListDiv>
      <ListDiv>
        {/* Details */}
        <List>
          <Icon src="images/itemDetail/icon-report.svg"/>Details
          {detailArrow==='down'? 
          <Down onClick={onDetailArrow} src='images/itemDetail/down_arrow.png'/>:
          <Up onClick={onDetailArrow} src='images/itemDetail/up_arrow.png'/>
          }
        </List>
        {detailArrow === 'down' ? <Text>{`
          Mint 주소 : ${mintAdress }
          Token 주소 : ${tokenAdress }
          소유자 : ${owner }
          `}</Text> : null}
      </ListDiv>
    </Div>
  )
}

export default InfoList;