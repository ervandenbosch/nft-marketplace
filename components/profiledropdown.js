import Link from 'next/link'
import { useState } from 'react'

export function ProfileDropdown({handleProfileDropdown}){
  const [open, setOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)  
  const [dark, setDark] = useState(false)

  const closeProfileDropdown = () => setProfileOpen(false); console.log(profileOpen)

  return (
    <div className={dark ? "dark" : '""'}>
    <div className="fixed top-[76px] right-16 xl2:right-0 z-99 flex flex-col text-left w-full lg2:border-blue-100 lg2:w-1/4 lg2:border-l-1 lg2:border-t lg2:drop-shadow-lg bg-white font-bold text-gray-600 dark:bg-gray-900 dark:text-gray-300">
      <div className="relative mt-6">
      <ul>
      <li className="pb-8 pl-10 lg:pl-6"><Link href="./my-assets">
            <a onClick={handleProfileDropdown}>
              My Digital Assets
            </a>
          </Link></li>
      <li className="pb-8 pl-10 lg:pl-6"><Link href="./creator-dashboard">
            <a onClick={closeProfileDropdown}>
              History
            </a>
          </Link></li>
          <li className="pb-8 pl-10 lg:pl-6">
          <Link href="./profile">
            <a onClick={closeProfileDropdown}> 
              Wallet
            </a>
          </Link>
          </li>
          </ul>
          </div>
    </div>
</div>
  )
}
