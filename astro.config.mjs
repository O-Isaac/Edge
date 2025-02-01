import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import metatags from "./meta.config.mjs";
import starlightSidebarTopicsDropdown from 'starlight-sidebar-topics-dropdown'

// https://astro.build/config
export default defineConfig({
  site: "https://edge-ui-docs.vercel.app",
  redirects: {
    "/documentation": "/mods/ui",
  },
  integrations: [
    starlight({
      title: "Docs",
      head: metatags,
      logo: {
        src: "./src/assets/logo.webp",
      },
      social: {
        discord: "https://discord.gg/h2xnrKEsUp",
        patreon: "https://www.patreon.com/EdgeUI",
      },
      favicon: "/favicon.png",
      customCss: ["./src/styles/custom.css"],
      plugins: [
        starlightSidebarTopicsDropdown([
          { 
            label: "Guides", 
            icon: "open-book", 
            link: "/guides/skyhud",
            items: [
              { label: "Guides", autogenerate: { directory: "guides" }},
            ]
          },
          { 
            label: "Mods", 
            icon: "puzzle", 
            link: "/mods/ui",
            items: [
              { label: "Mods", badge: { text: "New", variant: "success" }, autogenerate: { directory: "mods" }},
            ]
          },
        ])
      ],
      components: {
        PageTitle: "@components/page-title.astro"
      },
    }),
  ],
});
