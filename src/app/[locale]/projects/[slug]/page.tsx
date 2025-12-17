import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { ProjectDetailHero } from "@/components/sections/project-detail/ProjectDetailHero";
import { ProjectContent } from "@/components/sections/project-detail/ProjectContent";
import { RelatedProjects } from "@/components/sections/project-detail/RelatedProjects";
import { client } from "../../../../../sanity/lib/client";
import { projectBySlugQuery, projectSlugsQuery } from "../../../../../sanity/lib/queries";
import { SanityProjectDetail } from "@/types/sanity";

interface ProjectPageProps {
    params: Promise<{ locale: string; slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { locale, slug } = await params;
    setRequestLocale(locale);

    const project = await client.fetch<SanityProjectDetail>(projectBySlugQuery, { slug });

    if (!project) {
        notFound();
    }

    return (
        <>
            <ProjectDetailHero project={project} locale={locale as "en" | "ru"} />
            <ProjectContent slug={slug} blocks={project.contentBlocks} />
            <RelatedProjects currentSlug={slug} />
        </>
    );
}

// Generate static params for all projects
// Generate static params for all projects
export async function generateStaticParams() {
    const slugs = await client.fetch<{ slug: string }[]>(projectSlugsQuery);
    return slugs.map((s: { slug: string }) => ({ slug: s.slug }));
}
