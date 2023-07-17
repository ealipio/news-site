import { Article } from "@/types/categories";
import React from "react";
import ReadMoreButton from "./ReadMoreButton";

interface Props {
  story: Article;
}

const Article: React.FC<Props> = ({ story }) => {
  return (
    <article className="flex flex-col rounded-lg bg-slate-100 shadow-sm transition-all duration-200 ease-out hover:scale-105 hover:bg-slate-200 hover:shadow-lg dark:bg-slate-800">
      {story.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="h-56 w-full rounded-t-lg object-cover shadow-md"
          src={story.image}
          alt={story.title}
        />
      )}

      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col p-5">
          <h2 className="">{story.title}</h2>

          <section className="mt-2 flex-1">
            <p className="line-clamp-4 text-xs">{story.description}</p>
          </section>

          <footer className="ml-auto flex space-x-1 pt-5 text-right text-xs italic text-gray-400">
            <p>{story.source}</p>
            <p>{story.published_at}</p>
          </footer>
        </div>
        <ReadMoreButton story={story} />
      </div>
    </article>
  );
};

export default Article;
