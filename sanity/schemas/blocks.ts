import { defineField, defineType } from "sanity";

// Text Block
export const textBlock = defineType({
    name: "textBlock",
    title: "Text Block",
    type: "object",
    fields: [
        defineField({
            name: "heading",
            title: "Heading",
            type: "object",
            fields: [
                { name: "en", title: "English", type: "string" },
                { name: "ru", title: "Russian", type: "string" },
            ],
        }),
        defineField({
            name: "content",
            title: "Content",
            type: "object",
            fields: [
                { name: "en", title: "English", type: "text", rows: 4 },
                { name: "ru", title: "Russian", type: "text", rows: 4 },
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "align",
            title: "Alignment",
            type: "string",
            options: {
                list: [
                    { title: "Left", value: "left" },
                    { title: "Center", value: "center" },
                ],
            },
            initialValue: "left",
        }),
    ],
    preview: {
        select: { title: "heading.en", subtitle: "content.en" },
        prepare({ title, subtitle }) {
            return {
                title: title || "Text Block",
                subtitle: subtitle?.substring(0, 50) + "...",
            };
        },
    },
});

// Image Gallery Block
export const imageGalleryBlock = defineType({
    name: "imageGalleryBlock",
    title: "Image Gallery",
    type: "object",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "object",
            fields: [
                { name: "en", title: "English", type: "string" },
                { name: "ru", title: "Russian", type: "string" },
            ],
        }),
        defineField({
            name: "images",
            title: "Images",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "image", title: "Image", type: "image", options: { hotspot: true } },
                        {
                            name: "alt",
                            title: "Alt Text",
                            type: "object",
                            fields: [
                                { name: "en", title: "English", type: "string" },
                                { name: "ru", title: "Russian", type: "string" },
                            ],
                        },
                        {
                            name: "caption",
                            title: "Caption",
                            type: "object",
                            fields: [
                                { name: "en", title: "English", type: "string" },
                                { name: "ru", title: "Russian", type: "string" },
                            ],
                        },
                    ],
                },
            ],
            validation: (Rule) => Rule.required().min(1),
        }),
    ],
    preview: {
        select: { title: "title.en", images: "images" },
        prepare({ title, images }) {
            return {
                title: title || "Image Gallery",
                subtitle: `${images?.length || 0} images`,
            };
        },
    },
});

// Video Player Block
export const videoPlayerBlock = defineType({
    name: "videoPlayerBlock",
    title: "Video Player",
    type: "object",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "object",
            fields: [
                { name: "en", title: "English", type: "string" },
                { name: "ru", title: "Russian", type: "string" },
            ],
        }),
        defineField({
            name: "videoUrl",
            title: "Video URL",
            type: "url",
            description: "YouTube, Vimeo, or direct video URL",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "poster",
            title: "Poster Image",
            type: "image",
        }),
        defineField({
            name: "aspectRatio",
            title: "Aspect Ratio",
            type: "string",
            options: {
                list: [
                    { title: "16:9", value: "16:9" },
                    { title: "4:3", value: "4:3" },
                    { title: "1:1", value: "1:1" },
                    { title: "9:16", value: "9:16" },
                ],
            },
            initialValue: "16:9",
        }),
    ],
    preview: {
        select: { title: "title.en", url: "videoUrl" },
        prepare({ title, url }) {
            return {
                title: title || "Video Player",
                subtitle: url,
            };
        },
    },
});

// Image Grid Block
export const imageGridBlock = defineType({
    name: "imageGridBlock",
    title: "Image Grid",
    type: "object",
    fields: [
        defineField({
            name: "columns",
            title: "Columns",
            type: "number",
            options: {
                list: [
                    { title: "2 Columns", value: 2 },
                    { title: "3 Columns", value: 3 },
                    { title: "4 Columns", value: 4 },
                ],
            },
            initialValue: 2,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "gap",
            title: "Gap Size",
            type: "string",
            options: {
                list: [
                    { title: "Small", value: "small" },
                    { title: "Medium", value: "medium" },
                    { title: "Large", value: "large" },
                ],
            },
            initialValue: "medium",
        }),
        defineField({
            name: "images",
            title: "Images",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "image", title: "Image", type: "image", options: { hotspot: true } },
                        {
                            name: "alt",
                            title: "Alt Text",
                            type: "object",
                            fields: [
                                { name: "en", title: "English", type: "string" },
                                { name: "ru", title: "Russian", type: "string" },
                            ],
                        },
                    ],
                },
            ],
            validation: (Rule) => Rule.required().min(1),
        }),
    ],
    preview: {
        select: { columns: "columns", images: "images" },
        prepare({ columns, images }) {
            return {
                title: `Image Grid (${columns} cols)`,
                subtitle: `${images?.length || 0} images`,
            };
        },
    },
});

// Quote Block
export const quoteBlock = defineType({
    name: "quoteBlock",
    title: "Quote",
    type: "object",
    fields: [
        defineField({
            name: "text",
            title: "Quote Text",
            type: "object",
            fields: [
                { name: "en", title: "English", type: "text", rows: 3 },
                { name: "ru", title: "Russian", type: "text", rows: 3 },
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "author",
            title: "Author",
            type: "string",
        }),
        defineField({
            name: "role",
            title: "Role / Position",
            type: "object",
            fields: [
                { name: "en", title: "English", type: "string" },
                { name: "ru", title: "Russian", type: "string" },
            ],
        }),
    ],
    preview: {
        select: { text: "text.en", author: "author" },
        prepare({ text, author }) {
            return {
                title: "Quote",
                subtitle: `${author ? author + ": " : ""}"${text?.substring(0, 40)}..."`,
            };
        },
    },
});

// Stats Block
export const statsBlock = defineType({
    name: "statsBlock",
    title: "Stats",
    type: "object",
    fields: [
        defineField({
            name: "items",
            title: "Stats",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "value", title: "Value", type: "string" },
                        {
                            name: "label",
                            title: "Label",
                            type: "object",
                            fields: [
                                { name: "en", title: "English", type: "string" },
                                { name: "ru", title: "Russian", type: "string" },
                            ],
                        },
                    ],
                },
            ],
            validation: (Rule) => Rule.required().min(1),
        }),
    ],
    preview: {
        select: { items: "items" },
        prepare({ items }) {
            return {
                title: "Stats Block",
                subtitle: `${items?.length || 0} stats`,
            };
        },
    },
});

// Full Width Image Block
export const fullWidthImageBlock = defineType({
    name: "fullWidthImageBlock",
    title: "Full Width Image",
    type: "object",
    fields: [
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "alt",
            title: "Alt Text",
            type: "object",
            fields: [
                { name: "en", title: "English", type: "string" },
                { name: "ru", title: "Russian", type: "string" },
            ],
        }),
        defineField({
            name: "caption",
            title: "Caption",
            type: "object",
            fields: [
                { name: "en", title: "English", type: "string" },
                { name: "ru", title: "Russian", type: "string" },
            ],
        }),
    ],
    preview: {
        select: { media: "image", alt: "alt.en" },
        prepare({ media, alt }) {
            return {
                title: "Full Width Image",
                subtitle: alt,
                media,
            };
        },
    },
});

// Two Column Text Block
export const twoColumnTextBlock = defineType({
    name: "twoColumnTextBlock",
    title: "Two Column Text",
    type: "object",
    fields: [
        defineField({
            name: "leftHeading",
            title: "Left Heading",
            type: "object",
            fields: [
                { name: "en", title: "English", type: "string" },
                { name: "ru", title: "Russian", type: "string" },
            ],
        }),
        defineField({
            name: "leftContent",
            title: "Left Content",
            type: "object",
            fields: [
                { name: "en", title: "English", type: "text", rows: 4 },
                { name: "ru", title: "Russian", type: "text", rows: 4 },
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "rightHeading",
            title: "Right Heading",
            type: "object",
            fields: [
                { name: "en", title: "English", type: "string" },
                { name: "ru", title: "Russian", type: "string" },
            ],
        }),
        defineField({
            name: "rightContent",
            title: "Right Content",
            type: "object",
            fields: [
                { name: "en", title: "English", type: "text", rows: 4 },
                { name: "ru", title: "Russian", type: "text", rows: 4 },
            ],
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: { left: "leftHeading.en", right: "rightHeading.en" },
        prepare({ left, right }) {
            return {
                title: "Two Column Text",
                subtitle: `${left || "Left"} | ${right || "Right"}`,
            };
        },
    },
});

// Before/After Block
export const beforeAfterBlock = defineType({
    name: "beforeAfterBlock",
    title: "Before / After",
    type: "object",
    fields: [
        defineField({
            name: "beforeImage",
            title: "Before Image",
            type: "image",
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "afterImage",
            title: "After Image",
            type: "image",
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "beforeLabel",
            title: "Before Label",
            type: "object",
            fields: [
                { name: "en", title: "English", type: "string" },
                { name: "ru", title: "Russian", type: "string" },
            ],
        }),
        defineField({
            name: "afterLabel",
            title: "After Label",
            type: "object",
            fields: [
                { name: "en", title: "English", type: "string" },
                { name: "ru", title: "Russian", type: "string" },
            ],
        }),
    ],
    preview: {
        prepare() {
            return {
                title: "Before / After Comparison",
            };
        },
    },
});

// Code Block
export const codeBlockSchema = defineType({
    name: "codeBlockSchema",
    title: "Code Block",
    type: "object",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "object",
            fields: [
                { name: "en", title: "English", type: "string" },
                { name: "ru", title: "Russian", type: "string" },
            ],
        }),
        defineField({
            name: "language",
            title: "Language",
            type: "string",
            options: {
                list: [
                    { title: "TypeScript", value: "typescript" },
                    { title: "JavaScript", value: "javascript" },
                    { title: "CSS", value: "css" },
                    { title: "HTML", value: "html" },
                    { title: "JSON", value: "json" },
                    { title: "Bash", value: "bash" },
                ],
            },
            initialValue: "typescript",
        }),
        defineField({
            name: "code",
            title: "Code",
            type: "text",
            rows: 10,
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: { title: "title.en", language: "language" },
        prepare({ title, language }) {
            return {
                title: title || "Code Block",
                subtitle: language,
            };
        },
    },
});
