import { HttpClient } from "../../http/HttpClient";
import { UserData } from "./model";

export const signIn = (token: string) => {
  const headers = {
    "Authorization": "Bearer " + token
  };
  return HttpClient.post<UserData>(`/signin`, {}, { headers: headers })
    .then((r) => r.data);
};
