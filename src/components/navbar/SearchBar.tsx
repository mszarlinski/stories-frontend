import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export function SearchBar() {
  return (
    <div className="relative flex w-full px-4 flex-wrap items-stretch ml-auto">
      <div className="flex">
                <span
                  className="font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-gray-600 rounded-full text-sm bg-gray-100 items-center rounded-r-none pl-2 py-1 text-gray-800 border-r-0 placeholder-gray-300">
                   <FontAwesomeIcon icon={faSearch} />
                </span>
      </div>
      <input type="text"
             className="px-2 py-1 h-8 border border-solid  border-gray-600 rounded-full text-sm leading-snug text-gray-700 bg-gray-100 shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-gray-400"
             placeholder="Search Stories" />
    </div>
  );
}
