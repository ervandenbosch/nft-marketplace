import '../styles/globals.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import { useWeb3React } from "@web3-react/core"
import Web3 from 'web3'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faMoon, faSun, faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'
import { Dropdown } from './dropdown'
import { Wallet } from './wallet'
import { Footer } from './footer'
import { Searchbar } from './searchbar'
import { AppWrapper } from '../components/provider'

export default function App({Component, pageProps}){
  const [open, setOpen] = useState(false)
  const [wallet, setWallet] = useState(false)
  const [dark, setDark] = useState(false)
  const [balance, setBalance] = useState()
  const [selected, setSelected] = useState("")
  const { active, account, library, connector, activate, deactivate } = useWeb3React()
  const [currentAccount, setCurrentAccount] = useState(null);
  const [connected, setConnected] = useState(null)

  const handleOpen = () => setOpen(!open)
  const handleClose = () => setOpen(false)
  const handleDark = () => setDark(!dark)
  const handleWallet = () => setWallet(!wallet)
  const closeWallet = () => setWallet(false)
  const handleBalance = () => setBalance(!balance)
 

  function closeAll() {
    handleClose();
    closeWallet();
  }

  function select(event) {
    const value = event.target.textContent;
    handleClose();
    setSelected(value);
}

function getLibrary(provider) {
  return new Web3(provider)
}

useEffect(() => {
  window.ethereum.on('disconnect', async () => {
    window.location.reload();
  })
})

  return (
    <AppWrapper connected={connected}>
    <Web3ReactProvider getLibrary={getLibrary} >
    <div className={(dark ? "dark min-h-screen" : '"min-h-screen"')} id="app">
      
      <nav className="fixed top-0 z-100 h-20 w-full flex flex-row flex-nowrap border-b shadow-sm shadow-blue-200 p-4  bg-white dark:bg-gray-900 ">
      <Link href="/">
        <a className="ml-6 sm:ml-0 text-4xl font-bold text-blue-500 dark:text-blue-300" onClick={handleClose}>NFTz</a>
          </Link>
          
          <Searchbar placeholder="Search items, collections, and accounts.." />
          <span className="mt-2 font-bold text-gray-600 dark:text-gray-300 float-right sm:hidden">
          <Link href="/marketplace">
            <a className="mr-6" onClick={closeAll}>
              Marketplace
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 md:hidden" onClick={closeAll}>
              Create & sell NFT
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 xl:hidden" onClick={closeAll}> 
              My Digital Assets
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 xl:hidden" onClick={closeAll}>
              History
            </a>
          </Link>
          <Link href="profile">
            <a className="mr-4 md:hidden" onClick={closeAll}>
              Profile
            </a>
          </Link>
          </span>
          <span className="mt-2 font-bold text-gray-600 dark:text-gray-300 lg:hidden">
          <FontAwesomeIcon icon={faMoon} size="1x" color={dark ? "gray-200" : "gray-600"} className="ml-2" /> / 
          <FontAwesomeIcon icon={faSun} size="1x" color={dark ? "gray-200" : "gray-600"} className="pl-2" /> 
            <button onClick={handleDark}>
            <FontAwesomeIcon icon={dark ? faToggleOn : faToggleOff } size="lg" color={dark ? "gray-200" : "gray-600"} className="px-2" />
          </button>
          </span> 
          <span className={"sm:absolute sm:right-5 md:relative m-2 " + (open ?  '': 'xl2:hidden')}>
          <button onClick={!open ? handleOpen : closeAll}>
            <FontAwesomeIcon icon={open ? faXmark : faBars} size="lg" className={dark ? "text-gray-200" : "text-gray-600"} />
          </button>
          </span>
          <Web3ReactProvider getLibrary={getLibrary} >
          {(open && !wallet) && <Dropdown handleClose={handleClose} handleDark={handleDark} handleWallet={handleWallet} />}
          </Web3ReactProvider>
      
          <Web3ReactProvider getLibrary={getLibrary} >
          {wallet && <Wallet closeWallet={closeWallet} setWallet={setWallet} handleWallet={handleWallet} handleBalance={handleBalance} handleDark={handleDark}  />}
          </Web3ReactProvider>
        
      </nav>
   
        <div onClick={select}>
      
      <Component {...pageProps}  />
      </div>
      
  <Footer />
    </div>
   </Web3ReactProvider>
   </AppWrapper>
  )
  }
