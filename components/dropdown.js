import Link from 'next/link'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'
import { useWeb3React } from "@web3-react/core"
import { faTwitter, faDiscord, faTelegram } from '@fortawesome/free-brands-svg-icons'  
import { injected } from './connectors'
import { useLoginState } from './provider'

export function Dropdown({closeAll, handleDark, handleProfileMenu, handleWallet}){
  const [open, setOpen] = useState(false)  
  const [dark, setDark] = useState(false)
  const [wallet, setWallet] = useState(false)
  const [selected, setSelected] = useState(false)
  const [connected, setConnected] = useState()
 
  const { active, account, library, connector, activate, deactivate } = useWeb3React()

  const information = useLoginState()
  console.log(information);

  async function connect() {
    setConnected(true);
    try {
      await activate(injected)
    } catch (err) {
      console.log(err)
    }
    
  }


  return (
    <div className={dark ? "dark" : '""'}>
    <div className="fixed top-[76px] right-0 z-99 flex flex-col text-left w-full lg2:border-blue-100 lg2:w-1/3 lg2:border-l-1 lg2:border-t lg2:drop-shadow-lg bg-white font-bold text-gray-600 dark:bg-gray-900 dark:text-gray-300">
      <div className="relative mt-6 min-h-screen overflow:auto">
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
          <Link href="./profile">
            <a  onClick={handleProfileMenu}>
              Profile
            </a>
          </Link>
          </li>
          {information.balance !== undefined && <li className="pb-8 pl-10 lg:pl-6">
            <button onClick={handleWallet}>
              <b>Wallet</b>
            </button>
          </li>}
          <li className="pl-10 lg:pl-6">
            Night mode
            <button className="fixed right-5" onClick={handleDark}>
            <FontAwesomeIcon icon={dark ? faToggleOn : faToggleOff } size="lg" color={dark ? 'gray-200' : 'gray-600'} />
          </button>
          </li>
          <li className="p-8 text-center">
          {information.balance === undefined && <button className="bg-blue-400 dark:bg-gray-100 rounded-xl text-white dark:text-gray-900 w-full p-2" onClick={connect}>
            Connect wallet
          </button> }
        </li>
          </ul>
          </div>
    <div className="bg-white flex flex-row justify-center w-full lg2:w-1/3 border-t border-gray-200 fixed bottom-0 py-8">
  <FontAwesomeIcon icon={faTwitter} size="2x" className="px-3 text-blue-500" />
 <FontAwesomeIcon icon={faDiscord} size="2x" className="px-3 text-blue-500" />
<FontAwesomeIcon icon={faTelegram} size="2x" className="px-3 text-blue-500" />
    </div>
    </div>
</div>
  )
}
