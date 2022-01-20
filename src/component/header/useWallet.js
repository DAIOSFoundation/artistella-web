import { useEffect, useState } from 'react'

export const useWallet = () => {
  const [walletAddress, setWalletAddress] = useState(null)

  useEffect(() =>
    console.log(walletAddress)
  , [walletAddress]);

  // Actions
  const checkIfWalletIsConnected = async () => { // sol-web3.js library
    try {
      const { solana, Slope, solflare } = window

      if (solana.isPhantom) {
        const response = await solana.connect({ onlyIfTrusted: true })
        setWalletAddress(response.publicKey.toString())
      }  else if(Slope){
        const slope = new window.Slope()
        const { msg, data } = await slope.connect();
        setWalletAddress(data.publicKey.toString())
      } else if(solflare.isSolflare) {
        await solflare.connect({ onlyIfTrusted: true })
        setWalletAddress(solflare.publicKey.toString())
      }
      else {
        alert('Solana object not found! Get a Wallet 🤑')
      }
    } catch (error) {
      console.error(error)
    }
  }

  const connectWallet = async (walletType, setShowModal, setWallet) => {
    const { solana, Slope, solflare } = window
    
    if (solana || Slope || solflare) {
      if(walletType === "phantom"){
        if(solana){
          const response = await solana.connect();
          if(response.publicKey){
            setWalletAddress(response.publicKey.toString())
            setWallet(true) // Welcome
            setShowModal(false); // Modal Close
          }
        }
      } else if(walletType === "slope"){
          const slope = new window.Slope()
          const { msg, data } = await slope.connect();
          if(msg === "ok"){
            setWalletAddress(data.publicKey.toString())
            setWallet(true)
            setShowModal(false); // Modal Close
          }
      } else if(walletType === "solFlare"){
        if(solflare){
          await solflare.connect();
          if(solflare.publicKey){
            setWalletAddress(solflare.publicKey.toString())
            setWallet(true)
            setShowModal(false); // Modal Close
          }
        }
      }
    }
  }

  //UseEffects
  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected()
    }
    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [])

  return {
    walletAddress,
    connectWallet,
  }
}