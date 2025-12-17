import { setRequestLocale } from "next-intl/server";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { StorySection } from "@/components/sections/about/StorySection";
import { ValuesSection } from "@/components/sections/about/ValuesSection";
import { BenefitsSection } from "@/components/sections/about/BenefitsSection";
import { CallToAction } from "@/components/sections/CallToAction";

interface AboutPageProps {
    params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <>
            <AboutHero />
            <StorySection />
            <ValuesSection />
            <BenefitsSection />
            <CallToAction />
        </>
    );
}
