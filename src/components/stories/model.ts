export interface PublishedStory {
  id: string,
  title: string;
  preview: string;
  publishedDate: string;
  readingTimeMins: number;
}

export interface PublishedStories {
  stories: PublishedStory[];
}
