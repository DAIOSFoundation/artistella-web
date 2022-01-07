import React, { useState } from 'react';
import styled from 'styled-components';
import BrowseGrid from './BrowseGrid';

const SearchRayout=styled.div`
  width:100%;
  display:block;
`

const SearchContent = styled.div`
  width : 100%;
  display: flex;
  flex-direction: column;
`

const SearchDiv=styled.div`
  margin: auto 0 30px auto;
  width: 74%;
  display:grid;
  grid-template-columns: repeat(1, 66% 32%);
  justify-content:flex-end;
  grid-gap: 27px;
`


const Divbar = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  :focus-within{
    border: 2px solid black;
  }
  `

const Search =  styled.input`
  width: 90%;
  height: 80%;
  border: none;
  :focus{
    outline: none;
  }
  `

  const Button =styled.button`
    background-color: white;
    border: none;
  `

  const Idiv = styled.div`
  display  : flex ;
  justify-content: space-between;
  `

const ListDiv =styled.div`
  width: 60%;
  border-radius:8px;
  border:solid 1px black;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  position:relative;
`
const ListIcon=styled.img`
  object-fit:contain;
  position:absolute;
  right:12px;
  top:16px;
`
const Recently=styled.span`
  font-size:1em;
  line-height:1.6;
`
const BoxView=styled.div`
  width: 30%;
  border-radius:8px;
  border:solid 1px black;
  display:flex;
  justify-content: center;
  align-items:center;
  position:relative;
`
const BoxIcon=styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin:0 5px;
`

function SearchView(){
  const [grid, setgird]=useState(3)
  function onGridShape(){
    grid !== 3 ?
    setgird(3):
    setgird(4)
  }
  return(
    <SearchRayout>
      <SearchContent>
        <SearchDiv>
            <Divbar>
              <Search placeholder='Search Items'/>
              <Button><img src="images/itemList/icon-search-copy.png" srcSet="images/itemList/icon-search-copy@2x.png 2x, images/itemList/icon-search-copy@3x.png 3x"/></Button>
            </Divbar> 
            <Idiv>
              <ListDiv>
                <Recently>Recently Listed</Recently>
                <ListIcon src="images/itemList/icon-down-black.png" srcSet="images/itemList/icon-down-black@2x.png 2x,images/itemList/icon-down-black@3x.png 3x"/>
              </ListDiv>
              <BoxView>
                  {grid === 3 ?
                  <BoxIcon src="images/itemList/icon-boxview-pressed.png" srcSet="images/itemList/icon-boxview-pressed@2x.png 2x,images/itemList/icon-boxview-pressed@3x.png 3x"></BoxIcon>:
                  <BoxIcon onClick={onGridShape} src="images/itemList/icon-boxview-normal.png" srcSet="images/itemList/icon-boxview-normal@2x.png 2x,images/itemList/icon-boxview-normal@3x.png 3x"></BoxIcon>}
                  {grid === 4 ?
                  <BoxIcon src="images/itemList/icon-tileview-pressed.png" srcSet="images/itemList/icon-tileview-pressed@2x.png 2x,images/itemList/icon-tileview-pressed@3x.png 3x"></BoxIcon>:
                  <BoxIcon onClick={onGridShape} src="images/itemList/icon-tileview-normal.png" srcSet="images/itemList/icon-tileview-normal@2x.png 2x,images/itemList/icon-tileview-normal@3x.png 3x"></BoxIcon>}
              </BoxView>
            </Idiv>
        </SearchDiv>
        <BrowseGrid shape={grid}/>
      </SearchContent>
    </SearchRayout>
  )
}

export default SearchView;