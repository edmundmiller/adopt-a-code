import { defineCollection, z } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

function removeDupsAndLowerCase(array: string[]) {
  if (!array.length) return array;
  const lowercaseItems = array.map((str) => str.toLowerCase());
  const distinctItems = new Set(lowercaseItems);
  return Array.from(distinctItems);
}

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({
        description: z.string(),
        repo: z.string().url(),
        // type: z.enum(["tutorial", "guide", "reference"]).optional(),
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
        language: z.string(),
        doi: z.string().url().optional(),
        // NOTE Gonna need to add more of these
        // TODO Remove optional
        license: z.enum(["MIT", "GPL-3", "GPL", null]).optional(),
        mentor: z.string().optional(),
        adopter: z.string().optional(),
        newHome: z.string().url().optional(),
      }),
    }),
  }),
};
