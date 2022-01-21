import styled from "styled-components"
import { Link } from "react-router-dom"
import React from "react"
import { EleDiv, GridContent, GridImage, GridImgDiv, ImageHead_s, ImageSummary, onEle, Price } from "../Maincompo"




const EleDiv_s = styled(EleDiv)`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  &:hover{
    cursor:pointer;
  }
`;

const SubImgDiv = styled.div`
  width: 99%;
  
`

const SubContentDiv = styled.div`
  width: 80%;
  height : 100px;
  *{
    margin-top: 10px;
  }
  :last-child{
    margin: 20px 0px;
  }
`

export function SubElm({img,header,text,collectionName}){
  return(
    <Link to={`/marketplace/${collectionName}`} style={{textDecoration:'none'}}>
    <EleDiv_s>
      <SubImgDiv>
        <GridImage src={img}></GridImage>
      </SubImgDiv>
      <SubContentDiv>
        <ImageHead_s>{header}</ImageHead_s>
        <ImageSummary>{text}</ImageSummary>
        {/* <Price>{price}</Price> */}
      </SubContentDiv>
    </EleDiv_s>
    </Link>
  )
}