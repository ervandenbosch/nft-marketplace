import { useState } from 'react'
import { injected } from "../components/connectors"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord, faTelegram } from '@fortawesome/free-brands-svg-icons' 
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useLoginState } from '../components/provider'
import { useWeb3React } from '@web3-react/core'
import WalletConnect from "@walletconnect/client"
import QRCodeModal from "@walletconnect/qrcode-modal";

export function Wallet({closeWallet}){
  const [open, setOpen] = useState(false)  
  const [dark, setDark] = useState(false)
  const [wallet, setWallet] = useState(false)
  const [balance, setBalance] = useState(false)
  const [currentAccount, setCurrentAccount] = useState(null);
  const [connected, setConnected] = useState()

  const handleBalance = () => setBalance(!balance)

  const { active, account, library, connector, activate, deactivate } = useWeb3React()
  
  const information = useLoginState();

  const connectorWC = new WalletConnect({
    bridge: "https://bridge.walletconnect.org",// Required
    qrcodeModal: QRCodeModal
  });
  
  
  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
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

  async function wcConnect() {
    // Check if connection is already established
    console.log(connectorWC)
    if (!connectorWC.connected) {
      // create new session
      connectorWC.createSession(); 
    }
    window.location.reload();
    }

  return (
    <div className={dark ? "dark" : '" "'}>
    <div className="fixed top-[76px] right-0 z-100 flex flex-col
     justify-between text-left w-full min-h-screen lg2:w-1/3 lg2:border-l-1 lg2:border-t lg2:drop-shadow-lg  sm2:rounded-bl-lg bg-white text-gray-600 dark:bg-gray-900 dark:text-gray-300">
    <div className="flex flex-row mt-6">
      <div className="absolute left-5 xl2:hidden">
        <button onClick={closeWallet} className="font-bold"> 
        <FontAwesomeIcon icon={faAngleLeft} size="xl" className="pr-3" />
          Back
        </button>
        </div>
      {information.metamaskAccount !== undefined && <div className="absolute right-10"><p><img src="https://i.ibb.co/9N5w2Hh/metamask.png" className="float-left inline-block mr-2" alt="metamask" width="25px" />{information.metamaskAccount.substring(0,6).concat('...').concat(information.metamaskAccount.substring(39,42))}</p></div>}
      {information.walletconnectAccount !== undefined && <div className="absolute right-10"><p><img className="float-left inline-block m-1 mr-2" src="https://i.ibb.co/253FfLx/walletconnect.png" alt="walletconnect" width="25px" />{information.walletconnectAccount.substring(0,6).concat('...').concat(information.walletconnectAccount.substring(39,42))}</p></div>}
      </div>
      <div className="flex flex-col">
        {information.metamaskAccount === undefined && information.walletconnectAccount === undefined && <div className="text-center px-10 mt-10 w-full">
          <button className="w-full bg-white border-2 text-left border-blue-400 mb-3 dark:bg-gray-100 rounded-md text-blue-400 dark:text-gray-900 py-3" onClick={connect}><img src="https://i.ibb.co/9N5w2Hh/metamask.png" className="float-left inline-block mx-4" alt="metamask" width="25px" />Connect with MetaMask
          </button> 
          <button className="w-full text-left bg-white border-2 border-blue-400 dark:bg-gray-100 rounded-md text-blue-400 dark:text-gray-900 py-3" onClick={wcConnect}>  <img className="float-left inline-block mx-4" src="https://i.ibb.co/253FfLx/walletconnect.png" alt="walletconnect" width="25px" />  Connect with WalletConnect 
          </button></div>
          }
</div>
{information.walletconnectAccount !== undefined && 
<div className="">
<div className={"w-2/3 flex flex-row mt-24 m-auto border border-gray-400 rounded-t-lg " + (balance ? 'hidden' : '""')}>
<div className="w-full flex flex-row">
      <div className="p-3">
        <img src="https://tinyimg.io/i/qd3GlMi.png" width="20px" /></div>
    <div className="inline-block text-left py-1"><b>Matic</b><br />
    Polygon
    </div>
  <div className="py-1 pr-3 ml-auto" id="outputEth">{information.balanceWC}<br /></div>
  </div>
  </div>
   <div className="pt-10 mb-48 text-center">
   <button className="w-40 border-2 border-blue-400 dark:border-gray-200 bg-white dark:bg-gray-900 rounded-xl text-blue-400 dark:text-gray-200 p-2 m-5" onClick={handleBalance}> {balance ? 'Show balances' : 'Hide balances' }</button>
{connectorWC.connected && <button className="w-40 border-2 border-blue-400 dark:border-gray-200 bg-white dark:bg-gray-900 rounded-xl text-blue-400 dark:text-gray-200 p-2 m-5" onClick={disconnect}>
Disconnect </button>}
</div></div>}
{information.metamaskAccount !== undefined && 
<div className="">
<div className={"w-2/3 flex flex-row m-auto border border-gray-400 rounded-t-lg mt-24 " + (balance ? 'hidden' : '""')}>
<div className="w-full flex flex-row">
      <div className="p-3">
        <img src="https://tinyimg.io/i/qd3GlMi.png" width="20px" /></div>
    <div className="inline-block text-left py-1"><b>Matic</b><br />
    Polygon
    </div>
  <div className="py-1 pr-3 ml-auto" id="outputEth">{information.balanceMM}<br /></div>
  </div>
  </div>
   <div className="pt-10 mb-48 text-center">
   <button className="w-40 border-2 border-blue-400 dark:border-gray-200 bg-white dark:bg-gray-900 rounded-xl text-blue-400 dark:text-gray-200 p-2 m-5" onClick={handleBalance}> {balance ? 'Show balances' : 'Hide balances' }</button>
   </div>
</div>}
<div className="bg-white dark:bg-gray-900 border-t border-gray-200 mb-16 py-8 w-full text-center">
  <FontAwesomeIcon icon={faTwitter} size="2x" className="px-3 text-blue-500 dark:text-white" />
 <FontAwesomeIcon icon={faDiscord} size="2x" className="px-3 text-blue-500 dark:text-white" />
<FontAwesomeIcon icon={faTelegram} size="2x" className="px-3 text-blue-500  dark:text-white" />
    </div>
          </div>
</div>   
)
     }
