import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../auth/context";

type Props = {
  user: string;
};

export const DropdownMenu: React.FC<Props> = ({ user }) => {
  const [showMenu, setShowMenu] = useState(false);
  const auth = useAuth();
  const history = useHistory();

  const handleSingOut = () => {
    auth.signout();
    setShowMenu(false);
    history.push("/");
  };

  return (
    <div>
      <button
        className="block rounded-full overflow-hidden w-8 h-8 border focus:outline-none"
        onClick={() => setShowMenu(!showMenu)}
      >
        {/*<img*/}
        {/*  className="h-full w-full object-cover"*/}
        {/*  src="https://miro.medium.com/fit/c/64/64/0*GswhCBgzTPj16QtP"*/}
        {/*  alt="Maciej Szarlinski"*/}
        {/*/>*/}
        <div>{user}</div>
      </button>
      {showMenu && (
        <div className="rounded shadow-xl border absolute mt-5 text-gray-500 bg-white">
          <Link to="/new-story">
            <span
              onClick={() => setShowMenu(false)}
              className="block px-4 py-2 font-light hover:text-black"
            >
              Write a story
            </span>
          </Link>
          <Link to="/stories">
            <span
              onClick={() => setShowMenu(false)}
              className="block px-4 py-2 font-light hover:text-black"
            >
              Stories
            </span>
          </Link>
          <button
            onClick={handleSingOut}
            className="block px-4 py-2 font-light hover:text-black"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};
