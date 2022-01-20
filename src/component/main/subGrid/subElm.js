import styled from "styled-components"
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
  width: 100%;
`

const SubContentDiv = styled.div`
  width: 80%;
  height : 100px;
  text-overflow:ellipsis;
  *{
    margin-top: 10px;
  }
  :last-child{
    margin: 20px 0px;
  }
`

export function SubElm({img,header,text}){
  return(
    <EleDiv_s onClick={onEle}>
      <SubImgDiv>
        <GridImage src={img}></GridImage>
      </SubImgDiv>
      <SubContentDiv>
        <ImageHead_s>{header}</ImageHead_s>
        <ImageSummary>{text}</ImageSummary>
        {/* <Price>{price}</Price> */}
      </SubContentDiv>
    </EleDiv_s>
  )
}