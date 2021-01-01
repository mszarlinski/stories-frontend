import { HttpClient } from "../../http/HttpClient";
import { HomePageStories } from "./model";

export const getStoriesForHomePage = () =>
  HttpClient.get<HomePageStories>("/home/stories")
    .then((r) => r.data.stories);
