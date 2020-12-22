import React from "react";
import { ArticleThumbnail } from "./ArticleThumbnail";
import { ARTICLES } from "../../stub/Data";

export const HomeView = () => {
  return (
    <div className="grid grid-cols-4 max-w-3xl">
      {ARTICLES.map((a) => (
        <ArticleThumbnail article={a} />
      ))}
    </div>
  );
};
