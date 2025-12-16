import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Stats } from "@/components/sections/Stats";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { CallToAction } from "@/components/sections/CallToAction";

interface HomePageProps {
    params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <SmoothScrollProvider>
            <Header />
            <main>
                <Hero />
                <Marquee />
                <FeaturedProjects />
                <Stats />
                <ServicesPreview />
                <CallToAction />
            </main>
            <Footer />
        </SmoothScrollProvider>
    );
}
