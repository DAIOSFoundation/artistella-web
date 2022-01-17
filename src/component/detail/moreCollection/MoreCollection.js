import React,{useState} from 'react';
import styled from 'styled-components';
import Slider from 'react-slick'
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import { SubElmP } from '../Ele/moreEle';

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
const SlideDiv=styled.div`
  background-color:#faf8f4;
  margin-top:4px;
  border-radius:8px;
  padding: 30px 0px;
`
function MoreCollection() {
  const [arrow,setArrow]=useState('down')
  function onArrow(){
    arrow=='down'?
    setArrow('up'):setArrow('down')
  }
  return (
    <Div>
      <MoreDiv>
        <Icon src="images/itemDetail/icon-more-collection.svg"/>More from this collection
        {arrow==='down'? //그래프가 내려와있음
        <Down onClick={onArrow} src='images/itemDetail/down_arrow.png'/>:
        <Up onClick={onArrow} src='images/itemDetail/up_arrow.png'/>
        }
      </MoreDiv>
      {arrow==='down'?<MoreSlide/>:null}
    </Div>
  );
}

function MoreSlide(){
  const setting={
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow:4,
    slidesToScroll:4,
    arrows:true
  };
  return(
    <SlideDiv>
      <Slider {...setting}>
          
        {data.map( (data) => 
        <SubElmP img={data.img} header={data.header} text={data.text} price={data.price} />
        )}
      </Slider>
    </SlideDiv>
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
  {
    img : "images/grid.png",
    header : "Lorem Ipsum",
    text: "Dolor consequat laboris duis",
    price : "1.2 SOL"
  },

]





export default MoreCollection;