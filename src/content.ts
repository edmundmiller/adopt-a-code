import { getCollection } from "astro:content";
import { isProjectsEntry } from "./content/config";

export const allPages = await getCollection("docs");
export const projectsPages = allPages.filter(isProjectsEntry);
