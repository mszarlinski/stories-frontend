import { HttpClient } from "../../http/HttpClient";
import { StoryForm } from "./model";

export const publishStory = (story: StoryForm) =>
  HttpClient.post<StoryForm>("/stories", story);
