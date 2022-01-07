import React from 'react';
import styled from 'styled-components';
import Filter from './Filter';
import SearchView from './searchView';

const BrowseDiv= styled.div`
  width: 80%;
  position: relative;
  margin: 80px auto;
`
function BrowseMain(){
  return(
  <BrowseDiv>
    <SearchView/>
    <Filter/>
  </BrowseDiv>
  )
}

export default BrowseMain;