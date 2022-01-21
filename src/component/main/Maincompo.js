import styled from "styled-components"

export const GridImage=styled.img`
    width:100%;
    height:230px;
    min-width: 100px;
    min-height: 100px;
    object-fit:cover;
`

export const Price = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: black;
  padding-top: 10px;
`


export const ImageHead_s=styled.p`
  font-size:1.5rem;
  color:black;
  white-space:nowrap;
  text-overflow:ellipsis;
  overflow:hidden;
`

export const ImageSummary = styled.div`
    font-size:0.875rem;
    color:#737170;
    max-height:44px;
    display: -webkit-box;
    -webkit-line-clamp:3;
    -webkit-box-orient: vertical;
    overflow:hidden;  
`


export const ImageHead = styled.p`
    font-size:1.25rem;
    font-weight:bold;
    color:black;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
`


export const EleDiv = styled.div`
    background-color:white;
    border-radius:10px;
    overflow:hidden;
`

export const GridImgDiv = styled.div`
  width: 99%;
`
export const GridContent = styled.div`
  width: 80%;
  height: 100px;
  margin: 10px 0px;
   *{
    margin-top: 10px;
  }
`


export function onEle(e){
  e.preventDefault();
  return (window.location.assign("/itemlist"))
}
