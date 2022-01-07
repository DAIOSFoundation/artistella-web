import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick'
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import { PagElm } from './pagElm';

const PagDiv = styled.div`
  width: 100%;
  
  padding: 30px 0px;
`
const PagTitle = styled.h1`
  font-size:30px;
  font-weight:bold;
  color:black;
  margin-bottom: 16px;
`

const PageTitleDiv = styled.div`
  width: 80%;
  margin: 0 auto;
`

const PagRayout = styled.div`
background: #faf8f4;
  width: 100%;
  height : 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const PageSlider = styled(Slider)`
  width: 80%;
`


function MainPagination(){
  const setting={
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow:4,
    slidesToScroll:4,
    arrows:false
  };
  return(
    <PagRayout>
          <PageTitleDiv>
            <PagTitle>Lorem Ipsum</PagTitle>
          </PageTitleDiv>
          <PageSlider {...setting}>
              {data.map((data) => 
                <PagElm img={data.img} header={data.header} text={data.text} />
              )}
          </PageSlider>
    </PagRayout>
  )
}


const data = [
  {
      img : "images/grid.png",
      header : "Lorem Ipsum",
      text: "lorem ipsum"
  },
  {
    img : "images/grid.png",
    header : "Lorem Ipsum",
    text: "lorem ipsum"
  },
  {
    img : "images/grid.png",
    header : "Lorem Ipsum",
    text: "lorem ipsum"
  },
  {
    img : "images/grid.png",
    header : "Lorem Ipsum",
    text: "lorem ipsum"
  },
  {
    img : "images/pagination.png",
    header : "Lorem Ipsum",
    text: "lorem ipsum"
  },
  {
    img : "images/pagination.png",
    header : "Lorem Ipsum",
    text: "lorem ipsum"
  },
  {
    img : "images/pagination.png",
    header : "Lorem Ipsum",
    text: "lorem ipsum"
  },
  {
    img : "images/pagination.png",
    header : "Lorem Ipsum",
    text: "lorem ipsum"
  },
  {
    img : "images/grid.png",
    header : "Lorem Ipsum",
    text: "lorem ipsum"
},
{
  img : "images/grid.png",
  header : "Lorem Ipsum",
  text: "lorem ipsum"
},
{
  img : "images/grid.png",
  header : "Lorem Ipsum",
  text: "lorem ipsum"
},
{
  img : "images/grid.png",
  header : "Lorem Ipsum",
  text: "lorem ipsum"
},
{
  img : "images/pagination.png",
  header : "Lorem Ipsum",
  text: "lorem ipsum"
},
{
  img : "images/pagination.png",
  header : "Lorem Ipsum",
  text: "lorem ipsum"
},
{
  img : "images/pagination.png",
  header : "Lorem Ipsum",
  text: "lorem ipsum"
},
{
  img : "images/pagination.png",
  header : "Lorem Ipsum",
  text: "lorem ipsum"
},
{
  img : "images/grid.png",
  header : "Lorem Ipsum",
  text: "lorem ipsum"
},
{
img : "images/grid.png",
header : "Lorem Ipsum",
text: "lorem ipsum"
},
{
img : "images/grid.png",
header : "Lorem Ipsum",
text: "lorem ipsum"
},
{
img : "images/grid.png",
header : "Lorem Ipsum",
text: "lorem ipsum"
},
]

export default MainPagination;