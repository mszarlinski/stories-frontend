export interface PublishedStory {
  id: string,
  title: string;
  preview: string;
  publishedDate: string;
}

export interface PublishedStories {
  stories: PublishedStory[];
}
