import React, { useRef, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'

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
    width: 800px;
    height: 500px;
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

    p{
        margin-bottom: 1rem;
    }

    button{
        padding: 10px 24px;
        background: #141414;
        color: #fff;
        border: none;
    }
`

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`

export const SetUpModal = ({showModal, setShowModal}) => {
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
                            <h1>Lorem Ipsum</h1>
                            <p>description</p>
                            <button>Button</button>
                        </ModalContent>
                        <CloseModalButton aria-label='Close modal' 
                            onClick={() => setShowModal(prev => !prev)}/>
                    </ModalWrapper>
                </Background>
            ) : null}   
        </>
    )
}