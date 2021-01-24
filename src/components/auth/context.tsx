import React, { createContext, useContext, useState } from "react";
import { UserData } from "./model";

const TOKEN_KEY = "jwt";

export const TokenStore = {
  getToken() {
    return sessionStorage.getItem(TOKEN_KEY);
  },
  saveToken(token: string) {
    sessionStorage.setItem(TOKEN_KEY, token);
  },
  clear() {
    sessionStorage.removeItem(TOKEN_KEY);
  },
};

/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */
export const AuthContext = createContext({
  userData: null as UserData | null,
  signin: (string, UserData) => {},
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
  const [userData, setUserData] = useState(null);

  const signin = (token, userData) => {
    TokenStore.saveToken(token);
    setUserData(userData);
  };

  const signout = () => {
    TokenStore.clear();
    setUserData(null);
  };

  return {
    userData,
    signin,
    signout,
  };
}
