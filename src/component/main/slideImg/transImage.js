import React from 'react';
import styled from 'styled-components';

const TransDiv = styled.div`
  width: 100%;
  height: 40vh;
  background-image:url(images/1.png);
  background: linear-gradient(to bottom, rgba(76, 71, 67, 0.18), rgba(31, 29, 27, 0.89)),url(${props=>props.Path});
  background-repeat: no-repeat;
  background-size: cover;
  margin-top:80px;
  display: flex;
  align-items: center;
  justify-content: center;

  *{
    margin: 15px 0px;
  }
`
const TitleDiv=styled.div`
  height: 50%;
  width: 80%;
  text-align: left;
`
const TransTitle = styled.div`
  font-size: 58px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: white;
  white-space: nowrap;
`

const TransSum=styled.div`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: white;
`

const ExpButton=styled.div`
  width: 15%;
  height: 56px;
  border-radius: 6px;
  border: solid 1px white;
  display: flex;
  align-items: center;
  justify-content: center;
`
const TextSpan=styled.span`
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height:1.33;
  letter-spacing: normal;
  color: white;
`


function TransImage({title, summary, path}) {
  return (
    <TransDiv Path={path}>
      <TitleDiv>
        <TransTitle>{title}</TransTitle>
        <TransSum>{summary}</TransSum>
        <ExpButton><TextSpan>Explore Collection</TextSpan></ExpButton>
      </TitleDiv>
    </TransDiv>
  )
}

export default TransImage;