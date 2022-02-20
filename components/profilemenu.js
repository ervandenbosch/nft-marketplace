import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export function ProfileMenu({ handleProfileMenu, closeAll, dark }) {
  return (
    <div className={dark ? "dark" : '""'}>
      <div className="z-99 lg2:border-l-1 fixed top-[76px] right-0 flex w-full flex-col bg-white text-left font-bold text-gray-600 dark:bg-gray-900 dark:text-gray-300 lg2:w-1/3 lg2:border-t lg2:border-blue-100 lg2:drop-shadow-lg">
        <div className="overflow:auto relative mt-6 min-h-screen">
          <div className="ml-5 pb-12 xl2:hidden">
            <button onClick={handleProfileMenu} className="font-bold ">
              <FontAwesomeIcon icon={faAngleLeft} size="1x" className="pr-3" />
              Back
            </button>
          </div>
          <ul>
            <li className="pb-8 pl-10">
              <Link href="./my-assets">
                <a onClick={closeAll}>My Digital Assets</a>
              </Link>
            </li>
            <li className="pb-8 pl-10">
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
