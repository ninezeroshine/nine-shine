import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

// Sanity project configuration
// Replace these with your own Sanity project credentials
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
    name: "nine-shine-studio",
    title: "Nine Shine Studio",

    projectId,
    dataset,

    plugins: [
        structureTool(),
        visionTool({ defaultApiVersion: "2024-01-01" }),
    ],

    schema: {
        types: schemaTypes,
    },

    // Document internationalization note:
    // Each document has 'en' and 'ru' fields for localized content
});
