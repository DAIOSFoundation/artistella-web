import React,{useState} from 'react';
import styled from 'styled-components';
import TablePag from './pagination';

const Div=styled.div`
  width:100%;
  margin-top:16px;
`
const ActivDiv=styled.div`
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
`
const Down=styled.img`
  width:12px;
  height:12px;
  object-fit:contain;
  position:absolute;
  right:20px;
`

function Activities() {
  const [arrow,setArrow]=useState('down')
  function onArrow(){
    arrow=='down'?
    setArrow('up'):setArrow('down')
  }
  return (
    <Div>
      <ActivDiv>
        <Icon src="images/itemDetail/icon-activity-01.svg"/>Activities
        {arrow==='down'? //그래프가 내려와있음
        <Down onClick={onArrow} src='images/itemDetail/down_arrow.png'/>:
        <Up onClick={onArrow} src='images/itemDetail/up_arrow.png'/>
        }
      </ActivDiv>
      {arrow==='down'?<TablePag></TablePag>:null}
    </Div>
  );
}

export default Activities;