import React, { useRef, useEffect, useCallback } from 'react'
import { useWallet } from './useWallet';
import styled from 'styled-components'
import { MdClose } from 'react-icons/md' // icon

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalWrapper = styled.div`
    width: 500px;
    height: 550px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: grid;
    position: relative;
    z-index: 10;
    border-radius: 10px;
`

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height:1.8;
    color: #141414;

    h1{
        font-weight: bold;
        font-size: 2rem;
    }

    p{
        margin-bottom: 5vh;
    }

    button{
        height: 9%;
        width: 80%;
        padding: 10px 24px;
        background: #141414;
        color: #fff;
        border-radius: 5px;
        border: none;
        margin-bottom: 23px;
        font-size: 1rem;
        cursor: pointer;
    }
`

const CloseModalButton = styled(MdClose)` // react-icons
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`

export const SetUpModal = ({showModal, setShowModal, setWallet}) => {
    const { connectWallet } = useWallet();
    // const modalRef = useRef();

    // const closeModal = e => { // 모달 외부 클릭시 닫힘
    //     console.log(e);
    //     if(modalRef.current === e.target){
    //         setShowModal(false);
    //     }
    // };

    const keyPress = useCallback(e => { // esc 입력시 모달 닫힘
        if(e.key === 'Escape' && showModal){
            setShowModal(false);
        }
    }, [setShowModal, showModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress])

    return (
        <>
            {showModal ? (
                <Background>
                    <ModalWrapper showModal={showModal}>
                        <ModalContent>
                            <h1>Connect Wallet</h1>
                            <p>Select Wallet to Connect with ARTISTELLA</p>
                            <button onClick={() => connectWallet("phantom", setShowModal, setWallet)}>Phantom</button>
                            <button onClick={() => connectWallet("slope", setShowModal, setWallet)}>Slope</button>
                            <button onClick={() => connectWallet("solFlare", setShowModal, setWallet)}>SolFlare</button>
                        </ModalContent>
                        <CloseModalButton aria-label='Close modal' 
                            onClick={() => setShowModal(prev => !prev)}/>
                    </ModalWrapper>
                </Background>
            ) : null}   
        </>
    )
}