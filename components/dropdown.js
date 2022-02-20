import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faDiscord,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { injected } from "./connectors";
import { useLoginState } from "./provider";
import { useWeb3React } from "@web3-react/core";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

export function Dropdown({
  closeAll,
  handleDark,
  handleProfileMenu,
  handleWallet,
}) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [wallet, setWallet] = useState(false);
  const [selected, setSelected] = useState(false);

  const information = useLoginState();

  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (err) {
      console.log(err);
    }
  }

  const connectorWC = new WalletConnect({
    bridge: "https://bridge.walletconnect.org", // Required
    qrcodeModal: QRCodeModal,
  });

  async function wcConnect() {
    // Check if connection is already established
    if (!connectorWC.connected) {
      // create new session
      connectorWC.createSession();
      connectorWC.on("connect", (_) => window.location.reload());
    }
  }

  async function disconnect() {
    if (connectorWC.connected) {
      // create new session
      connectorWC.killSession();
      connectorWC.on("disconnect", (_) => window.location.reload());
    }
  }

  return (
    <div className={dark ? "dark" : '""'}>
      <div className="z-99 lg2:border-l-1 fixed top-[76px] right-0 flex h-screen w-full flex-col justify-between overflow-hidden bg-white text-left font-bold text-gray-600 dark:bg-gray-900 dark:text-gray-300 lg2:w-2/5 lg2:max-w-[450px] lg2:border-t lg2:border-blue-100 lg2:drop-shadow-lg">
        <div className="mt-6">
          <ul>
            <li className="pb-8 pl-10 lg:pl-6">
              <Link href="./marketplace">
                <a onClick={closeAll}>Marketplace</a>
              </Link>
            </li>
            <li className="pb-8 pl-10 lg:pl-6">
              <Link href="./create-item">
                <a onClick={closeAll}>Create & sell NFT</a>
              </Link>
            </li>
            <li className="pb-8 pl-10 lg:pl-6">
              <Link href="./#how-to">
                <a onClick={closeAll}>Resources</a>
              </Link>
            </li>
            <li className="pb-8 pl-10 lg:pl-6">
              <Link href="./profile">
                <a onClick={closeAll}>Profile</a>
              </Link>
            </li>
            {(information.balanceWC !== undefined ||
              information.balanceMM !== undefined) && (
              <li className="pb-8 pl-10 lg:pl-6">
                <button onClick={handleWallet}>
                  <b>Wallet</b>
                </button>
              </li>
            )}
            <li className="pl-10 lg:pl-6">
              Night mode
              <button className="float-right pr-10" onClick={handleDark}>
                <FontAwesomeIcon
                  icon={dark ? faToggleOn : faToggleOff}
                  size="lg"
                  color={dark ? "gray-200" : "gray-600"}
                />
              </button>
            </li>

            {information.metamaskAccount === undefined &&
              information.walletconnectAccount === undefined && (
                <li className="mt-10 w-full px-10 text-center lg:px-6">
                  <button
                    className="mb-3 w-full rounded-md border-2 border-blue-400 bg-white py-3 text-left font-bold text-blue-400 dark:bg-gray-100 dark:text-gray-900"
                    onClick={connect}
                  >
                    {" "}
                    <img
                      src="https://i.ibb.co/9N5w2Hh/metamask.png"
                      className="float-left mx-4 inline-block"
                      alt="metamask"
                      width="25px"
                    />
                    Connect with MetaMask
                  </button>
                  <button
                    className="w-full rounded-md border-2 border-blue-400 bg-white py-3 text-left font-bold text-blue-400 dark:bg-gray-100 dark:text-gray-900"
                    onClick={wcConnect}
                  >
                    {" "}
                    <img
                      className="float-left mx-4 inline-block"
                      src="https://i.ibb.co/253FfLx/walletconnect.png"
                      alt="walletconnect"
                      width="25px"
                    />{" "}
                    Connect with WalletConnect
                  </button>
                </li>
              )}
          </ul>
        </div>

        <div className="mb-16 w-full border-t border-gray-200 bg-white py-8 text-center dark:bg-gray-900">
          <FontAwesomeIcon
            icon={faTwitter}
            size="2x"
            className="px-3 text-blue-500 dark:text-white"
          />
          <FontAwesomeIcon
            icon={faDiscord}
            size="2x"
            className="px-3 text-blue-500 dark:text-white"
          />
          <FontAwesomeIcon
            icon={faTelegram}
            size="2x"
            className="px-3 text-blue-500  dark:text-white"
          />
        </div>
      </div>
    </div>
  );
}
