import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : '" "'}>
      <div className="bottom-0 w-full border-t bg-blue-500 p-4 py-8 text-center text-sm font-bold text-white dark:bg-gray-900 dark:text-gray-400">
        <FontAwesomeIcon icon={faCopyright} /> by Flexthetics. Based on
        smart-contracts by{" "}
        <a
          href="https://dev.to/dabit3/building-scalable-full-stack-apps-on-ethereum-with-polygon-2cfb"
          className="text-blue-400"
        >
          Nader Dabit
        </a>{" "}
        and powered by Vercel.
      </div>
    </div>
  );
}
