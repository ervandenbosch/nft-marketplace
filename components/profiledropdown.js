import Link from 'next/link'

export function ProfileDropdown({dark, closeAll}){ 

  return (
    <div className={dark ? "dark" : '""'}>
    <div className="fixed top-[76px] sm:w-full sm:right-0 right-16 xl2:right-0 z-99 flex flex-col text-left lg2:border-blue-100 lg2:border-l-1 lg2:border-t lg2:drop-shadow-lg bg-white font-bold text-gray-600 dark:bg-gray-900 dark:text-gray-300">
      <div className="relative mt-6">
      <ul>
      <li className="pb-8 px-12">
          <Link href="./profile">
            <a onClick={closeAll}> 
              Profile
            </a>
          </Link>
          </li>
      <li className="pb-8 px-12"><Link href="./my-assets">
            <a onClick={closeAll}>
              My Digital Assets
            </a>
          </Link></li>
      <li className="pb-8 px-12"><Link href="./creator-dashboard">
            <a onClick={closeAll}>
              History
            </a>
          </Link></li>
        
          </ul>
          </div>
    </div>
</div>
  )
}
