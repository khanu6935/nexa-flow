import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
export default function sitemap(): MetadataRoute.Sitemap { const base="https://example.com"; const pages=["","/services","/solutions","/portfolio","/about","/contact","/privacy","/terms"]; return [...pages.map(url=>({url:`${base}${url}`,lastModified:new Date()})),...projects.map(p=>({url:`${base}/portfolio/${p.slug}`,lastModified:new Date()}))]; }
