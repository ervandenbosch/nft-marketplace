import Link from 'next/link'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'
import { useWeb3React } from "@web3-react/core"
import { faTwitter, faDiscord, faTelegram } from '@fortawesome/free-brands-svg-icons'  
import { injected } from './connectors'
import { useLoginState } from './provider'
import WalletConnect from "@walletconnect/client"
import QRCodeModal from "@walletconnect/qrcode-modal";

export function Dropdown({closeAll, handleDark, handleProfileMenu, handleWallet}){
  const [open, setOpen] = useState(false)  
  const [dark, setDark] = useState(false)
  const [wallet, setWallet] = useState(false)
  const [selected, setSelected] = useState(false)
  const [connected, setConnected] = useState()

  const information = useLoginState()
  console.log(information);

  // Create a connector
const connector = new WalletConnect({
  bridge: "https://bridge.walletconnect.org", // Required
  qrcodeModal: QRCodeModal,
});

  async function connect() {
    setConnected(true);
    try {
      await activate(injected)
    } catch (err) {
      console.log(err)
    }
    
  }

  async function walletConnect() {
    if (!connector.connected) {
      // create new session
      connector.createSession();
    }
  }

  return (
    <div className={dark ? "dark" : '""'}>
    <div className="fixed top-[76px] right-0 z-99 flex flex-col justify-between text-left w-full lg2:border-blue-100 lg2:w-1/3 lg2:border-l-1 lg2:border-t lg2:drop-shadow-lg bg-white font-bold text-gray-600 dark:bg-gray-900 dark:text-gray-300 h-screen overflow-auto">
      <div className="mt-6">
      <ul>
      <li className="pb-8 pl-10 lg:pl-6"><Link href="./marketplace">
            <a onClick={closeAll}>
              Marketplace
            </a>
          </Link></li>
      <li className="pb-8 pl-10 lg:pl-6"><Link href="./create-item">
            <a onClick={closeAll}>
              Create & sell NFT
            </a>
          </Link></li>
          <li className="pb-8 pl-10 lg:pl-6">
          <Link href="./#how-to">
            <a  onClick={closeAll}>
              Resources
            </a>
          </Link></li>
          <li className="pb-8 pl-10 lg:pl-6">
            <button className="font-bold" onClick={handleProfileMenu}>
              Profile
            </button>
          </li>
          {information.balance !== undefined && <li className="pb-8 pl-10 lg:pl-6">
            <button onClick={handleWallet}>
              <b>Wallet</b>
            </button>
          </li>}
          <li className="pl-10 lg:pl-6">
            Night mode
            <button className="absolute right-6" onClick={handleDark}>
            <FontAwesomeIcon icon={dark ? faToggleOn : faToggleOff } size="lg" color={dark ? 'gray-200' : 'gray-600'} />
          </button>
          </li>
         
          {information.balance === undefined &&  <li className="p-8 text-center"><button className="bg-blue-400 dark:bg-gray-100 rounded-xl text-white dark:text-gray-900 w-full p-2" onClick={connect}>
            Connect wallet
          </button>
          <button className="bg-blue-400 dark:bg-gray-100 rounded-xl text-white dark:text-gray-900 w-full p-2 mt-4" onClick={walletConnect}>
            WalletConnect
            </button> 
            </li> }
       
          </ul>
          
          </div>
  
    <div className="bg-white dark:bg-gray-900 border-t border-gray-200 mb-16 py-8 w-full text-center">
  <FontAwesomeIcon icon={faTwitter} size="2x" className="px-3 text-blue-500 dark:text-white" />
 <FontAwesomeIcon icon={faDiscord} size="2x" className="px-3 text-blue-500 dark:text-white" />
<FontAwesomeIcon icon={faTelegram} size="2x" className="px-3 text-blue-500  dark:text-white" />
    </div>
    </div>
</div>
  )
}
