import React from "react"
import styled from "styled-components"
import { GridImage, ImageHead, ImageSummary , onEle, EleDiv, GridImgDiv, GridContent} from "../Maincompo"

const EleDiv_p=styled(EleDiv)`
  background-color: white;
  width: 90%;
  height:320px;
  align-items: center;
  display: flex;
  flex-direction: column;
  &:hover{
    cursor:pointer;
  }
`

const PagContnet = styled(GridContent)`
  width: 80%;
  height : 100%;
  display:flex;
  justify-content:center;
  flex-direction:column;
`

export function PagElm({img,header,date}){
    return(
      <EleDiv_p onClick={onEle}>
        <GridImgDiv>
          <GridImage src={img} />
        </GridImgDiv>
        <PagContnet>
          <ImageHead>{header}</ImageHead>
          <ImageSummary>{date}</ImageSummary>
        </PagContnet>
      </EleDiv_p>
    )
  }