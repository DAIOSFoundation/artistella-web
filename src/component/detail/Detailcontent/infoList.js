import React,{useState} from 'react';
import styled from 'styled-components';
import artistYellow from '../../../images/itemDetail/icon-artist-yellow.svg'
import priceTag from '../../../images/itemDetail/icon-price-tag.svg'
import itemInfo from '../../../images/itemDetail/icon-item-info.svg';
import downArrow from '../../../images/itemDetail/down_arrow.png';
import upArrow from '../../../images/itemDetail/up_arrow.png';
import reporticon from '../../../images/itemDetail/icon-report.svg';

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
  const [artArrow, setArtArrow] = useState(true);
  const [detailArrow, setDetailArrow] = useState(true);
  function onArtArrow(){
    setArtArrow(prev => !prev);
  }
  function onDetailArrow(){
    setDetailArrow(prev => !prev);
  }
  return(
    <Div>
      <NameDiv>
        <Name>{title}</Name>
        <Artist><ArtistIcon src={artistYellow} />{artisitName}</Artist>
      </NameDiv>
      <WalletDiv>
        <WalletTitle>TOTAL LISTED COUNT</WalletTitle>
        <PriceDiv><img src={priceTag} />{price} SOL</PriceDiv>
        <WalletButton>Connect Wallet</WalletButton>
      </WalletDiv>
      <ListDiv>
        {/* About Digital Art */}
        <List>
          <Icon src={itemInfo}/>About Digital Art
          {artArrow ?
            <Down onClick={onArtArrow} src={downArrow } />:
            <Up onClick={onArtArrow} src={upArrow } />
          }
        </List>
        {artArrow ? <Text>{about }</Text>:null}
      </ListDiv>
      <ListDiv>
        {/* Details */}
        <List>
          <Icon src={reporticon} />Details
          {detailArrow ?
          <Down onClick={onDetailArrow} src={downArrow }/>:
          <Up onClick={onDetailArrow} src={upArrow }/>
          }
        </List>
        {detailArrow ? <Text>
          {`Mint Address : ${mintAdress}`}<br/>
          {`Token Address : ${tokenAdress}`}<br/>
          {`Owner : ${owner}`}
          </Text> : null}
      </ListDiv>
    </Div>
  )
}

export default InfoList;