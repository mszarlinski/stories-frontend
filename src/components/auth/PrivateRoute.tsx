import { Redirect, Route } from "react-router-dom";
import React from "react";
import { useAuth } from "./context";

export const PrivateRoute = ({ children, ...rest }) => {
  const { token } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
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
