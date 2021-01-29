import axios from "axios";
import { CurrentUser } from "../components/auth/context";

export const HttpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/api",
});

HttpClient.interceptors.request.use((config) => {
  const token = CurrentUser.get()?.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
