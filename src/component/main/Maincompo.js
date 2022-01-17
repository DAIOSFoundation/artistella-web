import styled from "styled-components"

export const GridImage=styled.img`
    width:100%;
    min-width: 100px;
    height:100%;
    min-height: 100px;
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
`


export const ImageSummary = styled.p`
    font-size:0.875rem;
    color:#737170;
`


export const ImageHead = styled.p`
    font-size:1.25rem;
    font-weight:bold;
    color:black;
`


export const EleDiv = styled.div`
    background-color:white;
    border-radius:10px;
    overflow:hidden;
`


export const GridImgDiv = styled.div`
  width: 99%;
  height : 60%;
  overflow: hidden;
`
export const GridContent = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0px;
   *{
    margin-top: 10px;
  }
`


export function onEle(e){
  e.preventDefault();
  return (window.location.assign("/itemDetail"))
}