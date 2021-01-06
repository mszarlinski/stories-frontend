import React, { useEffect, useState } from "react";
import { StoryThumbnail } from "./StoryThumbnail";
import { getStoriesForHomePage } from "./api";
import { HomePageStory } from "./model";

export const HomeView = () => {
  const [stories, setStories] = useState([] as HomePageStory[]);

  useEffect(() => {
    getStoriesForHomePage().then(setStories);
  }, []); // run once

  return (
    <div className="grid grid-cols-4 max-w-3xl">
      {stories.map((s) => (
        <StoryThumbnail story={s} key={s.id} />
      ))}
    </div>
  );
};
