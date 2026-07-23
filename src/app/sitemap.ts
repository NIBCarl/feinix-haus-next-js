import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://feinixhaus.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-07-23"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/the-haus-edit`,
      lastModified: new Date("2026-07-23"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pool-haus`,
      lastModified: new Date("2026-07-23"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/from-the-margins`,
      lastModified: new Date("2026-07-23"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-07-23"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
