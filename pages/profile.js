import { injected } from '../components/connectors'
import { useState } from 'react'
import { useLoginState } from '../components/provider'

export default function Profile() {
  const [dark, setDark] = useState(false)
  const [balance, setBalance] = useState(false)
  const [currentAccount, setCurrentAccount] = useState(null)
  const [connected, setConnected] = useState(true)

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
    setConnected(false)
    console.log(connected);
  }


return(
<div className={(dark ? "dark" : '" "') + ' min-h-screen mt-20 bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-400'}>
<div className="min-h-screen bg-white dark:bg-gray-700 dark:text-white flex flex-col justify-content ">
<h1 className="text-center py-10 px-20 text-3xl font-bold">Wallet details</h1>
  <div className="flex flex-col text-center self-center">
    {information.balance === undefined &&
<button className="bg-blue-400 dark:bg-gray-100 rounded-xl text-white dark:text-gray-900 max-w-1/4 p-2" onClick={connect}> Connect with Metamask
          </button> }
</div>
{information.balance !== undefined &&
<div className="text-center">
<p><b>Address:</b><br /> {information.accountEth}</p>
<div className={"w-2/5 flex flex-col justify-between m-auto  mt-6 border border-gray-400 rounded-t-lg " + (balance ? 'hidden' : '""')}>
      <div className="w-full flex flex-row">
        <div className="p-3">
        <img src="https://tinyimg.io/i/qd3GlMi.png" width="20px" /></div>
    <div className="inline-block text-left py-1"><b>Matic</b><br />
    Polygon
    </div>
  <div className="py-1 pr-3 ml-auto " id="outputEth">{information.balance}<br /></div>
  </div>
  </div>

   <div className="pt-10 text-center">
   <button className="w-40 border-2 border-blue-400 dark:border-gray-200 bg-white dark:bg-gray-900 rounded-xl text-blue-400 dark:text-gray-200 p-2 m-5" onClick={handleBalance}> {balance ? 'Show balances' : 'Hide balances' }</button>
<button className="w-40 border-2 border-blue-400 dark:border-gray-200 bg-white dark:bg-gray-900 rounded-xl text-blue-400 dark:text-gray-200 p-2 m-10" onClick={disconnect}>
Disconnect
</button></div></div>}
</div>
</div>
  )
}