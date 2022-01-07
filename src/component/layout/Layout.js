import React from "react";
import styled from "styled-components"
import Banner from "../header/banner";



const MainLayout = styled.div`
  width: 100vw;
  height : auto;
  display: flex;
  justify-content: center;
  align-items : center;
`

const Content = styled.div`
  width : 100%;
`


function Layout({children}) {
  return(
      <MainLayout>
        <Banner />
        <Content>
          {children}
        </Content>
      </MainLayout>

  )

}


export default Layout;