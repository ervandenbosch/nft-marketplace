import { ethers } from "ethers";
import { providers } from "ethers";
import { injected } from "../components/connectors";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import { useWeb3React } from "@web3-react/core";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

import { nftmarketaddress, nftaddress } from "../config";

import Market from "../artifacts/contracts/Market.sol/NFTMarket.json";
import NFT from "../artifacts/contracts/NFT.sol/NFT.json";

import { useLoginState } from "../components/provider";

export default function Profile() {
  const [dark, setDark] = useState(false);
  const [nfts, setNfts] = useState([]);
  const [sold, setSold] = useState([]);
  const [collection, setCollection] = useState(true);
  const [created, setCreated] = useState(false);
  const [soldpage, setSoldpage] = useState(false);
  const [loadingState, setLoadingState] = useState("not-loaded");
  const [balance, setBalance] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [connected, setConnected] = useState(true);

  const handleBalance = () => setBalance(!balance);
  const handleCollection = () => setCollection(!collection);
  const handleCreated = () => setCreated(!created);
  const handleSoldpage = () => setSoldpage(!soldpage);

  const information = useLoginState();

  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  const connectorWC = new WalletConnect({
    bridge: "https://bridge.walletconnect.org", // Required
    qrcodeModal: QRCodeModal,
  });

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

  async function connect() {
    if (!window.ethereum) {
      alert("Get MetaMask!");
      return;
    } else {
      try {
        await activate(injected);
      } catch (ex) {
        console.log(ex);
      }
    }
  }

  async function wcConnect() {
    // Check if connection is already established
    if (!connectorWC.connected) {
      // create new session
      connectorWC.createSession();
      connectorWC.on("connect", (_) => window.location.reload());
    }
  }

  const CopyAddress = (e) => {
    let address = e.target.value;
    navigator.clipboard.writeText(address).then(
      function () {
        alert("Copied!");
      },
      function () {
        alert("Copy error");
      }
    );
  };
  useEffect(() => {
    loadMyNFTs();
  }, []);

  async function loadMyNFTs() {
    setSoldpage(false);
    setCreated(false);
    setCollection(true);

    const web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions, // required
    });

    if (
      information.walletconnectAccount !== undefined &&
      information.walletconnectAccount !== null
    ) {
      var connection = await web3Modal.connectTo("walletconnect");
      console.log(connection);
      var provider = new providers.Web3Provider(connection);
      console.log(provider);
    } else if (information.metamaskAccount) {
      var provider = new ethers.providers.Web3Provider(window.ethereum);
    } else {
      return;
    }
    let signer = provider.getSigner();
    const marketContract = new ethers.Contract(
      nftmarketaddress,
      Market.abi,
      signer
    );
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);

    const data = await marketContract.fetchMyNFTs();

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

  async function loadCreatedNFTs() {
    setCollection(false);
    setSoldpage(false);
    setCreated(true);

    const web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions, // required
    });

    if (
      information.walletconnectAccount !== undefined &&
      information.walletconnectAccount !== null
    ) {
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
    setNfts(items);
    setLoadingState("loaded");
  }

  async function loadSoldNFTs() {
    setCollection(false);
    setCreated(false);
    setSoldpage(true);

    const web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
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
    setLoadingState("loaded");
  }

  return (
    <div className={(dark ? "dark" : '" "') + " min-h-screen bg-white pt-28"}>
      <h1 className="text-center text-3xl font-bold text-gray-800 dark:text-gray-700">
        Profile
      </h1>
      <div className="m-auto flex flex-col text-center">
        {information.metamaskAccount !== undefined && (
          <div className="mt-6 text-center dark:text-gray-800">
            <img
              src="https://i.ibb.co/9N5w2Hh/metamask.png"
              className="mb-1 mr-3 inline-block"
              alt="metamask"
              width="25px"
            />
            <button
              className="m-auto mt-2 w-[120px] rounded-xl border border-gray-800 hover:cursor-pointer"
              value={information.metamaskAccount}
              id="address"
              onClick={CopyAddress}
            >
              {information.metamaskAccount
                .substring(0, 6)
                .concat("...")
                .concat(information.metamaskAccount.substring(39, 42))}
            </button>
            <p className="ml-2 mt-1 inline-block text-xs text-gray-400 dark:text-gray-500">
              Click to Copy
            </p>
          </div>
        )}
        {information.walletconnectAccount !== undefined && (
          <div className="mt-6 text-center dark:text-gray-800">
            <img
              className="mb-1 mr-3 inline-block"
              src="https://i.ibb.co/253FfLx/walletconnect.png"
              alt="walletconnect"
              width="25px"
            />
            <button
              className="m-auto mt-2 w-[120px] rounded-xl border border-gray-800 hover:cursor-pointer"
              value={information.walletconnectAccount}
              id="address"
              onClick={CopyAddress}
            >
              {information.walletconnectAccount
                .substring(0, 6)
                .concat("...")
                .concat(information.walletconnectAccount.substring(39, 42))}
            </button>{" "}
            <p className="ml-2 mt-1 inline-block text-xs text-gray-400 dark:text-gray-500">
              Click to Copy
            </p>
          </div>
        )}
      </div>
      <div className="mt-10 flex flex-row justify-center px-10">
        <div
          className={
            "rounded-tl-lg border border-r-0 border-b-0 border-gray-500 px-4 py-3 text-center font-bold text-gray-800 hover:cursor-pointer hover:shadow-inner dark:text-gray-300 sm2:w-[120px] " +
            (collection ? "bg-blue-100 dark:bg-gray-900" : "bg-white")
          }
          onClick={loadMyNFTs}
        >
          Collection
        </div>
        <div
          className={
            "border border-r-0 border-b-0 border-gray-400 px-4 py-3 text-center font-bold text-gray-800 hover:cursor-pointer hover:shadow-inner dark:text-gray-500 sm2:w-[120px] " +
            (created ? "bg-blue-100 dark:bg-gray-900" : "bg-white")
          }
          onClick={loadCreatedNFTs}
        >
          Created
        </div>
        <div
          className={
            "rounded-tr-lg border border-b-0 border-gray-400 px-4 py-3 text-center font-bold text-gray-800 hover:cursor-pointer  hover:shadow-inner dark:text-gray-500 sm2:w-[120px] " +
            (soldpage ? "bg-blue-100 dark:bg-gray-900" : "bg-white")
          }
          onClick={loadSoldNFTs}
        >
          Sold
        </div>
      </div>
      <div className="">
        {collection && loadingState === "loaded" && !nfts.length && (
          <div
            className={
              (dark ? "dark" : '" "') +
              " min-h-screen bg-gradient-to-b from-blue-100 to-white pt-32 dark:from-gray-900 dark:to-gray-400"
            }
          >
            <h1 className="p-10 text-center text-3xl font-bold text-gray-800 dark:text-gray-300">
              No digital assets owned.
            </h1>
          </div>
        )}

        {loadingState === "not-loaded" && (
          <div
            className={
              (dark ? "dark" : '" "') +
              " min-h-screen bg-gradient-to-b from-blue-100 to-white pt-24 dark:from-gray-900 dark:to-gray-400"
            }
          >
            <h1
              className={
                "px-20 pt-10 text-center text-3xl font-bold text-gray-800 dark:text-gray-300 " +
                (information.metamaskAccount === undefined &&
                information.walletconnectAccount === undefined
                  ? "hidden"
                  : '""')
              }
            >
              Loading..
            </h1>
            {information.metamaskAccount === undefined &&
              information.walletconnectAccount === undefined && (
                <div className="m-auto mt-10 max-w-[450px] px-10 text-center lg:px-6">
                  <button
                    className="mb-3 w-full rounded-md border border-blue-400 bg-white py-3 text-left text-blue-400 hover:shadow-inner dark:bg-gray-100 dark:text-gray-900"
                    onClick={connect}
                  >
                    {" "}
                    <img
                      src="https://i.ibb.co/9N5w2Hh/metamask.png"
                      className="float-left mx-4 inline-block"
                      alt="metamask"
                      width="27px"
                    />
                    Connect with MetaMask
                  </button>
                  <button
                    className="w-full rounded-md border border-blue-400 bg-white py-3 text-left text-blue-400 hover:shadow-inner dark:bg-gray-100 dark:text-gray-900"
                    onClick={wcConnect}
                  >
                    {" "}
                    <img
                      className="float-left mx-4 inline-block"
                      src="https://i.ibb.co/253FfLx/walletconnect.png"
                      alt="walletconnect"
                      width="28px"
                    />
                    Connect with WalletConnect
                  </button>
                </div>
              )}
          </div>
        )}

        {collection && loadingState === "loaded" && nfts.length && (
          <div
            className={
              (dark ? "dark" : '" "') +
              " min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-600"
            }
          >
            <div className="flex flex-row justify-center">
              <div className="p-8" style={{ maxWidth: "1600px" }}>
                <div className="flex-cols-5 flex flex-wrap gap-4 py-4 lg:grid-cols-4 sm:grid-cols-2">
                  {nfts.map((nft, i) => (
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
            </div>
          </div>
        )}

        {created && loadingState === "loaded" && !nfts.length && (
          <div
            className={
              (dark ? "dark" : '" "') +
              " min-h-screen bg-gradient-to-b from-blue-100 to-white pt-32 dark:from-gray-900 dark:to-gray-400"
            }
          >
            <h1 className="p-10 text-center text-3xl font-bold text-gray-800 dark:text-gray-300">
              No digital assets created.
            </h1>
          </div>
        )}

        {created && loadingState === "loaded" && nfts.length && (
          <div
            className={
              (dark ? "dark" : '" "') +
              " min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-600"
            }
          >
            <div className="p-8" style={{ maxWidth: "1600px" }}>
              <div className="flex-cols-5 flex flex-wrap justify-center gap-4 pt-4 lg:grid-cols-4 sm:grid-cols-2">
                {nfts.map((nft, i) => (
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
          </div>
        )}

        {soldpage && loadingState === "loaded" && !sold.length && (
          <div
            className={
              (dark ? "dark" : '" "') +
              " min-h-screen bg-gradient-to-b from-blue-100 to-white pt-32 dark:from-gray-900 dark:to-gray-400"
            }
          >
            <h1 className="p-10 text-center text-3xl font-bold text-gray-800 dark:text-gray-300">
              No digital assets sold.
            </h1>
          </div>
        )}

        {soldpage && loadingState === "loaded" && sold.length && (
          <div
            className={
              (dark ? "dark" : '" "') +
              " min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-600"
            }
          >
            <div className="p-8" style={{ maxWidth: "1600px" }}>
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
          </div>
        )}
      </div>
    </div>
  );
}
