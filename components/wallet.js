import { useState, useEffect } from 'react'
import { injected } from "../components/connectors"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useLoginState } from '../components/provider'

export function Wallet({closeWallet}){
  const [open, setOpen] = useState(false)  
  const [dark, setDark] = useState(false)
  const [wallet, setWallet] = useState(false)
  const [balance, setBalance] = useState(false)
  const [currentAccount, setCurrentAccount] = useState(null);
  const [connected, setConnected] = useState()

  const handleBalance = () => setBalance(!balance)

  const information = useLoginState();

  async function connect() {
    setConnected(true);
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
    
  }

  async function disconnect(){
    setCurrentAccount(false)
  }

  
  return (
    <div className={dark ? "dark" : '" "'}>
    <div className="fixed top-[76px] right-0 z-100 h-1/2 flex flex-col text-left lg:text-center w-full min-h-screen lg2:w-1/3 lg2:border-l-1 lg2:border-t lg2:drop-shadow-lg  sm2:rounded-bl-lg bg-white text-gray-600 dark:bg-gray-900 dark:text-gray-300 ">
    <div className="flex flex-row justify-around mt-6">
      <div className="absolute left-5 xl2:hidden">
        <button onClick={closeWallet} className="font-bold "> 
        <FontAwesomeIcon icon={faAngleLeft} size="1x" className="pr-3" />
          Back
        </button>
        </div>
      {information.balance === undefined && <div className="absolute right-10"><p>{information.balance.substring(0,6).concat('...').concat(information.balance.substring(39,42))}</p></div>}
      </div>
      <div className="flex flex-col text-center self-center">
    {information.balance === undefined && 
<button className="bg-blue-400 mt-24 dark:bg-gray-100 rounded-xl text-white dark:text-gray-900 max-w-1/4 p-2" onClick={connect}> Connect with Metamask
          </button> }
</div>
{information.balance !== undefined && 
<div className="text-center mt-16">
<div className={"w-2/3 flex flex-row m-auto justify-between mt-6 border border-gray-400 rounded-t-lg " + (balance ? 'hidden' : '""')}>
<div className="w-full flex flex-row">
      <div className="p-3">
        <img src="https://tinyimg.io/i/qd3GlMi.png" width="20px" /></div>
    <div className="inline-block text-left py-1"><b>Matic</b><br />
    Polygon
    </div>
  <div className="py-1 pr-3 ml-auto" id="outputEth">{information.balance}<br /></div>
  </div>
  </div>
   <div className="pt-10 text-center">
   <button className="w-40 border-2 border-blue-400 dark:border-gray-200 bg-white dark:bg-gray-900 rounded-xl text-blue-400 dark:text-gray-200 p-2 m-5" onClick={handleBalance}> {balance ? 'Show balances' : 'Hide balances' }</button>
<button className="w-40 border-2 border-blue-400 dark:border-gray-200 bg-white dark:bg-gray-900 rounded-xl text-blue-400 dark:text-gray-200 p-2 m-5" onClick={disconnect}>
Disconnect
</button></div></div>}
          </div>
</div>   
)
     }
