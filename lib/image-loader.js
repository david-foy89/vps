export default function imageLoader({ src, width, quality }) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const path = src.startsWith("/") ? src : `/${src}`;
  const prefixed = base && path !== base && !path.startsWith(`${base}/`) ? `${base}${path}` : path;
  const params = new URLSearchParams();
  if (width) params.set("w", String(width));
  if (quality) params.set("q", String(quality));
  const query = params.toString();
  return query ? `${prefixed}?${query}` : prefixed;
}

