import React,{useState}from 'react';
import styled from 'styled-components';

const Div=styled.div`
  width:50%;
  margin-right:40px;
  display:inline-block;
`
const Art=styled.img`
  width:100%;
  border-radius:8px;
`
const History=styled.div`
  width:100%;
  padding:16px 20px;
  border-radius:8px;
  border:solid 1px #dfd9ce;
  font-size:1em;
  line-height:normal;
  position:relative;
  display:flex;
  align-items:center;
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

const Graph=styled.div`
  width:100%;
  height:180px;
  background-color:#faf8f4;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:4px;
  border-radius:8px;
`
const GraphIcon=styled.img`
  margin-right:4px;
`

function ItemHistory(){
  const [arrow,setArrow]=useState('down')
  function onArrow(){
    arrow=='down'?
    setArrow('up'):setArrow('down')
  }
  return(
    <Div>
      <Art src='images/grid.png'/>
      <History>
        <GraphIcon src="images/itemDetail/icon-price-chart.svg"/>Price History
        {arrow==='down'? //그래프가 내려와있음
        <Down onClick={onArrow} src='images/itemDetail/down_arrow.png'/>:
        <Up onClick={onArrow} src='images/itemDetail/up_arrow.png'/>
        }
      </History>
      {arrow==='down'?<Graph>그래프 표시</Graph>:null}
    </Div>
  )
}

export default ItemHistory;