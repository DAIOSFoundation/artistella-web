import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { useWallet } from './useWallet'

const WalletD=styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        cursor:pointer;
    }
`

const Icon_wallet=styled.div`
    width: 30px;
    height: 30px;
    margin-right: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ConnectDiv=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width:1300px ){
        display: none;
    }
    span {
        width: auto;
        font-size: 0.9rem;
        }
`

const ImgWallet = styled.img`
    width: 20px;
    height: 20px;
    @media(max-width:1300px ){

        width: 30px;
        height: 30px;
    }
`

const Walletdiv = styled.div`
    width: 170px;
    display: flex;
    align-items: center;
    justify-content : center;
    border-radius: 6px;
    border: solid 1px #252220;
    background-color: #fff;
    padding: 5px;
    margin-left: 5px;

    @media(max-width:1300px ){
        border: none;
    }
`
const Div = styled.div`
    width: 100%;
`
const EmptyDiv = styled.div`
    width: 0%;
`


function Wallet(){
    const { walletAddress, connectWallet } = useWallet();
    const [ isWallet, setWallet ] = useState(false);

    useEffect(() => {
        
        if (walletAddress) {
          //setAddress(walletAddress)
          console.log(walletAddress);
          setWallet(true);
        }
        
      }, [walletAddress])
    
    return (    
        <Div>
            {isWallet ? (
                <EmptyDiv/>
            ) : (
                <WalletD>
                    <Walletdiv>
                        <Icon_wallet>
                            <ImgWallet src="images/icon-wallet.png" srcSet="images/icon-wallet@2x.png 2x, images/icon-wallet@3x.png 3x"/>
                        </Icon_wallet>
                        <ConnectDiv onClick={connectWallet}>
                            <span>Connect Wallet</span>
                        </ConnectDiv>
                    </Walletdiv>
                </WalletD>
            )}
        </Div>
    )
}


export default Wallet;