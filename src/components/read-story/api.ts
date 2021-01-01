import { HttpClient } from "../../http/HttpClient";
import { StoryPage } from "./model";

export const getStoryPage = (slug: string) =>
  HttpClient.get<StoryPage>(`/stories/${slug}`)
    .then((r) => r.data);
