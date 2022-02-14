import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import { useLoginState } from '../components/provider'
import {
  nftaddress, nftmarketaddress
} from '../config'

import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/Market.sol/NFTMarket.json'

export default function Marketplace() {
  const [dark, setDark] = useState(false)
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')

  const information = useLoginState()
  var search = information.search

  useEffect(() => {
    loadNFTs()
  }, [search])

  async function loadNFTs() {
    /* create a generic provider and query for unsold market items */
    const provider = new ethers.providers.JsonRpcProvider("https://rpc-mumbai.matic.today")
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
    <div className={(dark ? "dark" : '" "') + ' min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-400'}>
    <h1 className="text-gray-800 dark:text-gray-300 text-center font-bold px-20 pt-32 text-3xl">No items in marketplace yet..</h1></div>
  )  
  else if (loadingState === 'not-loaded') return (
    <div className={(dark ? "dark" : '" "') + ' min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-400'}>
    <h1 className="text-gray-800 dark:text-gray-300 text-center font-bold px-20 pt-32 text-3xl">
     Loading...
   </h1>
   </div>
  ) 
  else if (loadingState === 'loaded' && nfts.length) {
let nftsFilter = nfts.filter(nft => nft.name.toLowerCase().includes(search.toLowerCase()));
if(nftsFilter.length === 0) {
  return (
    <div className={(dark ? "dark" : '" "') + ' min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-400'}>
    <h1 className="text-gray-800 dark:text-gray-300 text-center font-bold px-20 pt-32 text-3xl">
     No matches..
   </h1>
   </div>
) 
} else {
  return (
    <div className={(dark ? "dark" : '" "') + ' bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-600 min-h-screen'}>  <div className=" pt-20 mb-10 flex justify-center">
      <div className="p-4" style={{ maxWidth: '1600px' }}>
        <div className="flex flex-wrap flex-cols-5 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 justify-center">
          {
            nftsFilter.map((nft, i) => (
              <button onClick={() => buyNft(nft)}>
              <div key={i} className="w-64 border border-slate-300 dark:border-slate-800 bg-white dark:bg-gray-900 shadow-md hover:shadow-xl rounded-xl overflow-hidden xs:w-48">
                <img src={nft.image} className="h-64 mx-auto xs:h-48" />
                <div className="flex flex-row justify-between border-t">
                  <div className="flex flex-col p-3">
                  <p className="text-left text-2xl xs:text-lg font-semibold dark:text-white">{nft.name}</p>
                  <div style={{overflow: 'hidden' }}>
                    <p className="text-left pl-1 text-gray-400 dark:text-white xs:text-xs">{nft.description}</p>
                  </div>
                  </div>
                <div className="p-2 mt-1 text-sm text-right dark:text-white">
                  Price
                  <div className="flex flex-row text-black font-bold pt-1">
                  <span className="pr-1"> <img src="https://tinyimg.io/i/qd3GlMi.png" width="20px" /></span>{nft.price} 
        </div>
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
 }

return (
    <div className={(dark ? "dark" : '" "') + ' bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-600 min-h-screen'}>  <div className="pt-20 mb-10 flex justify-center">
      <div className="p-4" style={{ maxWidth: '1600px' }}>
        <div className="flex flex-wrap flex-cols-5 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 justify-center">
          {
            nfts.map((nft, i) => (
              <button onClick={() => buyNft(nft)}>
              <div key={nft} className="w-64 border border-slate-300 dark:border-slate-800 bg-white dark:bg-gray-900 shadow-md hover:shadow-xl rounded-xl overflow-hidden xs:w-48">
                <img src={nft.image} className="h-64 mx-auto xs:h-48" />
                <div className="flex flex-row justify-between border-t">
                  <div className="flex flex-col p-3 dark:bg-">
                  <p className="text-2xl xs:text-lg font-semibold dark:text-white">{nft.name}</p>
                  <div style={{overflow: 'hidden' }}>
                    <p className="text-gray-400 dark:text-white xs:text-xs">{nft.description}</p>
                  </div>
                  </div>
                <div className="p-2 text-sm text-right dark:text-white">
                  Price
     <div><FontAwesomeIcon icon={faEthereum} className="px-2 text-black" size="lg"/><span className="text-lg xs:text-sm py-1 font-bold text-gray-800 dark:text-white">{nft.price} </span></div>
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