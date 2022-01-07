import React from 'react';
import styled from 'styled-components';

const FilterDiv = styled.div`
  width:300px;
  height: 400px;
  padding: 20px;
  margin-right:27px;
  border-radius:8px;
  background-color:#faf8f4;
  display: block;
  position:absolute;
  top:30px;
`
const Title=styled.h1`
  margin-bottom:18px;
  font-size:18px;
  font-weight:bold;
  color:#151d29;
`
const Select=styled.div`
  width:100%;
  height: 40px;
  margin-bottom:12px;
  border-radius:6px;
  background-color:#252220;
  display:flex;
  align-items: center;
  justify-content: space-around ;
  position:relative;
`
const SelectLogo=styled.img`
  width: 7%;
  object-fit:contain;
  margin-right: 6px;
`
const SelectName=styled.h1`
  width: 70% ;
  font-size:15px;
  font-weight:bold;
  color:white;
`
const SelectArrow=styled.img`
  width: 5%;
  right:12px;
`
const MinMax=styled.input`
  background-color:white;
  width: 45%;
  padding:11px 12px;
  border-radius:6px;
  border:solid 1px black;
`
const To= styled.span`
  display: inline-block;
  width: 20px;
  font-size:13px;
  color:#aba29c;
  text-align:center;
`
const ApplyDiv=styled.div`
  width:100%;
  height:36px;
  margin-top: 24px;
  border-radius:6px;
  background-image:linear-gradient(99deg, #fcd900, #fb9800 100%);
  font-size:15px;
  font-weight:bold;
  color:white;
  display:flex;
  justify-content: center;
  align-items:center;
`
function Filter(){
  return(
    <FilterDiv>
      <Title>Price Filter</Title>
      <Select>
        <SelectLogo src="images/itemList/icon-solana.png" srcSet="images/itemList/icon-solana@2x.png 2x,images/itemList/icon-solana@3x.png 3x"/>
        <SelectName>SOL</SelectName>
        <SelectArrow src="images/itemList/icon-down-white.png" srcSet="images/itemList/icon-down-white@2x.png 2x,images/itemList/icon-down-white@3x.png 3x"/>
      </Select>
      <MinMax placeholder='Min'></MinMax>
      <To>to</To>
      <MinMax placeholder='Max'></MinMax>
      <ApplyDiv>Apply</ApplyDiv>
    </FilterDiv>
  )
}

export default Filter;