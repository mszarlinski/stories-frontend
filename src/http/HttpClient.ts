import axios from "axios";
import { TokenStore } from "../components/auth/context";

export const HttpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/api"
});

HttpClient.interceptors.request.use((config) => {
  const token = TokenStore.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
