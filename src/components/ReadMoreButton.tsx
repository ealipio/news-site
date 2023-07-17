"use client";
import { Article } from "@/types/categories";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  story: Article;
};

export default function ReadMoreButton({ story }: Props) {
  const router = useRouter();
  const handleClick = () => {
    const queryString = Object.entries(story)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    const url = `/article?${queryString}`;
    console.log(url);
    router.push(url);
  };
  return (
    <div>
      <button
        className="h-10 w-full rounded-b-lg bg-orange-400 hover:bg-orange-500 dark:text-gray-900"
        onClick={handleClick}
      >
        Read More
      </button>
    </div>
  );
}
