import React, { useState } from 'react';
import styled from 'styled-components';
import BrowseGrid from './BrowseGrid';
import BoxViewPrssed from '../../../images/itemList/icon-boxview-pressed.png';
import BoxViewPrssed2x from '../../../images/itemList/icon-boxview-pressed@2x.png';
import BoxViewPrssed3x from '../../../images/itemList/icon-boxview-pressed@3x.png';
import BoxViewNormal from '../../../images/itemList/icon-boxview-normal.png';
import BoxViewNormal2x from '../../../images/itemList/icon-boxview-normal@2x.png';
import BoxViewNormal3x from '../../../images/itemList/icon-boxview-normal@3x.png';
import TileViewNormal from '../../../images/itemList/icon-tileview-normal.png';
import TileViewNormal2x from '../../../images/itemList/icon-tileview-normal@2x.png';
import TileViewNormal3x from '../../../images/itemList/icon-tileview-normal@3x.png';
import TileViewPressed from '../../../images/itemList/icon-tileview-pressed.png';
import TileViewPressed2x from '../../../images/itemList/icon-tileview-pressed@2x.png';
import TileViewPressed3x from '../../../images/itemList/icon-tileview-pressed@3x.png';
import IconDownBlack from '../../../images/itemList/icon-down-black.png';
import IconDownBlack2x from '../../../images/itemList/icon-down-black@2x.png';
import IconDownBlack3x from '../../../images/itemList/icon-down-black@3x.png';
import SearchIcon from '../../../images/itemList/icon-search-copy.png';
import SearchIcon2x from '../../../images/itemList/icon-search-copy@2x.png';
import SearchIcon3x from '../../../images/itemList/icon-search-copy@3x.png';



const SearchRayout=styled.div`
  width:100%;
  display:block;
  padding-left: 20px;
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
  margin-left: 10px;
  font-size: 1.1rem;
  border: none;
  :focus{
    outline: none;
  }
`

  const Button =styled.button`
    background-color: white;
    border: none;
    
    &:hover{
      cursor: pointer;
    }
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
  width:12px;
  height:12px;
`
const Recently=styled.span`
  font-size:1em;
  line-height:1.6;
  padding-left: 7px;

  &:hover{
    cursor: pointer;
  }
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
  width:24px;
  height:24px;
  &:hover{
    cursor: pointer;
  }
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
              <Button><img style={{width:'20px'}} src={SearchIcon} srcSet={SearchIcon2x,SearchIcon3x}/></Button>
            </Divbar> 
            <Idiv>
              <ListDiv>
                <Recently>Recently Listed</Recently>
                <ListIcon src={IconDownBlack} srcSet={IconDownBlack2x,IconDownBlack3x}/>
              </ListDiv>
              <BoxView>
                  {grid === 3 ?
                  <BoxIcon src={BoxViewPrssed} srcSet={BoxViewPrssed2x,BoxViewPrssed3x}></BoxIcon>:
                  <BoxIcon onClick={onGridShape} src={BoxViewNormal} srcSet={BoxViewNormal2x.anchor,BoxViewNormal3x}></BoxIcon>}
                  {grid === 4 ?
                  <BoxIcon src={TileViewPressed} srcSet={TileViewPressed2x,TileViewPressed3x}></BoxIcon>:
                  <BoxIcon onClick={onGridShape} src={TileViewNormal} srcSet={TileViewNormal2x,TileViewNormal3x}></BoxIcon>}
              </BoxView>
            </Idiv>
        </SearchDiv>
        <BrowseGrid shape={grid}/>
      </SearchContent>
    </SearchRayout>
  )
}

export default SearchView;