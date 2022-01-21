import styled from 'styled-components';
import search from  '../../images/icon-search.png'
import search2x from  '../../images/icon-search@2x.png'
import search3x from  '../../images/icon-search@3x.png'

const Searchbar = styled.input`
  border : none;
  width: 80%;
  font-size : 1rem;
  :focus {
    outline : none;
  }
`
const SearchButton=styled.div`
  border: none;
  width: 5%;
  margin: 0 10px;
  display:flex;
  align-items:center;
  justify-content: center;
  background-color: white;

  &:hover{
    cursor: pointer;
  }
`
const SearchDiv=styled.div`
  margin-top: 4px;
  width : 70%;
  height: 40%;
  display:flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

  const SearchBardiv = styled.div`
    width : 90%;
    height: 40px;
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
        <SearchButton as="button"> <img src={search} srcSet={{search2x,search3x} }/></SearchButton>
        <Searchbar type={'text'} placeholder='Search Collections' />
      </SearchBardiv>
    </SearchDiv>
  );
 }


 export default Searchs;