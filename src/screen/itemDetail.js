import React from 'react';
import styled from 'styled-components';
import ItemHistory from '../component/detail/Detailcontent/itemHistoty'
import Activities from '../component/detail/activities/activities'
import MoreCollection from '../component/detail/moreCollection/MoreCollection';
import InfoList from '../component/detail/Detailcontent/infoList'
import PageTitle from '../component/feed/title';
import Layout from '../component/layout/Layout';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { itemDetail } from '../api'


const DetailLayout=styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top:130px;
  margin-bottom: 50px;
`

const DetailContent = styled.div`
  width: 100%;
  display: flex;
`

const Button = styled.button`
  width : 300px;
  height : 100px;
`

function ItemDetail() {
  const { mintAdress: mint } = useParams();
  const { isLoading, data } = useQuery(["itemDetail", mint], itemDetail.mint);
  const detailData = data?.results;
  console.log("여기",data?.results);

  return (
    <Layout>
      <DetailLayout>
        <PageTitle title={"Item Detail"} />
        <DetailContent>
          <ItemHistory img={detailData?.img}/>
          <InfoList
            title={detailData?.title}
            artisitName={detailData?.collectionName}
            price={detailData?.price}
            about={detailData?.content}
            mintAdress={detailData?.mintAddress}
            owner={detailData?.owner}
            tokenAdress={detailData?.id}
          />
        </DetailContent>
          <Activities/>
          <MoreCollection/>
      </DetailLayout>
    </Layout>
  )
}

export default ItemDetail;