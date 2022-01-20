import React from "react"
import styled from "styled-components"
import { EleDiv, GridContent, GridImgDiv, ImageHead, ImageSummary, onEle } from "../Maincompo"

const EleDiv_m=styled(EleDiv)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover{
    cursor:pointer;
  }
`

const ImageDate=styled.p`
  font-size:0.875rem;
  color:#aea9a5;
`


const GridImage=styled.img`
  width:100%;
  min-width: 100px;
  height:100%;
  min-height: 100px;
`



function GridElm({img,header,text,date}){

    return(
      <EleDiv_m onClick={onEle}>
          <GridImgDiv>
            <GridImage src={img}></GridImage>
          </GridImgDiv>
          <GridContent>
            <ImageHead>{header}</ImageHead>
            <ImageSummary>{text}</ImageSummary>
            <ImageDate>{date}</ImageDate>
          </GridContent>
        </EleDiv_m>
    )
  }

export default GridElm;