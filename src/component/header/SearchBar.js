import styled from 'styled-components';
import SlideImage from '../main/slideImg/slider';

const Searchbar = styled.input`
  border : none;
  width:95%;

  :focus {
    outline : none;
  }
`
const SearchButton=styled.div`
  border: none;
  width: 5%;
  margin: 0 2px;
  display:flex;
  align-items:center;
  justify-content: center;
  background-color: white;
`
const SearchDiv=styled.div`
  margin-top: 8px;
  width : 60%;
  height: 40%;
  display:flex;
  align-items: center;
  justify-content: center;

`

  const SearchBardiv = styled.div`
    width : 60%;
    height: 32px;
    display:flex;
    border-radius: 6px;
  align-items: center;
    border : 1px solid black;

  :focus-within{
    border: 2px solid #737170;
  }

  `


function Searchs() {
  return(
    <SearchDiv>
      <SearchBardiv>
        <SearchButton as="button"  onClick={BrowseClick}> <img src="images/icon-search.png" srcSet="images/icon-search@2x.png 2x, images/icon-search@3x.png 3x"/></SearchButton>
        <Searchbar type={'text'} placeholder='Search Collections' />
      </SearchBardiv>
    </SearchDiv>
  );
 }

 function BrowseClick(e){
  e.preventDefault()
  return(window.location.assign("/artist"))
}

 export default Searchs;