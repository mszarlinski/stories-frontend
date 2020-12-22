import React from "react";
import { DropdownMenu } from "./DropdownMenu";
import { SearchBar } from "./SearchBar";
import StoriesLogo from "../../images/stories_logo.svg";

export function Navbar() {
  return (
    <nav>
      <div className="container pb-6 mb-6 border-b border-gray-300">
        <div className="flex justify-between items-center">
          <div>
            <a href="/">
              <img src={StoriesLogo} />
            </a>
          </div>
          <div className="flex">
            <SearchBar />
            <DropdownMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
