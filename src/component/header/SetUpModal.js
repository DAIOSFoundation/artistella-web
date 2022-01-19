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
        font-size: 1.2rem;
        cursor: pointer;
        text-align: lieft;

        img{
            width: 23px;
            height: 23px;
            margin: 0 10px 0 0;
            vertical-align: middle;
            float: left;
        }
        span{
            margin-left: -18px;
        }
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
                            <button onClick={() => connectWallet("phantom", setShowModal, setWallet)}>
                                <img src="https://www.gitbook.com/cdn-cgi/image/width=40,height=40,fit=contain,dpr=2,format=auto/https%3A%2F%2Fdocs.phantom.app%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-28427.appspot.com%2Fo%2Fspaces%252F-MVOiF6Zqit57q_hxJYp%252Favatar-1615495356537.png%3Fgeneration%3D1615495356841399%26alt%3Dmedia"/>
                                <span>Phantom</span>
                            </button>
                            <button onClick={() => connectWallet("slope", setShowModal, setWallet)}>
                                <img src="https://www.gitbook.com/cdn-cgi/image/width=40,height=40,fit=contain,dpr=2,format=auto/https%3A%2F%2Fdocs.slope.finance%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-MlOlWuD8X-mIrzvVU3W%252Ficon%252FQ8tdcABNleXu7Spqfdqy%252F222.png%3Falt%3Dmedia%26token%3D3f599864-00d3-4b53-8fe3-0b1f93d2bec4"/>
                                <span>Slope</span>
                            </button>
                            <button onClick={() => connectWallet("solFlare", setShowModal, setWallet)}>
                                <img src="https://www.gitbook.com/cdn-cgi/image/width=40,height=40,fit=contain,dpr=2,format=auto/https%3A%2F%2Fdocs.solflare.com%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-Mgv3_8586v0mVL4zZax%252Ficon%252FWvDTo0Kodwa4awPEQrsO%252Fflarelogo.png%3Falt%3Dmedia%26token%3Db115a1f0-a543-4a49-828a-e3ede684055e"/>
                                <span>SolFlare</span>
                            </button>
                        </ModalContent>
                        <CloseModalButton aria-label='Close modal' 
                            onClick={() => setShowModal(prev => !prev)}/>
                    </ModalWrapper>
                </Background>
            ) : null}   
        </>
    )
}