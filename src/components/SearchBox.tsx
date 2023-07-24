"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {};

export default function SearchBox({}: Props) {
  const [input, setInput] = useState("");
  const router = useRouter();
  console.log(router);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
    if (!input) {
      return;
    }
    router.push(`/search?term=${input}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-6xl items-center justify-between px-5"
    >
      <input
        className="h-14 w-full flex-1 rounded-sm bg-transparent text-gray-500 placeholder-gray-500 outline-none dark:text-orange-500"
        type="text"
        placeholder="Search Keywords..."
        name="search-input"
        onChange={handleInputChange}
        value={input}
        id="search-input"
      />
      <button
        type="submit"
        className="text-orange-400 disabled:text-gray-400"
        disabled={!input}
      >
        Search
      </button>
    </form>
  );
}
