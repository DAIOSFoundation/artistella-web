import React from 'react';
import styled from "styled-components"


const MenudivIn = styled.div`
    padding: 10px;
    height: 50%;
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-family: 'Roboto';
`

const MenuDiv = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;

    &:hover{
        cursor: pointer;
    }

    span{
        width: auto;
        height: auto;
        display: flex;
        position: relative;

    }
    span::after{
            content:"";
            position: absolute;
            width: 0px;
            height: 3px;
            transition: all 0.2s ease-in-out;
            transition-duration: 0.3s;
            bottom: -5px;
            opacity: 0;
            background-color: #fbac00;
        }

        span:hover:after{
            width: 100%;
            opacity: 1;
            }
`

function MenuIn({child}) {
    return(
        <MenudivIn>
            <MenuDiv>
                <span>{child}</span>
            </MenuDiv>
        </MenudivIn>)
}


export default MenuIn;