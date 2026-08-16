import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/programs", "/ages-4-6", "/ages-7-10", "/ages-11-13", "/high-school", "/adults", "/camps-and-parties", "/gallery", "/about", "/contact"];
  return routes.map((route) => ({ url: `${siteUrl}${route}`, lastModified: new Date(), changeFrequency: "monthly", priority: route === "" ? 1 : 0.8 }));
}
