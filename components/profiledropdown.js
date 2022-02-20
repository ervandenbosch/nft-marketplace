import Link from "next/link";

export function ProfileDropdown({ dark, closeAll }) {
  return (
    <div className={dark ? "dark" : '""'}>
      <div className="z-99 lg2:border-l-1 fixed top-[76px] right-16 flex flex-col bg-white text-left font-bold text-gray-600 dark:bg-gray-900 dark:text-gray-300 xl2:right-0 lg2:border-t lg2:border-blue-100 lg2:drop-shadow-lg sm:right-0 sm:w-full">
        <div className="relative mt-6">
          <ul>
            <li className="px-12 pb-8">
              <Link href="./profile">
                <a onClick={closeAll}>Profile</a>
              </Link>
            </li>
            <li className="px-12 pb-8">
              <Link href="./my-assets">
                <a onClick={closeAll}>My Digital Assets</a>
              </Link>
            </li>
            <li className="px-12 pb-8">
              <Link href="./creator-dashboard">
                <a onClick={closeAll}>History</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
