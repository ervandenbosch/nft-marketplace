import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"

import {
  nftmarketaddress, nftaddress
} from '../config'

import Market from '../artifacts/contracts/Market.sol/NFTMarket.json'
import NFT from '../artifacts/contracts/NFT.sol/NFT.json'

import { useLoginState } from '../components/provider'

export default function MyAssets() {
  const [dark, setDark] = useState(false)
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')

  const information = useLoginState();

  useEffect(() => {
    loadNFTs()
  }, [])
  async function loadNFTs() {
  const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
    })
    if(information.walletconnectAccount !== undefined){
      var connection = await web3Modal.connectTo("walletconnect");
      console.log(connection)
      var provider = new providers.Web3Provider(connection);
      console.log(provider)
    } else if(information.metamaskAccount){ 
      var provider = new ethers.providers.Web3Provider(window.ethereum)
    } else {
      return;
    }
    const signer = provider.getSigner()

    const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
    const data = await marketContract.fetchMyNFTs()

    const items = await Promise.all(data.map(async i => {
      const tokenUri = await tokenContract.tokenURI(i.tokenId)
      const meta = await axios.get(tokenUri)
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description
      }
      return item
    }))
    setNfts(items)
    setLoadingState('loaded') 
  }
  if (loadingState === 'loaded' && !nfts.length) return (
  <div className={(dark ? "dark" : '" "') + ' min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-400 pt-32'}><h1 className="text-gray-800 dark:text-gray-300 text-center py-10 text-3xl font-bold">No digital assets owned.</h1></div>
  )
  else if(loadingState === 'not-loaded') return (
<div className={(dark ? "dark" : '" "') + ' min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-400'}>
     <h1 className="text-gray-800 dark:text-gray-300 text-center font-bold px-20 pt-32 text-3xl">
      Not loading.
    </h1>
    </div>
  )
  return (
<div className={(dark ? "dark" : '" "') + ' min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-600'}>
    <div className="pt-20 flex flex-row justify-center">   
     <div className="p-8" style={{ maxWidth: '1600px' }}>
     <div className="flex flex-wrap flex-cols-5 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
       {
            nfts.map((nft, i) => (
              <div key={i} className="w-64 border rounded-xl overflow-hidden xs:w-48">
                <img src={nft.image} className="rounded h-64 mx-auto xs:h-48" />
                <div className="flex flex-col p-3 bg-white dark:bg-gray-900 border-t">
                  <div className="flex flex-row justify-between text-2xl xs:text-lg font-semibold dark:text-white"> {nft.name}  
                  <div className="text-right text-xs font-bold text-gray-500 dark:text-white">Last <br /><div className="flex flex-row text-black pt-1">
                  <span className="pr-1"> <img src="https://tinyimg.io/i/qd3GlMi.png" width="20px" /></span>{nft.price} 
        </div></div></div>
                  <div className="text-gray-400 dark:text-white xs:text-xs">{nft.description}
                  </div>
                </div>
                </div>
                
            ))
          }
        </div>
      </div>
    </div>
    </div>
  )
}