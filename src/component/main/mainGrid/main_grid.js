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
  const { isLoading, data } = useQuery("skull", Skull)
  const monekyData = data?.results;
  console.log(monekyData);

  return isLoading ? null : ( data ?
    <GridDiv>
      <GridTitle>
        <h1>Lorem Ipsum</h1>
      </GridTitle>
      <Grid>
        {
          monekyData?.map( res =>
            <GridElm img={res.img} header={res.title} text={res.content} date={res.createdAt} />
          )
        }
      </Grid>
    </GridDiv> : null
  )
}




export default MainGrid;