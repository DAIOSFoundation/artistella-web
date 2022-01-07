import React from 'react';
import styled from 'styled-components';
import ItemHistory from '../component/detail/Detailcontent/itemHistoty'
import Activities from '../component/detail/activities/activities'
import MoreCollection from '../component/detail/moreCollection/MoreCollection';
import InfoList from '../component/detail/Detailcontent/infoList'
import PageTitle from '../component/feed/title';
import Layout from '../component/layout/Layout';

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

function ItemDetail(){
  return(
    <Layout>
      <DetailLayout>
        <PageTitle title={"Item Detail"} />
        <DetailContent>
          <ItemHistory/>
          <InfoList/>
        </DetailContent>
          <Activities/>
          <MoreCollection/>
      </DetailLayout>
    </Layout>
  )
}

export default ItemDetail;