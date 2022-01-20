import React from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import {  Skull } from '../../../api'
import GridElm from './mainEle'

export const GridDiv = styled.div`
  padding: 70px 0px;
  width: 100%;
  background: #faf8f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Grid=styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(200px,50%);
  grid-gap: 26px;
  align-items: center;
  justify-content: center;
`
const GridTitle = styled.div`
  width: 80%;
  height: 5%;
  display: inline-block;
  margin-bottom: 16px;

  h1{
    font-size:30px;
    font-weight:bold;
    color:black;
  }
`
function MainGrid() {

  return(
    <GridDiv>
      <GridTitle>
        <h1>Lorem Ipsum</h1>
      </GridTitle>
      <Grid>
        {
          data.map( res =>
            <GridElm img={res.img} header={res.header} text={res.text} date={res.date} />
          )
        }
      </Grid>
    </GridDiv>
  )
}

const data =[
    {
      img : "images/grid.png",
      header : "Lorem Ipsum",
      text: "Dolor consequat laboris duis duis in consectetur dolor ut Lorem duis ex laborum dolore.",
      date : "12/24/21"
    },
    {
      img : "images/grid.png",
      header : "Lorem Ipsum",
      text: "Dolor consequat laboris duis duis in consectetur dolor ut Lorem duis ex laborum dolore.",
      date : "12/24/21"
    },
    {
      img : "images/grid.png",
      header : "Lorem Ipsum",
      text: "Dolor consequat laboris duis duis in consectetur dolor ut Lorem duis ex laborum dolore.",
      date : "12/24/21"
    },
    {
      img : "images/grid.png",
      header : "Lorem Ipsum",
      text: "Dolor consequat laboris duis duis in consectetur dolor ut Lorem duis ex laborum dolore.",
      date : "12/24/21"
    },
    {
      img : "images/grid.png",
      header : "Lorem Ipsum",
      text: "Dolor consequat laboris duis duis in consectetur dolor ut Lorem duis ex laborum dolore.",
      date : "12/24/21"
    },
    {
      img : "images/grid.png",
      header : "Lorem Ipsum",
      text: "Dolor consequat laboris duis duis in consectetur dolor ut Lorem duis ex laborum dolore.",
      date : "12/24/21"
    },

]


export default MainGrid;