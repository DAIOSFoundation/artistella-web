import React from "react";
import ArtistBrowse from "../component/browse/artistMain/ArtistBrowse";
import BrowseMain from "../component/browse/browseMain/BrowseMain";
import {AritistTop} from '../component/browse/Top/top'
import PageTitle from "../component/feed/title";
import Layout from "../component/layout/Layout";





function Artist(){
  return(
    <Layout>
      <PageTitle title={"Artist"} />
        <ArtistBrowse/>
        <AritistTop/>
        <BrowseMain/>
    </Layout>
  )
}

export default Artist;