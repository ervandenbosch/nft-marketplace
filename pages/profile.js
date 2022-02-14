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

export default function Profile() {
  const [dark, setDark] = useState(false)
  const [nfts, setNfts] = useState([])
  const [sold, setSold] = useState([])
  const [collection, setCollection] = useState(true)
  const [created, setCreated] = useState(false)
  const [soldpage, setSoldpage] = useState(false)
  const [loadingState, setLoadingState] = useState('not-loaded')
  const [balance, setBalance] = useState(false)
  const [currentAccount, setCurrentAccount] = useState(null)
  const [connected, setConnected] = useState(true)

  const handleBalance = () => setBalance(!balance)
  const handleCollection = () => setCollection(!collection)
  const handleCreated = () => setCreated(!created)
  const handleSoldpage = () => setSoldpage(!soldpage)

  const information = useLoginState();

 const CopyAddress = (e) => {
    let address = e.target.value
    navigator.clipboard.writeText(address).then(function() {
      alert('Copied!');
  }, function() {
      alert('Copy error')
  });
} 
useEffect(() => {
  loadMyNFTs()
}, [])

async function loadMyNFTs() {
  setSoldpage(false)
  setCreated(false)
  setCollection(true)

  const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
    })
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
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

async function loadCreatedNFTs() {
  setCollection(false)
  setSoldpage(false)
  setCreated(true)
  const web3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: true,
  })
  const connection = await web3Modal.connect()
  const provider = new ethers.providers.Web3Provider(connection)
  const signer = provider.getSigner()

  const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
  const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
  const data = await marketContract.fetchItemsCreated()

  const items = await Promise.all(data.map(async i => {
    const tokenUri = await tokenContract.tokenURI(i.tokenId)
    const meta = await axios.get(tokenUri)
    let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
    let item = {
      price,
      tokenId: i.tokenId.toNumber(),
      seller: i.seller,
      owner: i.owner,
      sold: i.sold,
      image: meta.data.image,
      name: meta.data.name,
      description: meta.data.description
    }
    return item
  }))
  setNfts(items)
  setLoadingState('loaded') 
}

async function loadSoldNFTs() {
  setCollection(false)
  setCreated(false)
  setSoldpage(true)
  const web3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: true,
  })
  const connection = await web3Modal.connect()
  const provider = new ethers.providers.Web3Provider(connection)
  const signer = provider.getSigner()

  const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
  const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
  const data = await marketContract.fetchItemsCreated()

  const items = await Promise.all(data.map(async i => {
    const tokenUri = await tokenContract.tokenURI(i.tokenId)
    const meta = await axios.get(tokenUri)
    let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
    let item = {
      price,
      tokenId: i.tokenId.toNumber(),
      seller: i.seller,
      owner: i.owner,
      sold: i.sold,
      image: meta.data.image,
      name: meta.data.name,
      description: meta.data.description
    }
    return item
  }))
  /* create a filtered array of items that have been sold */
  const soldItems = items.filter(i => i.sold)
  setSold(soldItems)
  setLoadingState('loaded') 
}

return(
<div className={(dark ? "dark" : '" "') + ' min-h-screen bg-white pt-28'}><h1 className="text-gray-800 dark:text-gray-700 text-center text-3xl font-bold">Profile</h1>
  <div className="flex flex-col text-center m-auto">
{information.metamaskAccount !== undefined &&
<div className="text-center mt-6 dark:text-gray-800">
<button className="hover:cursor-pointer mt-2 rounded-xl border m-auto border-gray-800 w-[120px]" value={information.metamaskAccount} id="address" onClick={CopyAddress} >{information.metamaskAccount.substring(0,6).concat('...').concat(information.metamaskAccount.substring(39,42))}</button>
<p className="text-xs mt-1 text-gray-400 dark:text-gray-500">Click to Copy
</p></div>}
</div>
<div className="flex flex-row justify-center mt-10">
  <div className={'text-center w-[120px] text-gray-800 dark:text-gray-300 font-bold px-4 py-3 border border-r-0 border-b-0 rounded-tl-lg border-gray-500 hover:shadow-inner hover:cursor-pointer ' + (collection ? "bg-blue-100 dark:bg-gray-900" : "bg-white")} onClick={loadMyNFTs}>Collection</div>
  <div className={'text-center w-[120px] text-gray-800 dark:text-gray-500 font-bold px-4 py-3 border border-r-0 border-b-0 border-gray-400 hover:shadow-inner hover:cursor-pointer ' + (created ? "bg-blue-100 dark:bg-gray-900" : "bg-white")} onClick={loadCreatedNFTs} >Created</div>
  <div className={'text-center w-[120px] text-gray-800 dark:text-gray-500 font-bold px-4 py-3 border rounded-tr-lg border-b-0  border-gray-400 hover:shadow-inner hover:cursor-pointer ' + (soldpage ? "bg-blue-100 dark:bg-gray-900" : "bg-white")} onClick={loadSoldNFTs} >Sold</div>
</div>
<div className="">
{collection && loadingState === 'loaded' && !nfts.length &&
    <div className={(dark ? "dark" : '" "') + ' min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-400 pt-32'}><h1 className="text-gray-800 dark:text-gray-300 text-center py-10 text-3xl font-bold">No digital assets owned.</h1></div>}

{loadingState === 'not-loaded' && 
    <div className={(dark ? "dark" : '" "') + ' min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-400 pt-32'}>
    <h1 className="text-gray-800 dark:text-gray-300 text-center font-bold px-20 py-10 text-3xl">
     Loading..
   </h1>
   </div>}

{collection && loadingState === 'loaded' && nfts.length &&
<div className={(dark ? "dark" : '" "') + ' min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-600'}>
    <div className="flex flex-row justify-center">   
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
  }

{created && loadingState === 'loaded' && nfts.length && 
<div className={(dark ? "dark" : '" "') + ' min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-600'}>
            <div className="p-8" style={{ maxWidth: '1600px' }}>
        <div className="flex flex-wrap flex-cols-5 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 justify-center">
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
        }
{soldpage && loadingState === 'loaded' && sold.length &&
<div className={(dark ? "dark" : '" "') + ' min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-600'}>
            <div className="p-8" style={{ maxWidth: '1600px' }}>
        <div className="flex flex-wrap flex-cols-5 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 justify-center">
                {
                  sold.map((nft, i) => (
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
        }
</div>
</div>
)
}