import React from 'react';
import styled from "styled-components"


const MenudivIn = styled.div`
    width: 20%;
    display: flex;
    align-items: center;
    font-size: 1rem;
`

const MenuDiv = styled.div`
    span{
        position: relative;

    }
    span::after{
            content:"";
            position: absolute;
            width: 0px;
            height: 3px;
            transition: all 0.2s ease-in-out;
            transition-duration: 0.3s;
            opacity: 0;
            background-color: black;
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