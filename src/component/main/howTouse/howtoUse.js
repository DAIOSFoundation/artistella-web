import React from 'react'
import styled from 'styled-components';
import UseEle from './htuEle';

const UseDiv= styled.div`
  padding: 40px 0px;
  width:100%;
  height: 63vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const UseTitle=styled.div`
  width: 100%;
  height: 10%;
  margin-top: 4vh;
  margin-bottom: 50px;
  font-size:30px;
  font-weight:bold;
  text-align:center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const UseGrid=styled.div`
  width: 80%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-auto-rows: minmax(200px,auto);
  gap : 30px;
  
`




function HowToUse(){
  return (
    <UseDiv>
      <UseTitle>
        <h1>
          Create and sell your NFTs
        </h1>
      </UseTitle>
      <UseGrid>
        <UseEle number='01' title='Lorem Ipsum' summary='Nostrud fugiat fugiat magna voluptate duis esse fugiat fugiat voluptate ullamco aliqua non ad exercitation.Eiusmod culpa et mollit mollit officia eiusmod dolor et adipisicing dolore adipisicing.'></UseEle>
        <UseEle number='02' title='Lorem Ipsum' summary='Nostrud fugiat fugiat magna voluptate duis esse fugiat fugiat voluptate ullamco aliqua non ad exercitation.Minim qui in non aliqua aute nulla aliqua sunt in commodo exercitation ut.'></UseEle>
        <UseEle number='03' title='Lorem Ipsum' summary='Nostrud fugiat fugiat magna voluptate duis esse fugiat fugiat voluptate ullamco aliqua non ad exercitation.Esse ad deserunt fugiat mollit est dolore anim dolor consequat.'></UseEle>
        <UseEle number='04' title='Lorem Ipsum' summary='Nostrud fugiat fugiat magna voluptate duis esse fugiat fugiat voluptate ullamco aliqua non ad exercitation.Anim exercitation velit aute laborum veniam fugiat do pariatur aute sint cillum nulla.'></UseEle>
      </UseGrid>
    </UseDiv>
  )
}

export default HowToUse;