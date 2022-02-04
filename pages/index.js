import { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faShapes, faMountain, faTags } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faDiscord, faTelegram } from '@fortawesome/free-brands-svg-icons'  

export default function Home(){
const [dark, setDark] = useState(false)

return (
  <div className={(dark ? "dark" : '" "') + ' bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-600'}>
    <div className="pt-20 flex flex-row justify-between md:justify-center md:flex-wrap">
    <div className="flex flex-col md:text-center flex-none w-2/5 md:w-2/3 ml-10 md:ml-0 mt-20 md:mt-10">
      <h1 className="font-bold text-5xl lg:text-4xl text-gray-800  dark:text-gray-300">
        Discover, collect, and sell extraordinary NFTs</h1><br />
      <h2 className="text-2xl text-gray-800 dark:text-gray-300 pr-4">NFTz is the most notorious NFT marketplace on the web</h2>
      <div className="flex flex-cols-2 mt-10 md:justify-center">
        <Link href="./marketplace">
          <button className="bg-blue-400 dark:bg-gray-100 rounded-xl text-white dark:text-gray-900 w-1/3 p-2">
            Explore </button></Link>
        <Link href="./create-item"><button className="border-2 border-blue-400 dark:border-gray-200 bg-white dark:bg-gray-900 rounded-xl text-blue-400 dark:text-gray-200 w-1/3 ml-4 p-2">Create NFT
        </button></Link>
      </div>
    </div>
    <div className="mr-6 md:mr-0 mt-20 w-1/2 md:w-4/5 max-h-500">
      <img src="https://cdn.vox-cdn.com/thumbor/KMraJbkqzbkEAUuTqU5Tvt_1So4=/0x0:3000x3000/1820x1213/filters:focal(1260x1260:1740x1740):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/68948366/2021_NYR_20447_0001_001_beeple_everydays_the_first_5000_days034733_.0.jpg" alt="home_nft" className="rounded-lg" />
    </div>
  </div>
  <div className="mt-20">
      <h2 className="text-center font-bold text-3xl text-gray-800 dark:text-gray-200">
        Notable Drops
      </h2>
      <div className="flex flex-rows-2 justify-center flex-wrap mt-10">
      <div className="flex flex-col border shadow-xl rounded-xl overflow-hidden max-w-xs m-5">
              <img src="https://static01.nyt.com/images/2021/03/11/arts/11nft-auction3/merlin_184196610_cd2f1557-7871-4004-bca0-004ee1f1f7d6-superJumbo.jpg?quality=75&auto=webp" alt="drops" />
              <div className="flex flex-col bg-black h-full place-content-center p-6">
                <p className="text-1xl font-bold text-white text-center">A detail from “Everydays — The First 5000 Days” by Beeple</p>
              </div>
            </div>
            <div className="flex flex-col border shadow rounded-xl overflow-hidden max-w-xs m-5">
              <img src="https://static01.nyt.com/images/2021/03/11/arts/11nft-auction4/merlin_184196712_6ff72329-5e5a-441d-886b-98912b4550f6-superJumbo.jpg" alt="drops"  />
              <div className="flex flex-col bg-black h-full place-content-center p-6">
                <p className="text-1xl font-bold text-white text-center">Another image incorporated into “Everydays — The First 5000 Days.”</p>
              </div>
            </div>
            <div className="flex flex-col border shadow-xl rounded-xl overflow-hidden max-w-xs m-5">
              <img src="https://static01.nyt.com/images/2021/03/11/arts/11nft-auction-cryptopunks2/11nft-auction-cryptopunks2-jumbo.jpg?quality=75&auto=webp" alt="drops"  />
              <div className="flex flex-col bg-black h-full place-content-center p-6">
                <div className="text-1xl font-bold text-white text-center">“CryptoPunk 6965,” also known as “Ape, Fedora.”</div>
              </div>
            </div>
            <div className="flex flex-col border shadow rounded-xl overflow-hidden max-w-xs m-5">
              <img src="https://static01.nyt.com/images/2021/03/12/arts/11nft-auction-cryptopunks-print/11nft-auction-cryptopunks-print-jumbo.jpg?quality=75&auto=webp" alt="drops" />
              <div className="flex flex-col bg-black h-full place-content-center p-6">
                <p className="text-1xl font-bold text-white text-center">“CryptoPunk 7804” sold on Wednesday for the equivalent of about $7.6 million.</p>
              </div>
            </div>
            </div>
    </div>
    <div className="mt-20">
      <h2 className="text-center font-bold text-3xl text-gray-800 dark:text-gray-200">
      Create and sell your NFTs
      </h2>
      <div className="my-10 flex flex-cols-2 flex-rows-2 justify-around lg:flex-wrap">
<div className="max-w-xs text-center">
<FontAwesomeIcon icon={faWallet} size="2x" className="p-2 dark:text-cyan-400 text-blue-500" />
 <p className="font-bold p-2 dark:text-gray-100">Set up your wallet</p>
 <p className="p-2 dark:text-gray-300">
  Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support.
  </p>
  </div>
  <div className="max-w-xs text-center">
<FontAwesomeIcon icon={faShapes} size="2x" className="p-2 dark:text-cyan-400 text-blue-500" />
 <p className="font-bold p-2 dark:text-gray-100">Create collection</p>
 <p className="p-2 dark:text-gray-300">
 Click <Link href="./my-assets"><a className="font-bold text-blue-500 dark:text-blue-600">My Collections</a></Link> and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.
  </p>
</div>
<div className="max-w-xs text-center">
<FontAwesomeIcon icon={faMountain} size="2x" className="p-2 dark:text-cyan-400 text-blue-500" />
 <p className="font-bold p-2 dark:text-gray-100">Add your NFTs</p>
 <p className="p-2 dark:text-gray-300"> <Link href="./create-item"><a className="font-bold text-blue-500 dark:text-blue-600">Upload</a></Link> your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.
  </p>
</div>
<div className="max-w-xs text-center">
<FontAwesomeIcon icon={faTags} size="2x" className="p-2 dark:text-cyan-400 text-blue-500" />
 <p className="font-bold p-2 dark:text-gray-100">List your item</p>
 <p className="p-2 dark:text-gray-300"> Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!
  </p>
</div>
      </div>
    </div>
    <div className="my-20 text-center">
      <Link href="./marketplace">
      <button className="bg-blue-500 text-white dark:bg-gray-300 dark:text-gray-900 p-4 rounded-xl">
        Explore the Marketplace
      </button></Link>
    </div>
    <div className="bg-blue-500 dark:bg-gray-900 pt-8 text-center text-white">
      <h2 className="font-bold text-2xl mb-2">Stay in the loop</h2>
<div className="my-5 w-4/5 m-auto">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea
</div>
<div className="flex flex-row my-6 justify-center">
  <div className="w-1/3 text-left pl-2 border-b hover:border dark:border-none rounded-lg font-bold bg-white dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-400">
    <input type="text" placeholder="Your email address" className="py-2 bg-transparent outline-none" /></div>
  <button className="bg-blue-500 rounded-lg px-2 ml-2 text-white">Sign up</button>
    </div>
    <div className="bg-blue-500 dark:bg-gray-900 py-6 text-center">
      <h2 className="font-bold text-2xl mb-4">Join the community</h2>
  <FontAwesomeIcon icon={faTwitter} size="2x" className="p-2 text-white" />
<FontAwesomeIcon icon={faDiscord} size="2x" className="p-2 text-white" />
<FontAwesomeIcon icon={faTelegram} size="2x" className="p-2 text-white" />
    </div>
    </div>
</div>
)
}