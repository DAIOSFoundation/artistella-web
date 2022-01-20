import React from 'react'
import styled from 'styled-components'
import { SubElm } from './subElm'
import {GridDiv} from '../mainGrid/main_grid';
import { main, Popular } from '../../../api';
import {useQuery} from 'react-query';

const Grid=styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-auto-rows: minmax(200px,auto);
  grid-gap: 26px;

`
const GridTitle = styled.span`
  font-size:30px;
  font-weight:bold;
  color:black;
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

const TopDiv=styled.div`
  width: 80%;
  margin-bottom: 16px;
  padding-top: 16px;
`

function SubGrid(){
  const { isLoading, data } = useQuery(["main","popular"], main.Popular)
  const PopularData = data?.collections
  console.log(PopularData);
  return(isLoading? null:(
    <GridDiv>
      <TopDiv>
        <GridTitle>Popular Collections</GridTitle>
        <MoreButton onClick={MoreClick}>More</MoreButton>
      </TopDiv>
      <Grid>
        { PopularData?.map((data) => 
          <SubElm img={data.image} header={data.name} text={data.description}/>
        )}
      </Grid>
    </GridDiv>
    )
  )
}

function MoreClick(e){
  e.preventDefault();
  return (window.location.assign("/itemlist"))
}



const data = [
  {
    img : "images/grid.png",
    header : "Lorem Ipsum",
    text: "Dolor consequat laboris duis",
    price : "1.2 SOL"
  },
  {
    img : "images/grid.png",
    header : "Lorem Ipsum",
    text: "Dolor consequat laboris duis",
    price : "1.2 SOL"
  },
  {
    img : "images/grid.png",
    header : "Lorem Ipsum",
    text: "Dolor consequat laboris duis",
    price : "1.2 SOL"
  },
  {
    img : "images/grid.png",
    header : "Lorem Ipsum",
    text: "Dolor consequat laboris duis",
    price : "1.2 SOL"
  },
  {
    img : "images/grid.png",
    header : "Lorem Ipsum",
    text: "Dolor consequat laboris duis",
    price : "1.2 SOL"
  },
  {
    img : "images/grid.png",
    header : "Lorem Ipsum",
    text: "Dolor consequat laboris duis",
    price : "1.2 SOL"
  },
  {
    img : "images/grid.png",
    header : "Lorem Ipsum",
    text: "Dolor consequat laboris duis",
    price : "1.2 SOL"
  },
  {
    img : "images/grid.png",
    header : "Lorem Ipsum",
    text: "Dolor consequat laboris duis",
    price : "1.2 SOL"
  }
]
export default SubGrid;