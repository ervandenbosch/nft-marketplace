import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'

import {
  nftaddress, nftmarketaddress
} from '../config'

import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/Market.sol/NFTMarket.json'

export default function Marketplace() {
  const [dark, setDark] = useState(false)
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')
  useEffect(() => {
    loadNFTs()
  }, [])
  async function loadNFTs() {
    /* create a generic provider and query for unsold market items */
    const provider = new ethers.providers.JsonRpcProvider("https://rpc-mumbai.maticvigil.com")
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
    const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, provider)
    const data = await marketContract.fetchMarketItems()
    
    /*
    *  map over items returned from smart contract and format 
    *  them as well as fetch their token metadata
    */
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
        description: meta.data.description,
      }
      return item
    }))
    setNfts(items)
    setLoadingState('loaded') 
  }
  async function buyNft(nft) {
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)

    /* user will be prompted to pay the asking proces to complete the transaction */
    const price = ethers.utils.parseUnits(nft.price.toString(), 'ether')   
    const transaction = await contract.createMarketSale(nftaddress, nft.tokenId, {
      value: price
    })
    await transaction.wait()
    loadNFTs()
  }
  if (loadingState === 'loaded' && !nfts.length) return (
    <div className={(dark ? "dark" : '" "') + ' min-h-screen mt-20 bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-400'}>
    <h1 className="text-gray-800 dark:text-gray-300 text-center font-bold px-20 py-10 text-3xl">No items in marketplace yet..</h1></div>
  )  
  else if (loadingState === 'not-loaded') return (
    <div className={(dark ? "dark" : '" "') + ' min-h-screen mt-20 bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-400'}>
    <h1 className="text-gray-800 dark:text-gray-300 text-center font-bold px-20 py-10 text-3xl">
     Loading...
   </h1>
   </div>
  )
  return (
    <div className={(dark ? "dark" : '" "') + ' bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-600 min-h-screen'}>  <div className=" pt-24 mb-10 flex justify-center">
      <div className="p-4" style={{ maxWidth: '1600px' }}>
        <div className="flex flex-wrap flex-cols-5 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 justify-center">
          {
            nfts.map((nft, i) => (
              <button onClick={() => buyNft(nft)}>
              <div key={i} className="w-64 border bg-white dark:bg-gray-900 hover:shadow rounded-xl overflow-hidden ">
                <img src={nft.image} className="h-64 mx-auto" />
                <div className="flex flex-row justify-between border-t">
                  <div className="flex flex-col p-3 dark:bg-">
                  <p className="text-2xl font-semibold dark:text-white">{nft.name}</p>
                  <div style={{overflow: 'hidden' }}>
                    <p className="text-gray-400 dark:text-white">{nft.description}</p>
                  </div>
                  </div>
                <div className="p-2 text-sm text-right dark:text-white">
                  Price
     <div><FontAwesomeIcon icon={faEthereum} className="px-2 text-black" size="lg"/><span className="text-lg py-1 font-bold text-gray-800 dark:text-white">{nft.price} </span></div>
                </div>
              </div>
              </div>
              </button>
            ))
          }
        </div>
      </div>
    </div>
    </div>
  )
}