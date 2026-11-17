import type { MetadataRoute } from "next";
import { siteData } from "@/data/academyData";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteData.url.endsWith("/")
    ? siteData.url.slice(0, -1)
    : siteData.url;

  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      {
        userAgent: "Claude-SearchBot",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
