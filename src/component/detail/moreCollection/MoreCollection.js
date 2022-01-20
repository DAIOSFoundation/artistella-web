import React,{useState} from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import moreCollection from "../../../images/itemDetail/icon-more-collection.svg"
import downArrow from '../../../images/itemDetail/down_arrow.png';
import upArrow from '../../../images/itemDetail/up_arrow.png';
import MoreSlide from './MoreSlide';

const Div=styled.div`
  width:100%;
  margin-top:16px;
`
const MoreDiv=styled.div`
  width:100%;
  padding:16px 20px;
  border-radius:8px;
  border:solid 1px #dfd9ce;
  position:relative;
  font-size:1em;
  line-height:normal;
  display:flex;
  align-items:center;
`

const Icon = styled.img`
  margin-right:4px;
`
const Up=styled.img`
  width:12px;
  height:12px;
  object-fit:contain;
  position:absolute;
  right:20px;
  &:hover{
    cursor: pointer;
  }
`
const Down=styled.img`
  width:12px;
  height:12px;
  object-fit:contain;
  position:absolute;
  right:20px;
  &:hover{
    cursor: pointer;
  }
`

function MoreCollection() {
  const [arrow,setArrow]=useState(true)
  function onArrow(){
    setArrow(prev => !prev);
  }
  return (
    <Div>
      <MoreDiv>
        <Icon src={moreCollection} />More from this collection
        {arrow ? //그래프가 내려와있음
          <Down onClick={onArrow} src={downArrow } />:
        <Up onClick={onArrow} src={upArrow} />
        }
      </MoreDiv>
      {arrow ?<MoreSlide/>:null}
    </Div>
  );
}


export default MoreCollection;