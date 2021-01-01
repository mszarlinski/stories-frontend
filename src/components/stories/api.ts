import { HttpClient } from "../../http/HttpClient";
import { PublishedStories } from "./model";

export const getStoriesForPublisher = () =>
  HttpClient.get<PublishedStories>("/publisher/stories")
    .then((r) => r.data.stories);
