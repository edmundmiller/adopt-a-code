import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import starlightThemeRapide from "starlight-theme-rapide";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Adopt a Code",
      social: {
        github: "https://github.com/adoptacode",
      },
      plugins: [starlightLinksValidator(), starlightThemeRapide()],
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
      components: {
        MarkdownContent: "./src/components/ProjectMarkdownContent.astro",
        Pagination: "./src/components/CustomPagination.astro",
      },
    }),
  ],
});
