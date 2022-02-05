import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright} from '@fortawesome/free-solid-svg-icons'

export function Footer(){
  const [dark, setDark] = useState(false)

  return(
    <div className={dark ? "dark" : '" "'}>
      <div className="bottom-0 py-6 w-full border-t p-4 bg-blue-500 dark:bg-gray-900 text-white dark:text-gray-400 font-bold text-sm text-center">
      <FontAwesomeIcon icon={faCopyright} /> by Flexthetics. Based on smart-contracts by <a href="https://dev.to/dabit3/building-scalable-full-stack-apps-on-ethereum-with-polygon-2cfb" className="text-blue-400">Nader Dabit</a> and powered by Vercel.
      </div>
    </div>
  )
}