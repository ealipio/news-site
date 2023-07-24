import NewsList from "@/components/NewsList";
import { categories } from "@/constants/categories";
import { fetchNews } from "@/lib/fetchNews";
import { Category, NewResponse } from "@/types/categories";

type Props = {
  params: { category: Category };
};
export default async function Page({ params: { category } }: Props) {
  const news: NewResponse = await fetchNews(category);

  return (
    <div>
      <h1 className="header-title">{category}</h1>
      <NewsList news={news.data} />
    </div>
  );
}

export async function generateStaticParams() {
  return categories.map((category) => ({ category }));
}
