import "../styles/globals.css";
import Link from "next/link";
import { useState } from "react";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faUserCircle,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "../components/dropdown";
import { Wallet } from "../components/wallet";
import { Footer } from "../components/footer";
import { Searchbar } from "../components/searchbar";
import { AppWrapper } from "../components/provider";
import { ProfileDropdown } from "../components/profiledropdown";
import { ProfileMenu } from "../components/profilemenu";

export default function App({ Component, pageProps }) {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const [wallet, setWallet] = useState(false);
  const [dark, setDark] = useState(false);
  const [balance, setBalance] = useState();
  const [selected, setSelected] = useState("");
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState();

  const handleClose = () => setOpen(false);
  const closeProfileDropdown = () => setProfileOpen(false);
  const handleProfileMenu = () => setProfileMenu(!profileMenu);
  const handleDark = () => setDark(!dark);
  const handleWallet = () => setWallet(!wallet);
  const closeWallet = () => setWallet(false);
  const handleBalance = () => setBalance(!balance);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  function closeAll() {
    handleClose();
    closeProfileDropdown();
    closeWallet();
    setProfileMenu(false);
  }

  function handleOpen() {
    setOpen(!open);
    setProfileOpen(false);
  }

  function handleProfileDropdown() {
    setOpen(false);
    setProfileOpen(!profileOpen);
  }

  function select(event) {
    const value = event.target.textContent;
    closeAll();
    setSelected(value);
  }

  function getLibrary(provider) {
    return new Web3(provider);
  }

  return (
    <AppWrapper dark={dark} search={search}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <div className={dark ? "dark min-h-screen" : '"min-h-screen"'} id="app">
          <nav className="fixed top-0 flex h-[76px] w-full flex-row flex-nowrap border-b bg-white p-4 shadow-sm  shadow-blue-200 dark:bg-gray-900 ">
            <Link href="./">
              <a className="mr-1 lg2:ml-4 " onClick={closeAll}>
                <img src="https://tinyimg.io/i/BwYKN7c.png" width="44px" />
              </a>
            </Link>

            <Searchbar
              placeholder="Search.."
              updateSearch={updateSearch}
              query={query}
              closeAll={closeAll}
            />
            <span className="float-right mt-2 font-bold text-gray-600 dark:text-gray-300 xl:hidden">
              <Link href="./marketplace">
                <a className="mr-8" onClick={closeAll}>
                  Marketplace
                </a>
              </Link>
              <Link href="./create-item">
                <a className="mr-8" onClick={closeAll}>
                  Create NFT
                </a>
              </Link>
              <Link href="./#how-to">
                <a className="mr-4" onClick={closeAll}>
                  Resources
                </a>
              </Link>
            </span>
            <span className="my-1 pr-8 pl-6 xl2:px-4 md:relative sm:px-4 sm:pl-0">
              <button onClick={!profileOpen ? handleProfileDropdown : closeAll}>
                <FontAwesomeIcon
                  icon={faUserCircle}
                  size="2x"
                  className={dark ? "text-gray-200" : "text-gray-600"}
                />
              </button>
            </span>
            <span className="my-1 px-8 xl2:px-4 xl:hidden md:relative">
              <button onClick={!wallet ? handleWallet : closeAll}>
                <FontAwesomeIcon
                  icon={faWallet}
                  size="2x"
                  className={dark ? "text-gray-200" : "text-gray-600"}
                />
              </button>
            </span>
            <span className="my-2 px-2 xl2:hidden md:relative">
              <button onClick={!open ? handleOpen : closeAll}>
                <FontAwesomeIcon
                  icon={open ? faXmark : faBars}
                  size="xl"
                  className={dark ? "text-gray-200" : "text-gray-600"}
                />
              </button>
            </span>

            {open && !wallet && (
              <Dropdown
                closeAll={closeAll}
                handleDark={handleDark}
                handleWallet={handleWallet}
                handleProfileMenu={handleProfileMenu}
              />
            )}

            {profileOpen && <ProfileDropdown closeAll={closeAll} />}

            {profileMenu && (
              <ProfileMenu
                closeAll={closeAll}
                handleProfileMenu={handleProfileMenu}
              />
            )}

            {wallet && (
              <Wallet
                closeWallet={closeWallet}
                setWallet={setWallet}
                handleWallet={handleWallet}
                handleBalance={handleBalance}
                handleDark={handleDark}
              />
            )}
          </nav>

          <div onClick={select}>
            <Component {...pageProps} handleOpen={handleOpen} />
          </div>

          <Footer />
        </div>
      </Web3ReactProvider>
    </AppWrapper>
  );
}
