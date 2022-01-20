import React from "react";
import ArtistBrowse from "../component/browse/artistMain/ArtistBrowse";
import BrowseMain from "../component/browse/browseMain/BrowseMain";
import {AritistTop} from '../component/browse/Top/top'
import PageTitle from "../component/feed/title";
import Layout from "../component/layout/Layout";
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import {artist} from '../api';





function Artist(){
  const { collectionName: name } = useParams();
  const { isLoading, data:artistData } = useQuery(["artist", name], artist.colName);
  return(
    isLoading? null:(
    <Layout>
      <PageTitle title={"Artist"} />
        <ArtistBrowse profile={artistData.image} name={artistData.name} content={artistData.description}/>
        <AritistTop/>
        <BrowseMain />
    </Layout>
    )
  )
}

export default Artist;