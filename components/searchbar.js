import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export function Searchbar({placeholder}){

  return(
    <span className="flex-1 border-b hover:border dark:border-none p-2 ml-6 mr-16 rounded-lg font-bold bg-white dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-400">
       <FontAwesomeIcon icon={faMagnifyingGlass} color="text-gray-600" className="pl-2 pr-2"/>
    <input type="text" placeholder={placeholder} className="w-3/4 bg-transparent outline-none" />
    </span>
  );
}