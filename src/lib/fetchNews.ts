import { query } from "./../constants/graphql";
import { Category } from "@/types/categories";
import { URL } from "./config";

export async function fetchNews(
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean,
) {
  // const accessKey =
  //   process.env.MEDIA_STACK_KEY || "--to-deploy-without-errors--";
  // if (!accessKey) {
  //   throw new Error("please check MEDIA_STACK_KEY environment variable");
  // }
  //const url = `http://api.mediastack.com/v1/news?access_key=${accessKey}`;
  //const response = await fetch(`${URL}/api?access_key=${accessKey}`, {
  const response = await fetch(`${URL}/api`, {
    method: "POST",
    cache: isDynamic ? "no-cache" : "default",
    next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        categories: category,
        keywords,
      },
    }),
  });
  const data = await response.json();
  //const articlesWithImage = data.filter((article: Article) => article.image);
  return data;
}
