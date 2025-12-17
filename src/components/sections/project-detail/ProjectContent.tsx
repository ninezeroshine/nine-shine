"use client";

import { BlockRenderer } from "@/components/blocks";
import { projectBlocks } from "@/data/project-blocks";

interface ProjectContentProps {
    slug: string;
    blocks?: any[]; // Sanity blocks passed from parent
}

export function ProjectContent({ slug, blocks }: ProjectContentProps) {
    // Fallback to local blocks content is not yet fully migrated to Sanity blocks structure
    // We prioritize local content for the rich blocks for now
    const content = projectBlocks[slug] || [];

    // Get color from helper
    const color = getProjectColor(slug);

    return (
        <section className="py-20 md:py-28">
            <div className="container-wide max-w-4xl mx-auto">
                <BlockRenderer blocks={content} color={color} />
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
