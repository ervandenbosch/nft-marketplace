import { useRouter } from "next/router";
import { ethers } from "ethers";
import { providers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { useLoginState } from "../components/provider";
import { nftaddress, nftmarketaddress } from "../config";

import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import Market from "../artifacts/contracts/Market.sol/NFTMarket.json";

export default function Marketplace() {
  const [dark, setDark] = useState(false);
  const [nfts, setNfts] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const information = useLoginState();
  var search = information.search;

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
    /* create a generic provider and query for unsold market items */
    const provider = new ethers.providers.JsonRpcProvider(
      "https://rpc-mumbai.matic.today"
    );
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
    const marketContract = new ethers.Contract(
      nftmarketaddress,
      Market.abi,
      provider
    );
    const data = await marketContract.fetchMarketItems();

    /*
     *  map over items returned from smart contract and format
     *  them as well as fetch their token metadata
     */
    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await tokenContract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          itemId: i.itemId.toNumber(),
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        };

        return item;
      })
    );
    setNfts(items);
    setLoadingState("loaded");
  }
  async function buyNft(nft) {
    const web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions, // required
    });
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    if (information.walletconnectAccount !== undefined) {
      var connection = await web3Modal.connectTo("walletconnect");
      var provider = new providers.Web3Provider(connection);
    } else if (information.metamaskAccount !== undefined) {
      var provider = new ethers.providers.Web3Provider(window.ethereum);
    } else {
      router.push("./profile");
      return;
    }
    const signer = provider.getSigner();
    const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer);
    /* user will be prompted to pay the asking proces to complete the transaction */
    const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
    const transaction = await contract.createMarketSale(
      nftaddress,
      nft.itemId,
      {
        value: price,
      }
    );
    console.log(transaction);
    try {
      await transaction.wait();
    } catch (err) {
      console.log(err);
    }
    loadNFTs();
  }

  if (loadingState === "loaded" && !nfts.length)
    return (
      <div
        className={
          (dark ? "dark" : '" "') +
          " min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-400"
        }
      >
        <h1 className="px-20 pt-32 text-center text-3xl font-bold text-gray-800 dark:text-gray-300">
          No items in marketplace yet..
        </h1>
      </div>
    );
  else if (loadingState === "not-loaded")
    return (
      <div
        className={
          (dark ? "dark" : '" "') +
          " min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-400"
        }
      >
        <h1 className="px-20 pt-32 text-center text-3xl font-bold text-gray-800 dark:text-gray-300">
          Loading...
        </h1>
      </div>
    );
  else if (loadingState === "loaded" && nfts.length) {
    let nftsFilter = nfts.filter((nft) =>
      nft.name.toLowerCase().includes(search.toLowerCase())
    );
    if (nftsFilter.length === 0) {
      return (
        <div
          className={
            (dark ? "dark" : '" "') +
            " min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-400"
          }
        >
          <h1 className="px-20 pt-32 text-center text-3xl font-bold text-gray-800 dark:text-gray-300">
            No matches..
          </h1>
        </div>
      );
    } else {
      return (
        <div
          className={
            (dark ? "dark" : '" "') +
            " min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-600"
          }
        >
          {" "}
          <div className="mb-10 flex justify-center pt-20">
            <div className="p-4" style={{ maxWidth: "1600px" }}>
              <h1 className="py-5 text-center text-3xl font-bold text-gray-800 dark:text-gray-300">
                Items for sale
              </h1>
              <div className="flex-cols-5 flex flex-wrap justify-center gap-4 pt-4 lg:grid-cols-4 sm:grid-cols-2">
                {nftsFilter.map((nft, i) => (
                  <button onClick={() => buyNft(nft)}>
                    <div
                      key={i}
                      className="w-48 overflow-hidden rounded-xl border border-slate-300 bg-white shadow-md hover:shadow-xl dark:border-slate-800 dark:bg-gray-900 xs:w-48"
                    >
                      <img src={nft.image} className="mx-auto h-48 xs:h-32" />
                      <div className="flex flex-row justify-between border-t">
                        <div className="flex flex-col px-3 py-2 pb-4">
                          <p className="xs:text-md text-left text-lg font-semibold dark:text-white">
                            {nft.name}
                          </p>
                          <div style={{ overflow: "hidden" }}>
                            <p className="pl-1 text-left text-xs text-gray-400 dark:text-white">
                              {nft.description}
                            </p>
                          </div>
                        </div>
                        <div className="mt-1 p-2 text-right text-xs dark:text-white">
                          Price
                          <div className="flex flex-row pt-1 text-sm font-bold text-black">
                            <span className="pr-1">
                              <img
                                src="https://tinyimg.io/i/qd3GlMi.png"
                                width="20px"
                              />
                            </span>
                            {nft.price}
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div
      className={
        (dark ? "dark" : '" "') +
        " min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-600"
      }
    >
      {" "}
      <div className="mb-10 flex justify-center pt-20">
        <div className="p-4" style={{ maxWidth: "1600px" }}>
          <div className="flex-cols-5 flex flex-wrap justify-center gap-4 pt-4 lg:grid-cols-4 sm:grid-cols-2">
            {nfts.map((nft, i) => (
              <button onClick={() => buyNft(nft)}>
                <div
                  key={nft}
                  className="w-48 overflow-hidden rounded-xl border border-slate-300 bg-white shadow-md hover:shadow-xl dark:border-slate-800 dark:bg-gray-900 xs:w-48"
                >
                  <img src={nft.image} className="mx-auto h-48 xs:h-48" />
                  <div className="flex flex-row justify-between border-t">
                    <div className="dark:bg- flex flex-col p-3">
                      <p className="text-2xl font-semibold dark:text-white xs:text-lg">
                        {nft.name}
                      </p>
                      <div style={{ overflow: "hidden" }}>
                        <p className="text-gray-400 dark:text-white xs:text-xs">
                          {nft.description}
                        </p>
                      </div>
                    </div>
                    <div className="p-2 text-right text-sm dark:text-white">
                      Price
                      <div>
                        <FontAwesomeIcon
                          icon={faEthereum}
                          className="px-2 text-black"
                          size="lg"
                        />
                        <span className="py-1 text-lg font-bold text-gray-800 dark:text-white xs:text-sm">
                          {nft.price}{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
