import { HttpClient } from "../../http/HttpClient";
import { HomePageStories } from "./model";

export const getStoriesForHomePage = () =>
  HttpClient.get<HomePageStories>("/public/home/stories")
    .then((r) => r.data.stories);
