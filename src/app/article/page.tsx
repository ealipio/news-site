import LiveTimeStamp from "@/components/LiveTimeStamp";
import { Article as Story } from "@/types/categories";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params?: object;
  searchParams?: Story;
};
export default function Article({ searchParams }: Props) {
  const isEmptySearchParams =
    !searchParams || Object.entries(searchParams).length === 0;

  if (isEmptySearchParams) {
    return notFound();
  }

  const story: Story = searchParams;

  const imageCard = story.image && (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={story.image}
      className="h-50 mx-auto max-w-md rounded-lg object-cover shadow-md md:max-w-lg lg:max-w-xl"
      alt={story.title}
    />
  );

  return (
    <article>
      <section className="flex flex-col px-0 pb-24 lg:flex-row lg:px-10">
        {imageCard}

        <div className="px-10">
          <h1 className="header-title px-0 pb-2 no-underline">{story.title}</h1>

          <div className="flex space-x-2 divide-x-2">
            <h2 className="font-bold">{story.author || "unknown"}</h2>
            <h2 className="pl-4 font-bold">{story.source}</h2>
            <p className="pl-4">
              <LiveTimeStamp time={story.published_at} />

              {/* {JSON.stringify(story.published_at)} */}
            </p>
          </div>

          <p className="pt-4">{story.description}</p>
        </div>
      </section>
    </article>
  );
}
