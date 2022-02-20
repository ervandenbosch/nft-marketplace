import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export function Searchbar({ closeAll, placeholder, updateSearch, search }) {
  return (
    <div className="w-full flex-1">
      <form>
        <div className="flex flex-row">
          <div
            className="min-w-xs mx-6 h-[40px] grow rounded-lg border bg-white py-2 font-bold text-gray-400 hover:drop-shadow dark:border-none dark:bg-gray-600 dark:hover:bg-gray-500 xl2:ml-60 sm:ml-4"
            onClick={closeAll}
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              color="text-gray-600"
              className="px-2"
            />
            <input
              type="text"
              placeholder={placeholder}
              className="w-3/4 bg-transparent outline-none"
              value={search}
              onChange={updateSearch}
            />
          </div>
          <span className="w-100px mr-4 hidden flex-none rounded-lg border-b bg-blue-400 p-2 font-bold text-white hover:border dark:border-none dark:bg-gray-200 dark:text-gray-900">
            <Link href="../marketplace">
              <button type="submit">Search</button>
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}
