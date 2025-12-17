// Content Block Types for Project Pages
// These types are designed to be Sanity CMS-ready

export type BlockType =
    | "text"
    | "imageGallery"
    | "videoPlayer"
    | "imageGrid"
    | "quote"
    | "stats"
    | "fullWidthImage"
    | "twoColumnText"
    | "beforeAfter"
    | "codeBlock";

// Base block interface
interface BaseBlock {
    _key: string; // Unique key for React rendering
    _type: BlockType;
}

// Text Block - Rich text content
export interface TextBlock extends BaseBlock {
    _type: "text";
    heading?: string;
    content: string;
    align?: "left" | "center";
}

// Image Gallery - Horizontal scrolling gallery
export interface ImageGalleryBlock extends BaseBlock {
    _type: "imageGallery";
    title?: string;
    images: {
        src: string;
        alt: string;
        caption?: string;
    }[];
}

// Video Player - Embedded video
export interface VideoPlayerBlock extends BaseBlock {
    _type: "videoPlayer";
    title?: string;
    videoUrl: string; // YouTube, Vimeo, or direct URL
    poster?: string;
    aspectRatio?: "16:9" | "4:3" | "1:1" | "9:16";
}

// Image Grid - 2, 3, or 4 column grid
export interface ImageGridBlock extends BaseBlock {
    _type: "imageGrid";
    columns: 2 | 3 | 4;
    gap?: "small" | "medium" | "large";
    images: {
        src: string;
        alt: string;
    }[];
}

// Quote Block - Highlighted testimonial/quote
export interface QuoteBlock extends BaseBlock {
    _type: "quote";
    text: string;
    author?: string;
    role?: string;
}

// Stats Block - Key metrics display
export interface StatsBlock extends BaseBlock {
    _type: "stats";
    items: {
        value: string;
        label: string;
    }[];
}

// Full Width Image - Hero-style image
export interface FullWidthImageBlock extends BaseBlock {
    _type: "fullWidthImage";
    src: string;
    alt: string;
    caption?: string;
}

// Two Column Text - Side by side text sections
export interface TwoColumnTextBlock extends BaseBlock {
    _type: "twoColumnText";
    leftHeading?: string;
    leftContent: string;
    rightHeading?: string;
    rightContent: string;
}

// Before/After - Comparison slider
export interface BeforeAfterBlock extends BaseBlock {
    _type: "beforeAfter";
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
}

// Code Block - For technical projects
export interface CodeBlockBlock extends BaseBlock {
    _type: "codeBlock";
    title?: string;
    language: string;
    code: string;
}

// Union of all block types
export type ContentBlock =
    | TextBlock
    | ImageGalleryBlock
    | VideoPlayerBlock
    | ImageGridBlock
    | QuoteBlock
    | StatsBlock
    | FullWidthImageBlock
    | TwoColumnTextBlock
    | BeforeAfterBlock
    | CodeBlockBlock;

// Project with modular content
export interface Project {
    slug: string;
    title: string;
    category: "animation" | "graphics" | "web";
    description: string;
    client: string;
    year: string;
    services: string[];
    heroImage: string;
    color: string;
    contentBlocks: ContentBlock[];
}
