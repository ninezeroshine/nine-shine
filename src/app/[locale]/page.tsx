import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Stats } from "@/components/sections/Stats";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { CallToAction } from "@/components/sections/CallToAction";
import { client } from "../../../sanity/lib/client";
import { allProjectsQuery } from "../../../sanity/lib/queries";
import { SanityProject } from "@/types/sanity";

interface HomePageProps {
    params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
    const { locale } = await params;
    setRequestLocale(locale);

    const projects = await client.fetch<SanityProject[]>(allProjectsQuery);

    return (
        <>
            <Hero />
            <Marquee />
            <FeaturedProjects projects={projects} locale={locale as "en" | "ru"} />
            <Stats />
            <ServicesPreview />
            <CallToAction />
        </>
    );
}
