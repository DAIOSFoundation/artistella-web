//https://www.codesmartly.codes/react/javascript/how-to-implement-table-pagination-react-table-v7/
import React from "react";
import styled from 'styled-components';

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
`
const LeftArrow=styled.div`
  background-color:white;
  width:30px;
  height:30px;
  content:url(images/itemDetail/icon-pagination-left.svg);
  border:solid 1px #dfd9ce;
  border-radius: 8px;
  color: #9c7e6a;
  padding:6px;
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