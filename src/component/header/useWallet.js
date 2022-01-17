import { useEffect, useState } from 'react'

export const useWallet = () => {
  const [walletAddress, setWalletAddress] = useState(null)

  // Actions
  const checkIfWalletIsConnected = async () => { // sol-web3.js library
    try {
      const { solana } = window

      if (solana) {
        if (solana.isPhantom) {
          const response = await solana.connect({ onlyIfTrusted: true })

          /*
           * Set the user's publicKey in state to be used later!
           */
          setWalletAddress(response.publicKey.toString())
        }
      } else {
        alert('Solana object not found! Get a Phantom Wallet 👻')
      }
    } catch (error) {
      console.error(error)
    }
  }

  const connectWallet = async () => {
    const { solana } = window

    if (solana) {
      const response = await solana.connect()
      setWalletAddress(response.publicKey.toString())
    }
  }

  // UseEffects
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