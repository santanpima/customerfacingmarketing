import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://santan.ai",
  output: "static",
  trailingSlash: "never",
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, "") || "/";
        return path !== "/contact/thanks" && path !== "/404";
      },
    }),
  ],
  redirects: {
    "/pricing": {
      status: 301,
      destination: "/buying",
    },
    "/demo": {
      status: 301,
      destination: "/contact?intent=demo",
    },
    "/quote": {
      status: 301,
      destination: "/contact?intent=quote",
    },
  },
});
