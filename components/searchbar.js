import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export function Searchbar({placeholder, getSearch, updateSearch, search}){

  return(
   
    <div className="flex-1">
       <form onSubmit={getSearch} className="">
       <div className="flex flex-row min-w-xs max-w-[400px]">
       <div className="grow border-b hover:border dark:border-none py-2 h-[40px] mx-6 rounded-lg font-bold bg-white dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-400">
       <FontAwesomeIcon icon={faMagnifyingGlass} color="text-gray-600" className="px-2"/>
    <input type="text" placeholder={placeholder} className="w-3/4 bg-transparent outline-none" value={search} onChange={updateSearch} />
    </div>
  
    </div>
    </form>
    </div>
  );
}