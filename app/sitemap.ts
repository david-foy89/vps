import type { MetadataRoute } from "next";
import { getArticles } from "@/lib/articles";
import { absoluteUrl, products, solutions, statePages } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/products",
    "/products/vps",
    "/solutions",
    "/service",
    "/service-area",
    "/resources",
    "/resources/catalog",
    "/about",
    "/contact",
    "/privacy",
    ...products.map((product) => `/products/${product.slug}`),
    ...solutions.map((solution) => `/solutions/${solution.slug}`),
    ...statePages.map((state) => `/service-area/${state.slug}`),
    ...getArticles().map((article) => `/resources/${article.slug}`),
  ];

  return paths.map((path) => ({
    url: absoluteUrl(path === "/" ? "/" : `${path.replace(/\/$/, "")}/`),
    lastModified: new Date(),
  }));
}
