import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { ProjectDetailHero } from "@/components/sections/project-detail/ProjectDetailHero";
import { ProjectContent } from "@/components/sections/project-detail/ProjectContent";
import { RelatedProjects } from "@/components/sections/project-detail/RelatedProjects";

const validSlugs = [
    "brand-motion",
    "visual-identity",
    "ecommerce-platform",
    "product-showcase",
    "corporate-website",
    "packaging-design",
];

interface ProjectPageProps {
    params: Promise<{ locale: string; slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { locale, slug } = await params;
    setRequestLocale(locale);

    // Validate slug
    if (!validSlugs.includes(slug)) {
        notFound();
    }

    return (
        <SmoothScrollProvider>
            <Header />
            <main>
                <ProjectDetailHero slug={slug} />
                <ProjectContent slug={slug} />
                <RelatedProjects currentSlug={slug} />
            </main>
            <Footer />
        </SmoothScrollProvider>
    );
}

// Generate static params for all projects
export function generateStaticParams() {
    return validSlugs.map((slug) => ({ slug }));
}
