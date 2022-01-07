import React from 'react';
import styled from 'styled-components';
import { SubElmB } from '../Ele/browseEle';

const GridDiv=styled.div`
  width:100%;
  display:flex;
  justify-content:flex-end;
`
const Grid=styled.div`
  width:74%;
  display: grid;
  grid-template-columns: repeat(${props=>props.Shape},1fr);
  grid-auto-rows: minmax(450px,auto);
  grid-gap: 27px; 
`

function BrowseGrid({shape}){
  return(
  <GridDiv>
    <Grid Shape={shape}>
    {
        data.map( (data)=>
          <SubElmB img={data.img} header={data.header} text={data.text} price={data.price} />

        )
      }
    </Grid>
  </GridDiv>
  )
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
];
export default BrowseGrid;