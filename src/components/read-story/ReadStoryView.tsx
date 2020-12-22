import { useParams } from "react-router-dom";
import React from "react";

type QueryParams = {
  slug: string;
};

export const ReadStoryView = () => {
  const { slug } = useParams<QueryParams>();

  console.log("read story with slug: ", slug);

  return (
    <div className="m-5">
      <div className="text-4xl font-bold mb-3">
        Programming with Streams in Java
      </div>
      <div className="text-sm text-gray-500 mb-6">
        Maciej Szarliński · 8 Nov · 20 mins read
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>
  );
};
