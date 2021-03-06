import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { HomePageStory } from "./model";
import { shortDate } from "../../commons/dates";

type Props = {
  story: HomePageStory;
};

export const StoryThumbnail: React.FC<Props> = ({ story }) => {
  return (
    <div className="shadow m-2 p-2">
      <div className="text-sm mb-2">
        <FontAwesomeIcon icon={faUser} />
        <span className="ml-1">{story.author}</span>
      </div>
      <div className="font-bold mb-1">
        <a href={`/stories/${story.id}`}>{story.title}</a>
      </div>
      <div className="text-sm text-gray-400">
        {shortDate(story.publishedDate)}
      </div>
    </div>
  );
};
