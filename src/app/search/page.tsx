import NewsList from "@/components/NewsList";
import { fetchNews } from "@/lib/fetchNews";
import { NewResponse } from "@/types/categories";

type Props = {
  params?: object;
  searchParams: { term: string };
};
export default async function search({ searchParams }: Props) {
  const { term } = searchParams;
  const news: NewResponse = await fetchNews("general", term, true);

  return (
    <div>
      <h1 className="header-title">Search Results for: {term}</h1>
      <NewsList news={news.data} />
    </div>
  );
}
