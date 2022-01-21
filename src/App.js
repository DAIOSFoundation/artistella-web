import React from 'react';
import { GlobalStyle } from './globalstyle';
import Main from './screen/main';
import ItemList from './screen/itemList';
import Artist from './screen/artist';
import MorePage from './screen/MorePage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ItemDetail from './screen/itemDetail';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';



const queryClient = new QueryClient();



function App() {
  return (
    <>
      <RecoilRoot>
      <QueryClientProvider client={queryClient} >
        <HelmetProvider>
          <GlobalStyle />
          <BrowserRouter>
            <Switch>
              <Route exact path='/' >
                  <Main />
              </Route>
              <Route exact path='/itemlist'>
                  <ItemList />
              </Route>
              <Route exact path='/artist/:collectionName'>
                  <Artist />
              </Route>
              <Route path='/itemDetail/:mintAdress'>
                  <ItemDetail />
              </Route>
              <Route path='/collections/:type'>
                  <MorePage />
              </Route>
            </Switch>
          </BrowserRouter>
          </HelmetProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
