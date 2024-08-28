import { defineCollection, z } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

function removeDupsAndLowerCase(array: string[]) {
  if (!array.length) return array;
  const lowercaseItems = array.map((str) => str.toLowerCase());
  const distinctItems = new Set(lowercaseItems);
  return Array.from(distinctItems);
}

export const baseSchema = z.object({});

// TODO
// Ideally I'd like to have a "docs", and a "projects" schema, and make the schema stricter.
// This will work for now though
export const projectSchema = baseSchema.extend({
  description: z.string(),
  repo: z.string().url(),
  tags: z
    .array(z.string())
    .default([])
    .transform(removeDupsAndLowerCase)
    .optional(),
  // FIXME Can probably fetch this with the repo...
  lastCommitDate: z
    .string()
    .or(z.date())
    .transform((val) => new Date(val))
    .optional(),
  language: z.string().optional(), // FIXME Remove optional
  doi: z.string().url().optional(),
  // NOTE Gonna need to add more of these
  // TODO Remove optional
  license: z.enum(["MIT", "GPL-3", "GPL", null]).optional(),
  mentor: z.string().optional(),
  adopter: z.string().optional(),
  newHome: z.string().url().optional(),
});

export const docsCollectionSchema = z.union([baseSchema, projectSchema]);

export const collections = {
  docs: defineCollection({
    schema: docsSchema({ extend: docsCollectionSchema }),
  }),
};
