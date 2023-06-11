import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "astro/config";

// Config
import { SITE } from "./src/config";

// Plugins
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import remarkSectionize from "remark-sectionize";
import rehypePrettyCode from "rehype-pretty-code";
import { remarkReadingTime, prettyCodeOptions } from "./src/utils/frontmatter";
import compress from "astro-compress";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({

    site: SITE.URL,

    base: SITE.baseURL,

    output: "static",

    trailingSlash: SITE.trailingSlash ? "always" : "never",

    integrations: [
        tailwind({
            config: { applyBaseStyles: false }
        }),
        vue(),
        sitemap(),
        mdx(),
        partytown({
            config: { forward: ["dataLayer.push"] },
        }),
        compress({ logger: 1 })
    ],

    markdown: {
        extendDefaultPlugins: true,
        syntaxHighlight: false,
        remarkPlugins: [remarkSectionize, remarkReadingTime],
        rehypePlugins: [[rehypePrettyCode, prettyCodeOptions()]],
    },

    experimental: {
        assets: true
    },

    vite: {
        resolve: {
            alias: {
                "~": path.resolve(__dirname, "./src"),
            }
        }
    }
});
