import React from "react";
import BrowseMain from '../component/browse/browseMain/BrowseMain'
import Top from '../component/browse/Top/top'
import PageTitle from "../component/feed/title";
import Layout from "../component/layout/Layout";

function ItemList() {
  return(
    <Layout>
      <PageTitle title={"Item List"} />
      <Top/>
      <BrowseMain/>
    </Layout>
  )
}

export default ItemList;

