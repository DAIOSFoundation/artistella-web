import React from 'react';
import styled from 'styled-components';

const TransDiv = styled.div`
  width: 100%;
  height: 60vh;
  background: linear-gradient(to bottom, rgba(76, 71, 67, 0.18), rgba(31, 29, 27, 0.89)),url(${props=>props.Path});
  background-color:#2b2640;
  background-position:right;
  background-repeat: no-repeat;
  background-size: contain;
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
  width:60%;
  text-overflow:ellipsis;
  overflow:hidden;
`

const TransSum=styled.div`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: white;
  width:60%;
`

const ExpButton=styled.div`
  width: 20%; //수정
  height: 56px;
  border-radius: 6px;
  border: solid 1px white;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover{
    cursor: pointer;
  }
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
const A=styled.a`
  text-decoration:none;
`

function TransImage({title, summary, path,url}) {
  return (
    <TransDiv Path={path}>
      <TitleDiv>
        <TransTitle>{title}</TransTitle>
        <TransSum>{summary}</TransSum>
        <A href={url} target="_blank"><ExpButton><TextSpan>Explore Collection</TextSpan></ExpButton></A>
      </TitleDiv>
    </TransDiv>
  )
}

export default TransImage;