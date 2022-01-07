import styled from "styled-components"





const Info=styled.div`
margin-top:5.5%;
font-size: 0.8em;
color:#737170;
`
const Number=styled.h2`
font-size:1em;
font-weight:bold;
line-height:1.38;
color:#fb9c00;
`
const InfoDiv=styled.div`
width:100%;
border-radius:8px;
border: solid 1px #dfd9ce;
text-align:center;
height:68px;
padding:11px 10px;
`


function InfoNumber({info, number}){
    return(
      <InfoDiv>
        <Info>{info}</Info><Number>{number}</Number>
      </InfoDiv>
    )
  }

export default InfoNumber;