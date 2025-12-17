"use client";

import type { ContentBlock } from "@/types/content-blocks";

// Block components
import { TextBlock } from "./TextBlock";
import { ImageGalleryBlock } from "./ImageGalleryBlock";
import { VideoPlayerBlock } from "./VideoPlayerBlock";
import { ImageGridBlock } from "./ImageGridBlock";
import { QuoteBlock } from "./QuoteBlock";
import { StatsBlock } from "./StatsBlock";
import { FullWidthImageBlock } from "./FullWidthImageBlock";
import { TwoColumnTextBlock } from "./TwoColumnTextBlock";
import { BeforeAfterBlock } from "./BeforeAfterBlock";
import { CodeBlockBlock } from "./CodeBlockBlock";

interface BlockRendererProps {
    blocks: ContentBlock[];
    color: string;
}

/**
 * BlockRenderer - Renders an array of content blocks
 * 
 * This component is the core of the modular content system.
 * Each project can have a unique combination of blocks
 * that best represent its content.
 * 
 * Sanity CMS-ready: When integrated with Sanity, the blocks
 * will come from the CMS and be rendered dynamically.
 */
export function BlockRenderer({ blocks, color }: BlockRendererProps) {
    return (
        <div className="space-y-0">
            {blocks.map((block) => {
                switch (block._type) {
                    case "text":
                        return <TextBlock key={block._key} block={block} color={color} />;

                    case "imageGallery":
                        return <ImageGalleryBlock key={block._key} block={block} color={color} />;

                    case "videoPlayer":
                        return <VideoPlayerBlock key={block._key} block={block} color={color} />;

                    case "imageGrid":
                        return <ImageGridBlock key={block._key} block={block} color={color} />;

                    case "quote":
                        return <QuoteBlock key={block._key} block={block} color={color} />;

                    case "stats":
                        return <StatsBlock key={block._key} block={block} color={color} />;

                    case "fullWidthImage":
                        return <FullWidthImageBlock key={block._key} block={block} color={color} />;

                    case "twoColumnText":
                        return <TwoColumnTextBlock key={block._key} block={block} color={color} />;

                    case "beforeAfter":
                        return <BeforeAfterBlock key={block._key} block={block} color={color} />;

                    case "codeBlock":
                        return <CodeBlockBlock key={block._key} block={block} color={color} />;

                    default:
                        // Unknown block type - skip but log in dev
                        console.warn(`Unknown block type: ${(block as ContentBlock)._type}`);
                        return null;
                }
            })}
        </div>
    );
}
