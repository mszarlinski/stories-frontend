export interface PublishedStory {
  id: string,
  title: string;
  preview: string;
  url: string;
  publishedDate: string;
  readingTimeMins: number;
}

export interface PublishedStories {
  stories: PublishedStory[];
}
