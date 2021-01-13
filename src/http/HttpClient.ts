import axios from "axios";
import { TokenStore } from "../components/auth/context";

export const HttpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/api",
  headers: {
    Authorization: "Bearer " + TokenStore.getToken(),
  },
});
