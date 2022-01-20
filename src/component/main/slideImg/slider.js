import React from 'react';
import Slider from 'react-slick'
import { useQuery } from 'react-query'
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import styled from 'styled-components';
import { Carousel } from '../../../api';
import TransImage from './transImage';

const ImageSlider = styled.div`
  width: 100%;
  height: 100%;
  .slick-dots{
    top: 65vh;
    li button:before{
      color: #fbac00;
      font-size: 10px;
    }
  }
`

function SlideImage(){
  const { isLoading, data } = useQuery("carousel", Carousel)
  const CarouselData = data
  const setting={
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 5500,
    arrows:false,
  };
  return(
    isLoading? null:(
    <ImageSlider>
      <Slider {...setting}>
          {CarouselData.map((data)=> 
            <TransImage title={data.title} summary={data.description} path={data.image} url={data.url} />
          )}
      </Slider>
    </ImageSlider>
    )
  )
}
 export default SlideImage;