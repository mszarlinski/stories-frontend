import React, { createContext, useContext, useState } from "react";

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
  token: null as null | string,
  signin: (string) => {},
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
  const [token, setToken] = useState(TokenStore.getToken());

  const signin = (token) => {
    TokenStore.saveToken(token);
    setToken(token);
  };

  const signout = () => {
    TokenStore.clear();
    setToken(null);
  };

  return {
    token,
    signin,
    signout,
  };
}
