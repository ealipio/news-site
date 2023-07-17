//import NewsList from '@/components/NewsList'
import { categories } from "@/constants/categories";
import { fetchNews } from "@/lib/fetchNews";
import { NewResponse } from "@/types/categories";
import * as React from "react";
import NewsList from "./NewsList";

interface IHomeProps {}

export default async function Home(props: IHomeProps) {
  const news: NewResponse = await fetchNews(categories.join(","));

  return (
    <div>
      <NewsList news={news.data} />
    </div>
  );
}
