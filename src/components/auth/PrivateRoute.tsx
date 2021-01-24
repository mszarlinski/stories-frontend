import { Redirect, Route } from "react-router-dom";
import React from "react";
import { useAuth } from "./context";

export const PrivateRoute = ({ children, ...rest }) => {
  const { userData } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userData ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
