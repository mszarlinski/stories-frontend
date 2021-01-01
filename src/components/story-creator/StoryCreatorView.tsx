import React, { useState } from "react";
import { publishStory } from "./api";

export const StoryCreatorView = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitStory = () => {
    publishStory({ title: title, content: content })
      .then(
        (r) => console.log("Story published successfully! ", r),
        (e) => console.log("Failed to publish a story! ", e)
      );
  };

  return (
    <div>
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Title"
          className="px-3 py-4 placeholder-gray-400 text-gray-700 bg-white rounded text-base border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Tell your story..."
          className="px-3 py-4 placeholder-gray-400 text-gray-700 bg-white rounded text-base border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div>
        <button
          className="rounded border bg-green-600 text-white p-2 focus:outline-none"
          onClick={submitStory}
        >
          Publish
        </button>
      </div>
    </div>
  );
};
