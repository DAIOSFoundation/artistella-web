import React from 'react';
import styled from "styled-components";
import iconItemPressed from "../../../images/itemList/icon-item-pressed.png"
import iconItemPressed2x from "../../../images/itemList/icon-item-pressed@2x.png";
import iconItemPressed3x from "../../../images/itemList/icon-item-pressed@3x.png";
import iconActivityNormal from "../../../images/itemList/icon-activity-normal.png"
import iconActivityNormal2x from "../../../images/itemList/icon-activity-normal@2x.png"
import iconActivityNormal3x from "../../../images/itemList/icon-activity-normal@3x.png"


const TopDiv = styled.div`
  width:100%;
  padding: 60px 120px 0 120px;
  text-align:center;
`
const ArtTopDiv=styled.div`
  width:100%;
  padding: 0 120px 0 120px;
  text-align:center;
`
const Title =styled.h1`
  font-size:36px;
  font-weight:900;
  margin-top:80px;
`
const Buttons=styled.div`
  width:100%;
  height:29px;
  margin:39px 0 0;
  text-align:center;
  border-bottom: 1px solid #dfd9ce;
`
const ArtButtons=styled.div`
  width:100%;
  height:29px;
  margin:24px 0 0;
  text-align:center;
  border-bottom: 1px solid #dfd9ce; 
`
const ActLine=styled.span`
  border-bottom: 2px solid transparent;
  border-image:linear-gradient(92deg, #fcd900, #fb9800);
  border-image-slice:1;
  display:inline-block; 
  padding-bottom: 4px;

  &:hover{
    cursor: pointer;
  }
`
const ItemIcon=styled.img`
  line-height:29px;
  vertical-align:middle;
  margin:0 1px 2px 1px;
  width:20px;
  height:20px;
`
const ActivityIcon=styled.img`
  line-height:29px;
  vertical-align:middle;
  margin:0 1px 2px 1px;
  width:20px;
  height:20px;
`
const Margin=styled.span`
  display:inline-block;
  width: 36px;
  background-color:white;
`
function Top(){
  return(
    <TopDiv>
      <Title>Explore Items</Title>
      <Buttons>
          <ActLine>
            <ItemIcon src={iconItemPressed} srcSet={iconItemPressed2x,iconItemPressed3x}/>
            <span>Items</span>
          </ActLine>
          <Margin></Margin>
          <span>
            <ActivityIcon src={iconActivityNormal} srcSet={iconActivityNormal2x,iconActivityNormal3x}/>
            <span style={{color:'#dfd9ce'}}>Activity</span> 
          </span>
          {/*활성상태 아이콘컬러 */}
      </Buttons>
    </TopDiv>
  )
}

export function AritistTop(){
  return(
    <ArtTopDiv>
      <ArtButtons>
          <ActLine>
            <ItemIcon src={iconItemPressed} srcSet={iconItemPressed2x,iconItemPressed3x}/>
            <span>Items</span>
          </ActLine>
          <Margin></Margin>
          <span>
            <ActivityIcon src={iconActivityNormal} srcSet={iconActivityNormal2x,iconActivityNormal3x}/>
            <span style={{color:'#dfd9ce'}}>Activity</span> 
          </span>
          {/*활성상태 아이콘컬러 */}
      </ArtButtons>
    </ArtTopDiv>
  )
}
export default Top;