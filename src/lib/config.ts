const isProduction = process.env.NODE_ENV === "production";

export const URL = isProduction
  ? "https://news-site.vercel.app/"
  : "http://localhost:3000";
