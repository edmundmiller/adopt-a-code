import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Adopt a Code",
      social: {
        github: "https://github.com/adoptacode",
      },
      sidebar: [
        {
          label: "Getting Started",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Projects",
          autogenerate: { directory: "projects" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
