export interface HomePageStory {
  id: string;
  title: string;
  author: string;
  publishedDate: string;
}

export interface HomePageStories {
  stories: HomePageStory[];
}
