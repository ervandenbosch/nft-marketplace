import { useState, useEffect } from 'react'
import { useWeb3React } from "@web3-react/core"
import { injected } from "../components/connectors"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import Web3 from 'web3'
import { useLoginState } from '../components/provider'

export function Wallet({closeWallet}){
  const [open, setOpen] = useState(false)  
  const [dark, setDark] = useState(false)
  const [wallet, setWallet] = useState(false)
  const [balance, setBalance] = useState(false)
  const [currentAccount, setCurrentAccount] = useState(null);
  const [connected, setConnected] = useState()

  const handleBalance = () => setBalance(!balance)
  
  const { active, account, library, connector, activate, deactivate } = useWeb3React()

  const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

  useEffect(() => {
    checkWalletIsConnected();
    if (window.ethereum) {
      setAccountListener(window.ethereum);
      console.log('Wallet exists.')
    } else {
      alert('Install Metamask')
    }
  }, [])

  async function checkWalletIsConnected() {
    const { ethereum } = window;
  
    if (!ethereum) {
      alert('Install Metamask')
      return;
    }
    else {
      console.log('Wallet exists.')
    }
   const accounts = await ethereum.request({ method: 'eth_accounts'})
  if (accounts.length !== 0){
    const metamaskAccount = accounts[0]
    console.log("Found a connected account! Address: ", metamaskAccount);
    setConnected(true)
    setCurrentAccount(metamaskAccount);
    loadBalance(metamaskAccount);
      } else {
        console.log("No connected account found")
      }
      
    }

  async function connect() {
    checkWalletIsConnected()
    try {
      await activate(injected)
      setConnected(true)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect(){
    setCurrentAccount(false)
  }

 async function loadBalance(currentAccount) {
    var result
    try {
     await web3.eth.getBalance(currentAccount, function (error, result) {
          if (!error) {
            var balance = web3.utils.fromWei(result, 'ether').substring(0,6);
            document.getElementById("outputEth").innerHTML = balance;
            console.log(balance)
          }
      });
  } catch (error) {
      alert(error);
  }
  }

  const setAccountListener = (provider) => {
    provider.on("accountsChanged", (_) => window.location.reload());
    provider.on("chainChanged", (_) => window.location.reload());
  };
  
  return (
    <div className={dark ? "dark" : '" "'}>
    <div className="fixed top-20 right-0 z-100 h-1/2 flex flex-col text-left lg:text-center w-full min-h-screen lg2:w-1/3 lg2:border-l-1 lg2:border-t lg2:drop-shadow-lg  sm2:rounded-bl-lg bg-white text-gray-600 dark:bg-gray-900 dark:text-gray-300 ">
    <div className="flex flex-row justify-around mt-6">
      <div className="absolute left-5">
        <button onClick={closeWallet} className="font-bold "> 
        <FontAwesomeIcon icon={faAngleLeft} size="1x" className="pr-3" />
          Back
        </button>
        </div>
      {currentAccount && <div className="absolute right-10"><p>{currentAccount.substring(0,6).concat('...').concat(currentAccount.substring(39,42))}</p></div>}
      </div>
      <div className="flex flex-col text-center self-center">
    {!currentAccount && 
<button className="bg-blue-400 mt-24 dark:bg-gray-100 rounded-xl text-white dark:text-gray-900 max-w-1/4 p-2" onClick={connect}> Connect with Metamask
          </button> }
</div>
{currentAccount && 
<div className="text-center mt-16">
<div className={"w-2/3 flex flex-row m-auto justify-between mt-6 border border-gray-400 rounded-t-lg " + (balance ? 'hidden' : '""')}>
      <div className="flex flex-row">
        <div className="p-3">
     <FontAwesomeIcon icon={faEthereum} color="text-gray-400" size="1x"/></div>
    <div className="text-left py-1"><b>ETH</b><br />
    Ethereum
    </div></div>
  <div className="py-1 pr-3" id="outputEth"> <br />
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
