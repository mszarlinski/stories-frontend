import { HttpClient } from "../../http/HttpClient";
import { StoryPage } from "./model";

export const getStoryPage = (id: string) =>
  HttpClient.get<StoryPage>(`/stories/${id}`)
    .then((r) => r.data);
