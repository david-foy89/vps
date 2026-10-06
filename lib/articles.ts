import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

export type Article = ArticleMeta & { content: string };

const directory = path.join(process.cwd(), "content", "articles");

function readArticle(filename: string): Article {
  const raw = fs.readFileSync(path.join(directory, filename), "utf8");
  const { data, content } = matter(raw);
  return {
    slug: String(data.slug),
    title: String(data.title),
    description: String(data.description),
    date: String(data.date),
    content,
  };
}

export function getArticles(): ArticleMeta[] {
  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => readArticle(file))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ content: _content, ...meta }) => meta);
}

export function getArticle(slug: string): Article | undefined {
  const match = fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => readArticle(file))
    .find((article) => article.slug === slug);
  return match;
}

export function formatArticleDate(isoDate: string) {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(year, month - 1, day));
}
