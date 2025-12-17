"use client";

import { BlockRenderer } from "@/components/blocks";
import { projectBlocks } from "@/data/project-blocks";

interface ProjectContentProps {
    slug: string;
}

export function ProjectContent({ slug }: ProjectContentProps) {
    // Get blocks for this project
    const blocks = projectBlocks[slug] || [];

    // Get color from first text block or default
    const color = blocks.length > 0
        ? getProjectColor(slug)
        : "#8b5cf6";

    return (
        <section className="py-20 md:py-28">
            <div className="container-wide max-w-4xl mx-auto">
                <BlockRenderer blocks={blocks} color={color} />
            </div>
        </section>
    );
}

// Helper to get project color
function getProjectColor(slug: string): string {
    const colors: Record<string, string> = {
        "brand-motion": "#f97316",
        "visual-identity": "#8b5cf6",
        "ecommerce-platform": "#06b6d4",
        "product-showcase": "#f97316",
        "corporate-website": "#06b6d4",
        "packaging-design": "#8b5cf6",
    };
    return colors[slug] || "#8b5cf6";
}
