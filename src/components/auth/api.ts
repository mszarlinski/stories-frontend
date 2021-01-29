import { HttpClient } from "../../http/HttpClient";
import { UserResponse } from "./model";

export const signIn = (token: string) => {
  const headers = {
    "Authorization": "Bearer " + token
  };
  return HttpClient.post<UserResponse>(`/signin`, {}, { headers: headers })
    .then((r) => r.data);
};
