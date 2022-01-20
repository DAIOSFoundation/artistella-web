import { Link } from "react-router-dom"
import styled from "styled-components"
import { EleDiv, GridImage, ImageHead_s, ImageSummary, onDetail, onEle, Price } from "../../main/Maincompo"


const EleDiv_b=styled(EleDiv)`
  border: solid 1px #dfd9ce;
  &:hover{
    cursor: pointer;
  }
`
const  BroImgDiv = styled.div`
  width: 100%;
  height : 70%;
`
const  BroContentDiv = styled.div`
  width: 85%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px auto;
  padding: 30px 0 12px 0;
   *{
    margin-bottom: 10px;
  }
`


export function SubElmB({ img, header, text, price,link }) {
  return (
      <Link to={`/itemdetail/${link}`} style={{textDecoration:'none'}}>
        <EleDiv_b>
          <BroImgDiv>
            <GridImage src={img}></GridImage>
          </BroImgDiv>
          <BroContentDiv>
            <ImageHead_s>{header}</ImageHead_s>
            <ImageSummary>{text}</ImageSummary>
            <Price>{price}</Price>
          </BroContentDiv>
        </EleDiv_b>
      </Link>
    )
  }