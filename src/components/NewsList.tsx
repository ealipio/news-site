import { Article } from "@/types/categories";
import React from "react";
import Story from "./Story";

type Props = {
  news: Article[];
};

const NewsList: React.FC<Props> = ({ news }) => {
  return (
    <div className="grid grid-cols-1 gap-10 p-10 md:grid-cols-2 lg:grid-cols-3">
      {news.map((story) => (
        <Story key={story.url} story={story} />
      ))}
    </div>
  );
};

export default NewsList;
