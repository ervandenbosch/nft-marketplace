import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/ethereum-provider";

export function WalletConnect(){
//  Create WalletConnect Provider
const provider = new WalletConnectProvider({
  infuraId: "27e484dcd9e3efcfd25a83a78777cdf1", // Required
  rpc: {
    80001: "https://rpc-mumbai.maticvigil.com"
    // ...
  },
});

//  Enable session (triggers QR Code modal)
await provider.enable();

//  Create Web3
const web3 = new Web3(provider);
}