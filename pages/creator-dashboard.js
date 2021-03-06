import Link from "next/link";
import { ethers } from "ethers";
import { providers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

import { nftmarketaddress, nftaddress } from "../config";

import Market from "../artifacts/contracts/Market.sol/NFTMarket.json";
import NFT from "../artifacts/contracts/NFT.sol/NFT.json";

import { useLoginState } from "../components/provider";

export default function CreatorDashboard() {
  const [dark, setDark] = useState(false);
  const [nfts, setNfts] = useState([]);
  const [sold, setSold] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");

  const information = useLoginState();

  const providerOptions = {
    walletconnect: {
      display: {
        name: "Mobile",
      },
      package: WalletConnectProvider,
      options: {
        infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
        rpc: {
          80001: "https://rpc-mumbai.matic.today",
          // ...
        },
      },
    },
  };

  useEffect(() => {
    loadNFTs();
  }, []);
  async function loadNFTs() {
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
      providerOptions, // required
    });
    if (information.walletconnectAccount !== undefined) {
      var connection = await web3Modal.connectTo("walletconnect");
      console.log(connection);
      var provider = new providers.Web3Provider(connection);
      console.log(provider);
    } else if (information.metamaskAccount) {
      var provider = new ethers.providers.Web3Provider(window.ethereum);
    } else {
      return;
    }
    const signer = provider.getSigner();

    const marketContract = new ethers.Contract(
      nftmarketaddress,
      Market.abi,
      signer
    );
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
    const data = await marketContract.fetchItemsCreated();

    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await tokenContract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          sold: i.sold,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        };
        return item;
      })
    );
    /* create a filtered array of items that have been sold */
    const soldItems = items.filter((i) => i.sold);
    setSold(soldItems);
    setNfts(items);
    setLoadingState("loaded");
  }
  if (loadingState === "loaded" && !nfts.length)
    return (
      <div
        className={
          (dark ? "dark" : '" "') +
          " min-h-screen bg-gradient-to-b from-blue-100 to-white pt-32 dark:from-gray-900 dark:to-gray-400"
        }
      >
        <h1 className="px-20 py-10 text-center text-3xl font-bold text-gray-800 dark:text-gray-300">
          No assets created yet..
        </h1>
      </div>
    );
  else if (loadingState === "not-loaded")
    return (
      <div
        className={
          (dark ? "dark" : '" "') +
          " min-h-screen bg-gradient-to-b from-blue-100 to-white pt-32 dark:from-gray-900 dark:to-gray-400"
        }
      >
        <h1 className="px-20 py-10 text-center text-3xl font-bold text-gray-800 dark:text-gray-300">
          <Link href="./profile">Click to connect to a wallet</Link>
        </h1>
      </div>
    );
  return (
    <div
      className={
        (dark ? "dark" : '" "') +
        " min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-600"
      }
    >
      <div className="mb-10 flex justify-center pt-20">
        <div className="p-4" style={{ maxWidth: "1600px" }}>
          <h2 className="text-red py-2 text-center text-3xl font-bold dark:text-white ">
            Items Created
          </h2>
          <div className="flex-cols-5 flex flex-wrap justify-center gap-4 pt-4 lg:grid-cols-4 sm:grid-cols-2">
            {nfts.map((nft, i) => (
              <div
                key={i}
                className="w-64 overflow-hidden rounded-xl border xs:w-48"
              >
                <img src={nft.image} className="mx-auto h-64 rounded xs:h-48" />
                <div className="flex flex-col border-t bg-white p-3 dark:bg-gray-900">
                  <div className="flex flex-row justify-between text-2xl font-semibold dark:text-white xs:text-lg">
                    {" "}
                    {nft.name}
                    <div className="text-right text-xs font-bold text-gray-500 dark:text-white">
                      Last <br />
                      <div className="flex flex-row pt-1 text-black">
                        <span className="pr-1">
                          {" "}
                          <img
                            src="https://tinyimg.io/i/qd3GlMi.png"
                            width="20px"
                          />
                        </span>
                        {nft.price}
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-400 dark:text-white xs:text-xs">
                    {nft.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {Boolean(sold.length) && (
            <div className="p-4" style={{ maxWidth: "1600px" }}>
              <h2 className="text-red py-2 text-center text-3xl font-bold dark:text-white ">
                Items sold
              </h2>
              <div className="flex-cols-5 flex flex-wrap justify-center gap-4 pt-4 lg:grid-cols-4 sm:grid-cols-2">
                {sold.map((nft, i) => (
                  <div
                    key={i}
                    className="w-64 overflow-hidden rounded-xl border xs:w-48"
                  >
                    <img
                      src={nft.image}
                      className="mx-auto h-64 rounded xs:h-48"
                    />
                    <div className="flex flex-col border-t bg-white p-3 dark:bg-gray-900">
                      <div className="flex flex-row justify-between text-2xl font-semibold dark:text-white xs:text-lg">
                        {" "}
                        {nft.name}
                        <div className="text-right text-xs font-bold text-gray-500 dark:text-white">
                          Last <br />
                          <div className="flex flex-row pt-1 text-black">
                            <span className="pr-1">
                              {" "}
                              <img
                                src="https://tinyimg.io/i/qd3GlMi.png"
                                width="20px"
                              />
                            </span>
                            {nft.price}
                          </div>
                        </div>
                      </div>
                      <div className="text-gray-400 dark:text-white xs:text-xs">
                        {nft.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
