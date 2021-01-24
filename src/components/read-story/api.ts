import { HttpClient } from "../../http/HttpClient";
import { StoryPage } from "./model";

export const getStoryPage = (id: string) =>
  HttpClient.get<StoryPage>(`/public/stories/${id}`)
    .then((r) => r.data);
