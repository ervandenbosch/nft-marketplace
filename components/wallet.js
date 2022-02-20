import { useState } from "react";
import { injected } from "../components/connectors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faDiscord,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useLoginState } from "../components/provider";
import { useWeb3React } from "@web3-react/core";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

export function Wallet({ closeWallet }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [wallet, setWallet] = useState(false);
  const [balance, setBalance] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [connected, setConnected] = useState();

  const handleBalance = () => setBalance(!balance);

  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  const information = useLoginState();

  const connectorWC = new WalletConnect({
    bridge: "https://bridge.walletconnect.org", // Required
    qrcodeModal: QRCodeModal,
  });

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    if (connectorWC.connected) {
      // create new session
      connectorWC.killSession();
      connectorWC.on("disconnect", (_) => window.location.reload());
    }
  }

  async function wcConnect() {
    // Check if connection is already established
    console.log(connectorWC);
    if (!connectorWC.connected) {
      // create new session
      connectorWC.createSession();
    }
    window.location.reload();
  }

  return (
    <div className={dark ? "dark" : '" "'}>
      <div
        className="z-100 lg2:border-l-1 fixed top-[76px] right-0 flex
     min-h-screen w-full flex-col justify-between bg-white text-left text-gray-600 dark:bg-gray-900  dark:text-gray-300 lg2:w-1/3 lg2:border-t lg2:drop-shadow-lg sm2:rounded-bl-lg"
      >
        <div className="mt-6 flex flex-row">
          <div className="absolute left-5 xl2:hidden">
            <button onClick={closeWallet} className="font-bold">
              <FontAwesomeIcon icon={faAngleLeft} size="xl" className="pr-3" />
              Back
            </button>
          </div>
          {information.metamaskAccount !== undefined && (
            <div className="absolute right-10">
              <p>
                <img
                  src="https://i.ibb.co/9N5w2Hh/metamask.png"
                  className="float-left mr-2 inline-block"
                  alt="metamask"
                  width="25px"
                />
                {information.metamaskAccount
                  .substring(0, 6)
                  .concat("...")
                  .concat(information.metamaskAccount.substring(39, 42))}
              </p>
            </div>
          )}
          {information.walletconnectAccount !== undefined && (
            <div className="absolute right-10">
              <p>
                <img
                  className="float-left m-1 mr-2 inline-block"
                  src="https://i.ibb.co/253FfLx/walletconnect.png"
                  alt="walletconnect"
                  width="25px"
                />
                {information.walletconnectAccount
                  .substring(0, 6)
                  .concat("...")
                  .concat(information.walletconnectAccount.substring(39, 42))}
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          {information.metamaskAccount === undefined &&
            information.walletconnectAccount === undefined && (
              <div className="mt-10 w-full px-10 text-center">
                <button
                  className="mb-3 w-full rounded-md border-2 border-blue-400 bg-white py-3 text-left text-blue-400 dark:bg-gray-100 dark:text-gray-900"
                  onClick={connect}
                >
                  <img
                    src="https://i.ibb.co/9N5w2Hh/metamask.png"
                    className="float-left mx-4 inline-block"
                    alt="metamask"
                    width="25px"
                  />
                  Connect with MetaMask
                </button>
                <button
                  className="w-full rounded-md border-2 border-blue-400 bg-white py-3 text-left text-blue-400 dark:bg-gray-100 dark:text-gray-900"
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
              </div>
            )}
        </div>
        {information.walletconnectAccount !== undefined && (
          <div className="">
            <div
              className={
                "m-auto mt-24 flex w-2/3 flex-row rounded-t-lg border border-gray-400 " +
                (balance ? "hidden" : '""')
              }
            >
              <div className="flex w-full flex-row">
                <div className="p-3">
                  <img src="https://tinyimg.io/i/qd3GlMi.png" width="20px" />
                </div>
                <div className="inline-block py-1 text-left">
                  <b>Matic</b>
                  <br />
                  Polygon
                </div>
                <div className="ml-auto py-1 pr-3" id="outputEth">
                  {information.balanceWC}
                  <br />
                </div>
              </div>
            </div>
            <div className="mb-48 pt-10 text-center">
              <button
                className="m-5 w-40 rounded-xl border-2 border-blue-400 bg-white p-2 text-blue-400 dark:border-gray-200 dark:bg-gray-900 dark:text-gray-200"
                onClick={handleBalance}
              >
                {" "}
                {balance ? "Show balances" : "Hide balances"}
              </button>
              {connectorWC.connected && (
                <button
                  className="m-5 w-40 rounded-xl border-2 border-blue-400 bg-white p-2 text-blue-400 dark:border-gray-200 dark:bg-gray-900 dark:text-gray-200"
                  onClick={disconnect}
                >
                  Disconnect{" "}
                </button>
              )}
            </div>
          </div>
        )}
        {information.metamaskAccount !== undefined && (
          <div className="">
            <div
              className={
                "m-auto mt-24 flex w-2/3 flex-row rounded-t-lg border border-gray-400 " +
                (balance ? "hidden" : '""')
              }
            >
              <div className="flex w-full flex-row">
                <div className="p-3">
                  <img src="https://tinyimg.io/i/qd3GlMi.png" width="20px" />
                </div>
                <div className="inline-block py-1 text-left">
                  <b>Matic</b>
                  <br />
                  Polygon
                </div>
                <div className="ml-auto py-1 pr-3" id="outputEth">
                  {information.balanceMM}
                  <br />
                </div>
              </div>
            </div>
            <div className="mb-48 pt-10 text-center">
              <button
                className="m-5 w-40 rounded-xl border-2 border-blue-400 bg-white p-2 text-blue-400 dark:border-gray-200 dark:bg-gray-900 dark:text-gray-200"
                onClick={handleBalance}
              >
                {" "}
                {balance ? "Show balances" : "Hide balances"}
              </button>
            </div>
          </div>
        )}
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
