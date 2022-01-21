import React from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import {  main } from '../../../api'
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
  grid-template-columns: repeat(4, 1fr);
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
  font-size:30px;
  font-weight:bold;
  color:black;
`
const TopDiv=styled.div`
  width: 80%;
  margin-bottom: 16px;
  padding-top: 16px;
`
const MoreButton = styled.span`
  width: 75px;
  height: 32px;
  padding: 8px 12px;
  border-radius:6px;
  border: solid 1px black;
  text-align: center;
  float:right;

  &:hover{
    cursor:pointer;
  }
`
function MainGrid() {
  const { isLoading, data } = useQuery(["main","new"], main.New)
  const NewData = data?.collections
  return(isLoading?null:(
    <GridDiv>
      <TopDiv>
        <GridTitle>New Collections</GridTitle>
        <MoreButton onClick={MoreClick}>More</MoreButton>
      </TopDiv>
      <Grid>
        {
          NewData?.map( res =>
            <GridElm img={res.image} header={res.name} text={res.description} date={res.createdAt} collectionName={res.symbol} />
          )
        }
      </Grid>
    </GridDiv>
  )
  )
}

function MoreClick(e){
  e.preventDefault();
  return (window.location.assign("/collections/new"))
}



export default MainGrid;