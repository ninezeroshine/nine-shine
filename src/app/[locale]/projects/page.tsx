import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { ProjectsHero } from "@/components/sections/projects/ProjectsHero";
import { ProjectsGrid } from "@/components/sections/projects/ProjectsGrid";
import { CallToAction } from "@/components/sections/CallToAction";

interface ProjectsPageProps {
    params: Promise<{ locale: string }>;
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <SmoothScrollProvider>
            <Header />
            <main>
                <ProjectsHero />
                <ProjectsGrid />
                <CallToAction />
            </main>
            <Footer />
        </SmoothScrollProvider>
    );
}
