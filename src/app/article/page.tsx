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
      {imageCard}
      <section>{story.title}</section>
    </article>
  );
}
