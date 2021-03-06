import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getStoriesForPublisher } from "./api";
import { PublishedStory } from "./model";
import { shortDate } from "../../commons/dates";

export const StoriesView = () => {
  const [stories, setStories] = useState([] as PublishedStory[]);

  useEffect(() => {
    getStoriesForPublisher().then(setStories);
  }, []); // run once

  return (
    <>
      <div className="flex justify-between mb-5">
        <div className="text-4xl font-bold">Your stories</div>
        <div>
          <Link to="/new-story">
            <button className="rounded border border-green-600 text-green-600 p-2 focus:outline-none focus:bg-gray">
              Write a story
            </button>
          </Link>
        </div>
      </div>
      <div>
        {stories.map((s) => (
          <div className="m-3 pt-3 border-t border-gray-300" key={s.id}>
            <div className="text-md font-bold">
              <a href={`/stories/${s.id}`}>{s.title}</a>
            </div>
            <div className="text-md text-gray-500 pb-3">{s.preview}</div>
            <div className="text-sm text-gray-500 mb-1">
              Published on {shortDate(s.publishedDate)}
            </div>
            <div className="text-sm text-gray-500 flex">
              <div className="hover:text-black mr-3">
                <Link to={`/story/${s.id}/edit`}>Edit story</Link>
              </div>
              <div className="hover:text-black ">
                <button onClick={() => alert("Not implemented yet")}>
                  Delete story
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
