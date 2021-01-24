import React from "react";
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "./context";
import { signIn } from "./api";

type LocationState = {
  from: { pathname: string };
};

export const LoginButton = () => {
  const auth = useAuth();
  const location = useLocation<LocationState>();
  const history = useHistory();

  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    const googleResponse = res as GoogleLoginResponse;

    signIn(googleResponse.tokenId) //TODO przeslac googleResponse jako body i do sessionStorage zapisac zwrotke + jwtId
      .then((userData) => {
        auth.signin(googleResponse.tokenId, userData);
      });

    const { from } = location.state || { from: { pathname: "/" } };
    history.replace(from);
  };

  const onError = (e: Error) => {
    console.error(e);
  };

  return (
    <div>
      <GoogleLogin
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onError}
      />
    </div>
  );
};
