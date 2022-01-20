import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { useWallet } from './useWallet';
import { SetUpModal } from './SetUpModal';
import wallet from '../../images/icon-wallet.png'
import wallet2x from '../../images/icon-wallet@2x.png'
import wallet3x from '../../images/icon-wallet@3x.png'

const WalletD=styled.div`
    width: 90%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
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

    @media(max-width:1300px){
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
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev); //toggle
    }

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
                <EmptyDiv>Welcome!</EmptyDiv>
            ) : (
                <WalletD>
                    <Walletdiv onClick={openModal}>
                        <Icon_wallet>
                                <ImgWallet src={wallet} srcSet={{wallet2x,wallet3x}}/>
                        </Icon_wallet>
                        <ConnectDiv>
                            <span>Connect Wallet</span>
                        </ConnectDiv>
                    </Walletdiv>
                    <SetUpModal showModal={showModal} setShowModal={setShowModal}/>
                </WalletD>
            )}
        </Div>
    )
}


export default Wallet;