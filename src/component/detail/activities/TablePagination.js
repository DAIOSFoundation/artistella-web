//https://www.codesmartly.codes/react/javascript/how-to-implement-table-pagination-react-table-v7/
import React from "react";
import styled from 'styled-components';
import lefticon from "../../../images/itemDetail/icon-pagination-left.svg";

const Styles = styled.div`
  .navigationButtonsContainer{
    display:flex;
    align-items:center;
  }

  li{
    width:24px;
    height:24px;
    text-align:center;
    padding-top:5px;
    color:black;
    font-size:1rem;
    &:hover{
      cursor: pointer;
    }
  }

  li:nth-child(${props=>props.Current}){
    background-color:#c6b2a4;
    color:white;
    border-radius:8px;
  }

`

const RightArrow=styled.div`
  background-color:white;
  width:30px;
  height:30px;
  content:url(images/itemDetail/icon-pagination-right.svg);
  border:solid 1px #dfd9ce;
  border-radius: 8px; 
  color: #9c7e6a;
  padding:6px;
  &:hover{
    cursor: pointer;
  }
`
const LeftArrow=styled.div`
  background-color:white;
  width:30px;
  height:30px;
  content:url();
  border:solid 1px #dfd9ce;
  border-radius: 8px;
  color: #9c7e6a;
  padding:6px;
  &:hover{
    cursor: pointer;
  }
`

const Img = styled.img`
  width: 100px;
  height: 100px;
`

const TablePagination = (props) => {
    function onCurrent({index}){ 
      props.gotoPage(index)
    }

    return (
        <Styles Current={props.pageIndex+1}>
            <div className="navigationButtonsContainer">
          <LeftArrow
                    onClick={props.previousPage}
                    disabled={!props.canPreviousPage}
          >
            <Img scr={lefticon} />
                </LeftArrow>
                <ul style={{ display: "flex" }}>
                    {
                        props.pageOptions.map((index, page) => {
                            return <li onClick={()=>{onCurrent({index})}} key={index}>{page + 1}</li>
                        })}
                </ul>
                <RightArrow
                    onClick={
                        props.nextPage
                    }
            disabled={!props.canNextPage}
              >
            
                </RightArrow>
            </div>
        </Styles>
    );
}

export default TablePagination;