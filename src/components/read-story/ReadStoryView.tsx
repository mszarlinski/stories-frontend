import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getStoryPage } from "./api";
import { StoryPage } from "./model";

type QueryParams = {
  id: string;
};

export const ReadStoryView = () => {
  const [story, setStory] = useState<StoryPage>();
  const { id } = useParams<QueryParams>(); //TODO: pretty urls with slugs

  useEffect(() => {
    getStoryPage(id).then(setStory);
  }, [id]); // run once

  return (
    <div className="m-5">
      <div className="text-4xl font-bold mb-3">{story?.title}</div>
      <div className="text-sm text-gray-500 mb-6">
        {story?.author} · {story?.publishedDate} · {story?.readingTimeMins} mins
        read
      </div>
      <div>{story?.content}</div>
    </div>
  );
};
