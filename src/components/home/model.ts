export interface HomePageStory {
  title: string;
  author: string;
  url: string;
  publishedDate: string;
  readingTimeMins: number;
}

export interface HomePageStories {
  stories: HomePageStory[];
}
