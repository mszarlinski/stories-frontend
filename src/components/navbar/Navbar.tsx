import React from "react";
import { DropdownMenu } from "./DropdownMenu";
import { SearchBar } from "./SearchBar";
import StoriesLogo from "../../images/stories_logo.svg";
import { useAuth } from "../auth/context";
import { LoginButton } from "../auth/LoginButton";

export function Navbar() {
  const { userData } = useAuth();

  return (
    <nav>
      <div className="container pb-6 mb-6 border-b border-gray-300">
        <div className="flex justify-between items-center">
          <div>
            <a href="/">
              <img src={StoriesLogo} alt="Stories" />
            </a>
          </div>
          <div className="flex">
            <SearchBar />
            {userData ? (
              <DropdownMenu user={userData} />
            ) : (
              <LoginButton />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
