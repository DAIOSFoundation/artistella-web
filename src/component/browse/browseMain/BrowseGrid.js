import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import { itemList} from '../../../api';
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

function BrowseGrid({ shape }) {
 
  const { isLoading, data } = useQuery("skull", itemList.Skull);
  const skdata = data?.results;
  console.log(skdata);
  return isLoading ?  null :   (
    <GridDiv>
      <Grid Shape={shape}>
        {skdata ? (
          skdata.map((data) =>
            <SubElmB key={data.mintAddress} link={data.mintAddress} img={data.img} header={data.title} text={data.content} price={`${data.price} SOL`} />
          )) : null
        }
      </Grid>
    </GridDiv>
  ) 
}


export default BrowseGrid;