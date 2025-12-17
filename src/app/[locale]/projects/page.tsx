import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { ProjectsHero } from "@/components/sections/projects/ProjectsHero";
import { ProjectsGrid } from "@/components/sections/projects/ProjectsGrid";
import { CallToAction } from "@/components/sections/CallToAction";
import { client } from "../../../../sanity/lib/client";
import { allProjectsQuery } from "../../../../sanity/lib/queries";
import { SanityProject } from "@/types/sanity";

interface ProjectsPageProps {
    params: Promise<{ locale: string }>;
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
    const { locale } = await params;
    setRequestLocale(locale);

    const projects = await client.fetch<SanityProject[]>(allProjectsQuery);

    return (
        <>
            <ProjectsHero />
            <ProjectsGrid projects={projects} locale={locale as "en" | "ru"} />
            <CallToAction />
        </>
    );
}
