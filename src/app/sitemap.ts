import type { MetadataRoute } from "next";
import { siteData, coursesData } from "@/data/academyData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteData.url.endsWith("/")
    ? siteData.url.slice(0, -1)
    : siteData.url;

  const staticRoutes = [
    "",
    "/about",
    "/courses",
    "/testimonials",
    "/placements",
    "/play-book",
    "/events",
    "/contact",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: "2026-11-17",
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/courses" ? 0.9 : 0.8,
  }));

  const courseEntries: MetadataRoute.Sitemap = coursesData.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: "2026-11-17",
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticEntries, ...courseEntries];
}
