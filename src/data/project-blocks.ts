import type { ContentBlock } from "@/types/content-blocks";

/**
 * Project Content Blocks Data
 * 
 * Each project has its own unique combination of content blocks.
 * This structure is Sanity CMS-ready - when integrated,
 * the blocks will come from Sanity and this file becomes obsolete.
 * 
 * Available block types:
 * - text: Rich text with optional heading
 * - imageGallery: Horizontal scrolling gallery
 * - videoPlayer: YouTube/Vimeo/direct video embed
 * - imageGrid: 2-4 column image grid
 * - quote: Client testimonial/quote
 * - stats: Key metrics display
 * - fullWidthImage: Hero-style full-width image
 * - twoColumnText: Side-by-side text sections
 * - beforeAfter: Comparison slider
 * - codeBlock: Code snippet display
 */

export const projectBlocks: Record<string, ContentBlock[]> = {
    "brand-motion": [
        {
            _key: "bm-1",
            _type: "text",
            heading: "Overview",
            content: "We created a comprehensive motion identity system for TechVibe, a cutting-edge technology startup. The project involved developing dynamic logo animations, brand transitions, and a complete motion toolkit for their digital presence.",
        },
        {
            _key: "bm-2",
            _type: "stats",
            items: [
                { value: "40%", label: "Brand Recognition Increase" },
                { value: "12", label: "Animation Assets" },
                { value: "4K", label: "Resolution Output" },
                { value: "60fps", label: "Frame Rate" },
            ],
        },
        {
            _key: "bm-3",
            _type: "videoPlayer",
            title: "Brand Animation Showcase",
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            poster: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&q=80",
            aspectRatio: "16:9",
        },
        {
            _key: "bm-4",
            _type: "twoColumnText",
            leftHeading: "The Challenge",
            leftContent: "TechVibe needed to stand out in a crowded tech market while maintaining a professional yet approachable brand image. They required a versatile animation system that could work across social media, presentations, and their product interface.",
            rightHeading: "Our Solution",
            rightContent: "We developed a modular animation system with consistent motion principles. Each element was designed to be flexible yet cohesive, allowing the brand to express different moods while maintaining recognition.",
        },
        {
            _key: "bm-5",
            _type: "imageGallery",
            title: "Motion Stills",
            images: [
                { src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80", alt: "Animation frame 1", caption: "Logo reveal sequence" },
                { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", alt: "Animation frame 2", caption: "Transition effect" },
                { src: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80", alt: "Animation frame 3", caption: "Motion graphics" },
                { src: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=800&q=80", alt: "Animation frame 4", caption: "Final composition" },
            ],
        },
        {
            _key: "bm-6",
            _type: "quote",
            text: "The motion identity Nine Shine created for us perfectly captures our brand's energy and innovation. Every animation feels intentional and on-brand.",
            author: "Alex Chen",
            role: "CEO, TechVibe Inc.",
        },
    ],

    "visual-identity": [
        {
            _key: "vi-1",
            _type: "text",
            heading: "Project Overview",
            content: "A complete visual identity transformation for Lumina Studio, a creative design agency. We crafted a sophisticated brand system that reflects their innovative approach to design and positions them as industry leaders.",
        },
        {
            _key: "vi-2",
            _type: "fullWidthImage",
            src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80",
            alt: "Lumina Studio brand overview",
            caption: "The complete brand identity system in action",
        },
        {
            _key: "vi-3",
            _type: "imageGrid",
            columns: 3,
            gap: "medium",
            images: [
                { src: "https://images.unsplash.com/photo-1634942536790-dad7c0ca5fad?w=800&q=80", alt: "Logo variations" },
                { src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80", alt: "Color palette" },
                { src: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80", alt: "Typography" },
                { src: "https://images.unsplash.com/photo-1606115915090-be18fea23ec7?w=800&q=80", alt: "Business cards" },
                { src: "https://images.unsplash.com/photo-1612832164313-ac0d7e07b5cf?w=800&q=80", alt: "Stationery" },
                { src: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80", alt: "Packaging" },
            ],
        },
        {
            _key: "vi-4",
            _type: "twoColumnText",
            leftHeading: "Challenge",
            leftContent: "Lumina needed a brand identity that would position them as industry leaders while showcasing their creative capabilities and attention to detail.",
            rightHeading: "Solution",
            rightContent: "We created a minimal yet impactful visual system with a distinctive color palette and custom typography that communicates premium quality and creative excellence.",
        },
        {
            _key: "vi-5",
            _type: "stats",
            items: [
                { value: "60%", label: "Client Inquiries Increase" },
                { value: "50+", label: "Brand Assets Created" },
                { value: "4", label: "Award Nominations" },
            ],
        },
        {
            _key: "vi-6",
            _type: "quote",
            text: "The rebrand exceeded our expectations. Nine Shine truly understood our vision and translated it into a brand identity that speaks to who we are.",
            author: "Maria Santos",
            role: "Creative Director, Lumina Studio",
        },
    ],

    "ecommerce-platform": [
        {
            _key: "ec-1",
            _type: "text",
            heading: "Project Overview",
            content: "A premium e-commerce experience for Artisan Goods, featuring handcrafted products from around the world. The platform combines beautiful aesthetics with seamless shopping functionality, celebrating the artisan nature of each product.",
        },
        {
            _key: "ec-2",
            _type: "imageGrid",
            columns: 2,
            gap: "large",
            images: [
                { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", alt: "Homepage design" },
                { src: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=800&q=80", alt: "Product page" },
            ],
        },
        {
            _key: "ec-3",
            _type: "twoColumnText",
            leftHeading: "The Challenge",
            leftContent: "The client needed an e-commerce platform that could showcase the craftsmanship and story behind each product while providing a frictionless shopping experience that converts visitors into customers.",
            rightHeading: "Our Approach",
            rightContent: "We designed an immersive shopping experience with rich product storytelling, smooth animations, and an intuitive checkout process that celebrates the artisan nature of the products.",
        },
        {
            _key: "ec-4",
            _type: "beforeAfter",
            beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80",
            afterImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
            beforeLabel: "Old Design",
            afterLabel: "New Design",
        },
        {
            _key: "ec-5",
            _type: "stats",
            items: [
                { value: "45%", label: "Conversion Rate Increase" },
                { value: "30%", label: "Higher AOV" },
                { value: "2.5s", label: "Avg. Page Load" },
                { value: "98%", label: "Mobile Score" },
            ],
        },
        {
            _key: "ec-6",
            _type: "codeBlock",
            title: "Performance Optimizations",
            language: "typescript",
            code: `// Optimized image loading with blur placeholder
export async function getProductImage(slug: string) {
  const product = await sanity.fetch(query, { slug });
  return {
    src: urlFor(product.image).width(800).url(),
    blurDataURL: product.image.asset.metadata.lqip,
    placeholder: 'blur' as const,
  };
}`,
        },
    ],

    "product-showcase": [
        {
            _key: "ps-1",
            _type: "text",
            heading: "Project Overview",
            content: "A series of stunning 3D product animations showcasing ElectraTech's latest consumer electronics line. The animations were designed to highlight product features in an engaging way for digital advertising and social media campaigns.",
        },
        {
            _key: "ps-2",
            _type: "videoPlayer",
            title: "Product Animation Reel",
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            poster: "https://images.unsplash.com/photo-1635405074683-96d6921a2a68?w=1920&q=80",
            aspectRatio: "16:9",
        },
        {
            _key: "ps-3",
            _type: "imageGallery",
            title: "Animation Frames",
            images: [
                { src: "https://images.unsplash.com/photo-1635405074683-96d6921a2a68?w=800&q=80", alt: "Frame 1", caption: "Hero shot" },
                { src: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80", alt: "Frame 2", caption: "Detail view" },
                { src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80", alt: "Frame 3", caption: "Lifestyle shot" },
            ],
        },
        {
            _key: "ps-4",
            _type: "stats",
            items: [
                { value: "2M+", label: "Video Views" },
                { value: "35%", label: "Sales Increase" },
                { value: "8", label: "Animations Created" },
            ],
        },
        {
            _key: "ps-5",
            _type: "quote",
            text: "The animations perfectly showcased our products' features. The attention to detail in lighting and movement made our electronics look stunning.",
            author: "James Lee",
            role: "Marketing Director, ElectraTech",
        },
    ],

    "corporate-website": [
        {
            _key: "cw-1",
            _type: "text",
            heading: "Project Overview",
            content: "A sophisticated corporate website for Horizon Ventures, a leading investment firm. The design balances professionalism with modern aesthetics to inspire confidence in potential partners and investors.",
        },
        {
            _key: "cw-2",
            _type: "fullWidthImage",
            src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
            alt: "Horizon Ventures website",
        },
        {
            _key: "cw-3",
            _type: "twoColumnText",
            leftHeading: "Challenge",
            leftContent: "Creating a digital presence that conveys trust, expertise, and innovation while making complex investment information accessible and engaging to diverse stakeholders.",
            rightHeading: "Solution",
            rightContent: "We designed a clean, professional website with subtle animations and clear information architecture that guides visitors through the firm's story and services.",
        },
        {
            _key: "cw-4",
            _type: "imageGrid",
            columns: 2,
            gap: "medium",
            images: [
                { src: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&q=80", alt: "Desktop view" },
                { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80", alt: "Mobile view" },
            ],
        },
        {
            _key: "cw-5",
            _type: "stats",
            items: [
                { value: "55%", label: "Lead Generation Increase" },
                { value: "A+", label: "Performance Score" },
                { value: "100%", label: "Accessibility Compliant" },
            ],
        },
    ],

    "packaging-design": [
        {
            _key: "pd-1",
            _type: "text",
            heading: "Project Overview",
            content: "A complete packaging redesign for Pure Botanics, a luxury skincare brand. The new packaging reflects the brand's commitment to natural ingredients and sustainable practices while standing out on retail shelves.",
        },
        {
            _key: "pd-2",
            _type: "imageGallery",
            title: "Packaging Collection",
            images: [
                { src: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80", alt: "Primary packaging" },
                { src: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80", alt: "Secondary packaging" },
                { src: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80", alt: "Product line" },
            ],
        },
        {
            _key: "pd-3",
            _type: "twoColumnText",
            leftHeading: "Challenge",
            leftContent: "Pure Botanics needed packaging that would stand out on shelves while communicating their eco-friendly values and premium quality to discerning consumers.",
            rightHeading: "Solution",
            rightContent: "We designed minimalist, elegant packaging using sustainable materials and a refined color palette that emphasizes the natural beauty of the products.",
        },
        {
            _key: "pd-4",
            _type: "imageGrid",
            columns: 4,
            gap: "small",
            images: [
                { src: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&q=80", alt: "Detail 1" },
                { src: "https://images.unsplash.com/photo-1556228720-da6bc0ea2d9c?w=400&q=80", alt: "Detail 2" },
                { src: "https://images.unsplash.com/photo-1570194065650-d99fb4d8a609?w=400&q=80", alt: "Detail 3" },
                { src: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&q=80", alt: "Detail 4" },
            ],
        },
        {
            _key: "pd-5",
            _type: "stats",
            items: [
                { value: "50%", label: "Retail Sales Increase" },
                { value: "100%", label: "Recyclable Materials" },
                { value: "2", label: "Design Awards" },
            ],
        },
        {
            _key: "pd-6",
            _type: "quote",
            text: "The new packaging has transformed how customers perceive our brand. It perfectly communicates our commitment to sustainability and quality.",
            author: "Emma Wilson",
            role: "Founder, Pure Botanics",
        },
    ],
};
