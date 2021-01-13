import { HttpClient } from "../../http/HttpClient";

export interface UserData {
  username: string
}
//TODO
export const singup = (token: string) => {
  const headers = {
    "Authorization": "Bearer " + token
  };
  return HttpClient.get<UserData>(`/me`, { headers: headers })
    .then((r) => r.data);
};
