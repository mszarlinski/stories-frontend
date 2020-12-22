import React from "react";

export const StoryCreatorView = () => {
  return (

    <div>
      <div className="mb-3 pt-0">
        <input type="text" placeholder="Title"
               className="px-3 py-4 placeholder-gray-400 text-gray-700 bg-white rounded text-base border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full" />
      </div>
      <div className="mb-3 pt-0">
        <textarea placeholder="Tell your story..."
               className="px-3 py-4 placeholder-gray-400 text-gray-700 bg-white rounded text-base border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full" />
      </div>
      <div>
        <button className="rounded border bg-green-600 text-white p-2 focus:outline-none" onClick={() => alert("Published!")}>Publish</button>
      </div>
    </div>
  );
};
