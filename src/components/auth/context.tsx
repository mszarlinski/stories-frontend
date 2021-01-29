import React, { createContext, useContext, useState } from "react";
import { UserData } from "./model";

const CURRENT_USER_KEY = "currentUser";

export const CurrentUser = {
  get() {
    return JSON.parse(sessionStorage.getItem(CURRENT_USER_KEY) as string);
  },
  set(userData: UserData) {
    sessionStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userData));
  },
  reset() {
    sessionStorage.removeItem(CURRENT_USER_KEY);
  },
};

/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */
export const AuthContext = createContext({
  userData: null as UserData | null,
  signin: (UserData) => {},
  signout: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

function useProvideAuth() {
  const [userData, setUserData] = useState(CurrentUser.get());

  const signin = (userData) => {
    CurrentUser.set(userData);
    setUserData(userData);
  };

  const signout = () => {
    CurrentUser.reset();
    setUserData(null);
  };

  return {
    userData,
    signin,
    signout,
  };
}
