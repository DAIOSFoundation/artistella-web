import React from 'react';
import { GlobalStyle } from './globalstyle';
import Main from './screen/main';
import ItemList from './screen/itemList';
import Artist from './screen/artist';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ItemDetail from './screen/itemDetail';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <>
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
            <Route exact path='/artist'>
                <Artist />
            </Route>
            <Route exact path='/itemDetail'>
                <ItemDetail />
            </Route>
          </Switch>
        </BrowserRouter>
    </HelmetProvider>
    </>
  );
}

export default App;
