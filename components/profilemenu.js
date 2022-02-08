import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export function ProfileMenu({handleProfileMenu, closeAll, dark}){

  return (
    <div className={dark ? "dark" : '""'}>
    <div className="fixed top-[76px] right-0 z-99 flex flex-col text-left w-full lg2:border-blue-100 lg2:w-1/3 lg2:border-l-1 lg2:border-t lg2:drop-shadow-lg bg-white font-bold text-gray-600 dark:bg-gray-900 dark:text-gray-300">
    <div className="relative mt-6 min-h-screen overflow:auto">
    <div className="ml-5 pb-12 xl2:hidden">
        <button onClick={handleProfileMenu} className="font-bold "> 
        <FontAwesomeIcon icon={faAngleLeft} size="1x" className="pr-3" />
          Back
        </button>
        </div>
      <ul>
    <li className="pb-8 pl-10">
    <Link href="./my-assets">
      <a onClick={closeAll}> 
        My Digital Assets
      </a>
    </Link></li>
    <li className="pb-8 pl-10">
    <Link href="./creator-dashboard">
      <a  onClick={closeAll}>
        History
      </a>
    </Link></li>
    </ul>
    </div>
    </div>
    </div>
    )
    }

