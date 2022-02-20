import { createContext, useContext, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import WalletConnect from "@walletconnect/client";

const AppContext = createContext();

export function AppWrapper({ children, search }) {
  const [balanceMM, setBalanceMM] = useState();
  const [metamaskAccount, setMetamaskAccount] = useState();
  const [balanceWC, setBalanceWC] = useState();
  const [walletconnectAccount, setWalletconnectAccount] = useState();

  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  const web3 = new Web3(
    new Web3.providers.HttpProvider("https://rpc-mumbai.matic.today")
  );

  const connectorWC = new WalletConnect({
    bridge: "https://bridge.walletconnect.org", // Required
  });

  async function checkWalletIsConnected() {
    if (window.ethereum) {
      const accountsMM = await ethereum.request({ method: "eth_accounts" });
      if (accountsMM.length !== 0) {
        const metamaskAccount = accountsMM[0];
        console.log("Found a connected account! Address: ", metamaskAccount);
        setMetamaskAccount(metamaskAccount);
        loadBalanceMM(metamaskAccount);
      }
    }
    if (connectorWC.connected) {
      // Get provided accounts and chainId
      const accountWC = connectorWC.accounts.toString().toLowerCase();
      if (accountWC.length !== 0) {
        console.log(
          "Found a Walletconnect account! Address: ",
          accountWC,
          "at",
          connectorWC.chainId
        );
        setWalletconnectAccount(accountWC);
        loadBalanceWC(accountWC);
      }
    } else {
      console.log("No connected accounts found");
    }
  }

  async function loadBalanceMM(account) {
    var result;
    try {
      await web3.eth.getBalance(account, function (error, result) {
        if (!error) {
          var balanceMM = web3.utils.fromWei(result, "ether").substring(0, 6);
          setBalanceMM(balanceMM);
        }
      });
    } catch (error) {
      alert(error);
    }
  }

  async function loadBalanceWC(account) {
    var result;
    try {
      await web3.eth.getBalance(account, function (error, result) {
        if (!error) {
          var balanceWC = web3.utils.fromWei(result, "ether").substring(0, 6);
          setBalanceWC(balanceWC);
        }
      });
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    checkWalletIsConnected();
    if (window.ethereum) {
      setAccountListener(window.ethereum);
      console.log("Metamask is installed");
    } else {
      console.log("Install Metamask or use WalletConnect");
    }
  }, []);

  const setAccountListener = (provider) => {
    provider.on("accountsChanged", (_) => window.location.reload());
    provider.on("chainChanged", (_) => window.location.reload());
  };

  const state = {
    balanceMM,
    balanceWC,
    metamaskAccount,
    walletconnectAccount,
    search,
  };

  console.log(state);

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export function useLoginState() {
  return useContext(AppContext);
}
