import { createContext, useContext, useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'

const AppContext = createContext();

export function AppWrapper({ children, connected })  {

const { active, account, library, connector, activate, deactivate } = useWeb3React()

const web3 = new Web3(new Web3.providers.HttpProvider("https://rpc-mumbai.maticvigil.com"));

const [balance, setBalance] = useState();
const [accountEth, setAccountEth] = useState();

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
  setAccountEth(metamaskAccount);
  loadBalance(metamaskAccount);
    } else {
      console.log("No connected account found")
    }
  }

async function loadBalance(currentAccount) {
  var result
  try {
   await web3.eth.getBalance(currentAccount, function (error, result) {
        if (!error) {
          var balanceEth = web3.utils.fromWei(result, 'ether').substring(0,6);
          setBalance(balanceEth);
        }
    });
} catch (error) {
    alert(error);
}
}

useEffect(() => {
  if (window.ethereum) {
    setAccountListener(window.ethereum);
    console.log('Wallet exists.')
  } else {
    alert('Install Metamask')
  }
checkWalletIsConnected();
}, [connected])

const setAccountListener = (provider) => {
provider.on("accountsChanged", (_) => window.location.reload());
provider.on("chainChanged", (_) => window.location.reload());
};


const state = {balance, accountEth}

console.log(state);

  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  );
}

export function useLoginState() {
  return useContext(AppContext);
}