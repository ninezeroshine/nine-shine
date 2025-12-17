import { defineField, defineType } from "sanity";

/**
 * Project Schema for Sanity CMS
 * 
 * Supports localized content (EN/RU) using object fields with language keys.
 * Content blocks allow flexible, modular layouts per project.
 */
export default defineType({
    name: "project",
    title: "Project",
    type: "document",
    groups: [
        { name: "info", title: "Basic Info" },
        { name: "content", title: "Content Blocks" },
        { name: "seo", title: "SEO" },
    ],
    fields: [
        // Slug
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            group: "info",
            options: {
                source: "title.en",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),

        // Title (localized)
        defineField({
            name: "title",
            title: "Title",
            type: "object",
            group: "info",
            fields: [
                { name: "en", title: "English", type: "string" },
                { name: "ru", title: "Russian", type: "string" },
            ],
            validation: (Rule) => Rule.required(),
        }),

        // Description (localized)
        defineField({
            name: "description",
            title: "Description",
            type: "object",
            group: "info",
            fields: [
                { name: "en", title: "English", type: "text", rows: 3 },
                { name: "ru", title: "Russian", type: "text", rows: 3 },
            ],
        }),

        // Category
        defineField({
            name: "category",
            title: "Category",
            type: "string",
            group: "info",
            options: {
                list: [
                    { title: "Animation", value: "animation" },
                    { title: "Graphics", value: "graphics" },
                    { title: "Web", value: "web" },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),

        // Client (localized)
        defineField({
            name: "client",
            title: "Client",
            type: "object",
            group: "info",
            fields: [
                { name: "en", title: "English", type: "string" },
                { name: "ru", title: "Russian", type: "string" },
            ],
        }),

        // Year
        defineField({
            name: "year",
            title: "Year",
            type: "string",
            group: "info",
        }),

        // Services (localized array)
        defineField({
            name: "services",
            title: "Services",
            type: "object",
            group: "info",
            fields: [
                {
                    name: "en",
                    title: "English",
                    type: "array",
                    of: [{ type: "string" }],
                },
                {
                    name: "ru",
                    title: "Russian",
                    type: "array",
                    of: [{ type: "string" }],
                },
            ],
        }),

        // Hero Image
        defineField({
            name: "heroImage",
            title: "Hero Image",
            type: "image",
            group: "info",
            options: {
                hotspot: true,
            },
        }),

        // Accent Color
        defineField({
            name: "color",
            title: "Accent Color",
            type: "string",
            group: "info",
            options: {
                list: [
                    { title: "Orange", value: "#f97316" },
                    { title: "Purple", value: "#8b5cf6" },
                    { title: "Cyan", value: "#06b6d4" },
                ],
            },
        }),

        // Order (for sorting)
        defineField({
            name: "order",
            title: "Display Order",
            type: "number",
            group: "info",
            initialValue: 0,
        }),

        // Content Blocks
        defineField({
            name: "contentBlocks",
            title: "Content Blocks",
            type: "array",
            group: "content",
            of: [
                { type: "textBlock" },
                { type: "imageGalleryBlock" },
                { type: "videoPlayerBlock" },
                { type: "imageGridBlock" },
                { type: "quoteBlock" },
                { type: "statsBlock" },
                { type: "fullWidthImageBlock" },
                { type: "twoColumnTextBlock" },
                { type: "beforeAfterBlock" },
                { type: "codeBlockSchema" },
            ],
        }),
    ],

    preview: {
        select: {
            title: "title.en",
            subtitle: "category",
            media: "heroImage",
        },
    },
});
