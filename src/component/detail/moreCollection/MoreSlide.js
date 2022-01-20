import Slider from "react-slick";
import styled from "styled-components";
import { SubElmP } from "../Ele/moreEle";
import {useRecoilValue} from 'recoil'
import { collectionName } from "../../../atoms";
import { useQuery } from "react-query";
import {itemDetail} from '../../../api'


const SlideDiv=styled.div`
  background-color:#faf8f4;
  margin-top:4px;
  border-radius:8px;
  padding: 30px 0px;
`



function MoreSlide() {
    const value =  useRecoilValue(collectionName)
    const { isLoading, data: collectionData } = useQuery(["moreCollection", value], itemDetail.moreCollection);
<<<<<<< HEAD

=======
    console.log(collectionData.results);
>>>>>>> ba531f4acd32f794869f88b73438748916553cb2
    const setting={
        dots:false,
        infinite: true,
        speed: 500,
        slidesToShow:4,
        slidesToScroll:4,
        arrows:true
    };
    return isLoading? null : collectionData ? (
        <SlideDiv>
        <Slider {...setting}>
            {collectionData.results?.map( (data) => 
            <SubElmP link={data.mintAddress} key={data.id} img={data.img} header={data.title} text={data.content} price={data.price} />
            )}
        </Slider>
        </SlideDiv> 
    ): null
    }


export default MoreSlide;