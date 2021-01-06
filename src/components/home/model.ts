export interface HomePageStory {
  id: string;
  title: string;
  author: string;
  publishedDate: string;
  readingTimeMins: number;
}

export interface HomePageStories {
  stories: HomePageStory[];
}
