import React from "react"
import styled from "styled-components"
import { GridImage, ImageHead, ImageSummary , onEle, EleDiv, GridImgDiv, GridContent} from "../Maincompo"




const EleDiv_p=styled(EleDiv)`
  background-color: white;
  width: 90%;
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

  *{
    margin-top: 10px;
  }
  :last-child{
    margin: 20px 0px;
  }
`

export function PagElm({img,header,text}){
    return(
      <EleDiv_p onClick={onEle}>
        <GridImgDiv>
          <GridImage src={img} />
        </GridImgDiv>
        <PagContnet>
          <ImageHead>{header}</ImageHead>
          <ImageSummary>{text}</ImageSummary>
        </PagContnet>
      </EleDiv_p>
    )
  }