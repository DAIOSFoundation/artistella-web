import React from 'react'
import styled from 'styled-components'
import { SubElm } from '../main/subGrid/subElm'
import {GridDiv} from '../main/mainGrid/main_grid';
import {useParams} from 'react-router-dom';
import { itemList} from '../../api';
import {useQuery} from 'react-query';


const Grid=styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4,23.5%);
  grid-auto-rows: minmax(200px, auto);
  grid-gap:26px;
`
const GridTitle = styled.span`
  font-size:30px;
  font-weight:bold;
  color:black;
`

const TopDiv=styled.div`
  width: 80%;
  margin: 16px 0; 
  padding-top: 16px;
`

function MoreGrid(){
  const { type: type}=useParams();
  console.log(type)
  const {isLoading, data}=useQuery(["more",type], itemList.More);
  const More = data?.collections;
  return(isLoading?null:(
    <GridDiv>
      <TopDiv>
        <GridTitle>{type} Collections</GridTitle>
      </TopDiv>
      <Grid>
        { More?.map((data) => 
          <SubElm img={data.image} header={data.name} text={data.description} collectionName={data.symbol}/>
        )}
      </Grid>
    </GridDiv>
    )
  )
}

export default MoreGrid;