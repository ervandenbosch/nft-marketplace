import Link from 'next/link'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faDiscord, faTelegram } from '@fortawesome/free-brands-svg-icons'  
import { injected } from './connectors'
import { useLoginState } from './provider'
import { useWeb3React } from '@web3-react/core'
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

export function Dropdown({closeAll, handleDark, handleProfileMenu, handleWallet}){
  const [open, setOpen] = useState(false)  
  const [dark, setDark] = useState(false)
  const [wallet, setWallet] = useState(false)
  const [selected, setSelected] = useState(false)

  const information = useLoginState()

  const { active, account, library, connector, activate, deactivate } = useWeb3React()

  async function connect() {
    try {
      await activate(injected)
    } catch (err) {
      console.log(err)
    }
  }

  const connectorWC = new WalletConnect({
    bridge: "https://bridge.walletconnect.org", // Required
    qrcodeModal: QRCodeModal
  });

  async function wcConnect() {
  // Check if connection is already established
    if (!connectorWC.connected) {
  // create new session
    connectorWC.createSession();
    connectorWC.on("connect", (_) =>
        window.location.reload());
      }
  }

async function disconnect(){
  if (connectorWC.connected) {
    // create new session
    connectorWC.killSession();
    connectorWC.on("disconnect", (_) =>
        window.location.reload());
      }
  }

  return (
    <div className={dark ? "dark" : '""'}>
    <div className="fixed top-[76px] right-0 z-99 flex flex-col justify-between text-left w-full lg2:border-blue-100 lg2:w-1/3 lg2:border-l-1 lg2:border-t lg2:drop-shadow-lg bg-white font-bold text-gray-600 dark:bg-gray-900 dark:text-gray-300 h-screen overflow-hidden">
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
          {(information.balanceWC !== undefined || information.balanceMM !== undefined) && <li className="pb-8 pl-10 lg:pl-6">
            <button onClick={handleWallet}>
              <b>Wallet</b>
            </button>
          </li>}
          <li className="pl-10 lg:pl-6">
            Night mode
            <button className="float-right pr-10" onClick={handleDark}>
            <FontAwesomeIcon icon={dark ? faToggleOn : faToggleOff } size="lg" color={dark ? 'gray-200' : 'gray-600'} />
          </button>
          </li>
         
          {information.metamaskAccount === undefined && information.walletconnectAccount === undefined && <li className="text-center px-10 lg:px-6 mt-10 w-full">
<button className="w-full font-bold bg-white border-2 text-left border-blue-400 mb-3 dark:bg-gray-100 rounded-md text-blue-400 dark:text-gray-900 py-3" onClick={connect}> <img src="https://i.ibb.co/9N5w2Hh/metamask.png" className="float-left inline-block mx-4" alt="metamask" width="25px" />Connect with MetaMask
          </button> 
          <button className="w-full font-bold text-left bg-white border-2 border-blue-400 dark:bg-gray-100 rounded-md text-blue-400 dark:text-gray-900 py-3" onClick={wcConnect}>  <img className="float-left inline-block mx-4" src="https://i.ibb.co/253FfLx/walletconnect.png" alt="walletconnect" width="25px" />  Connect with WalletConnect 
          </button></li>
          }
       
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
