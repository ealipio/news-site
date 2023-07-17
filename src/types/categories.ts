export type Category =
  | "general"
  | "business"
  | "entertainment"
  | "health"
  | "science"
  | "sports"
  | "technology";

export type Article = {
  author: string | null;
  category: string;
  country: string;
  description: string;
  image: string | null;
  language: string;
  published_at: string;
  source: string;
  title: string;
  url: string;
};

export type Pagination = {
  count: number;
  limit: number;
  offset: number;
  total: number;
};

export type NewResponse = {
  pagination: Pagination;
  data: Article[];
};
