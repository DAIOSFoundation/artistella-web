import React from 'react';
import styled from "styled-components"
import { EleDiv, GridImage, ImageHead_s, ImageSummary, onEle, Price } from "../../main/Maincompo"




const EleDiv_More=styled(EleDiv)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
`

const MoreImgDiv = styled.div`
  width: 100%;
  height: 60%;
  
`
const MoreContDiv = styled.div`
  width: 85%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px auto;
   *{
    margin-bottom: 10px;
  }
`

export function SubElmP({img,header,text,price}){
  return(
    <EleDiv_More onClick={onEle}>
      <MoreImgDiv>
        <GridImage src={img}></GridImage>
      </MoreImgDiv>
      <MoreContDiv>
        <ImageHead_s>{header}</ImageHead_s>
        <ImageSummary>{text}</ImageSummary>
        <Price>{price}</Price>
      </MoreContDiv>
    </EleDiv_More>
  )
}
