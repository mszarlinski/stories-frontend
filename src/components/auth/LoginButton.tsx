import React from "react";
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "./context";

type LocationState = {
  from: { pathname: string };
};

export const LoginButton = () => {
  const auth = useAuth();
  const location = useLocation<LocationState>();
  const history = useHistory();

  const onSucess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    const googleResponse = res as GoogleLoginResponse;

    //TODO: fetch userInfo from backend
    // singup(res1.tokenId)
    // .then((u) => console.log("User: ", u))
    // .then((u) => sessionStorage.setItem("jwt", u))

    const { from } = location.state || { from: { pathname: "/" } };

    auth.signin(googleResponse.tokenId);
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
        onSuccess={onSucess}
        onFailure={onError}
      />
    </div>
  );
};
