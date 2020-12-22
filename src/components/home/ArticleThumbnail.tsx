import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Article } from "../../model/Model";

type Props = {
  article: Article;
};

export const ArticleThumbnail: React.FC<Props> = ({ article }) => {
  return (
    <div className="shadow m-2 p-2">
      <div className="text-sm mb-2">
        <FontAwesomeIcon icon={faUser} />
        {article.author}
      </div>
      <div className="font-bold mb-1">
        <a href={article.url}>{article.title}</a>
      </div>
      <div className="text-sm text-gray-400">
        {article.publishDate} · {article.readingTimeMins} min read
      </div>
    </div>
  );
};
