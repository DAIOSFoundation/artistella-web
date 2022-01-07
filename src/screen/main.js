import React from "react";
import SlideImage from '../component/main/slideImg/slider'
import MainPagination from '../component/main/mainPagination/main_pagination'
import HowToUse from '../component/main/howTouse/howtoUse'
import Footer from '../component/footer/footer'
import MainGrid from '../component/main/mainGrid/main_grid'
import SubGrid from "../component/main/subGrid/sub_grid";
import PageTitle from "../component/feed/title";
import Layout from "../component/layout/Layout";



function Main(){
  return (
      <Layout>
        <PageTitle title={"Main"} />
            <SlideImage/>
            <MainGrid/>
            <MainPagination/>
            <SubGrid/>
            <HowToUse/>
            <Footer/>
      </Layout>
          )
};


export default Main;