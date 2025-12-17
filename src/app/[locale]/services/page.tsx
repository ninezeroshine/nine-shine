import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { ServicesList } from "@/components/sections/services/ServicesList";
import { ProcessSection } from "@/components/sections/services/ProcessSection";
import { CallToAction } from "@/components/sections/CallToAction";

interface ServicesPageProps {
    params: Promise<{ locale: string }>;
}

export default async function ServicesPage({ params }: ServicesPageProps) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <SmoothScrollProvider>
            <Header />
            <main>
                <ServicesHero />
                <ServicesList />
                <ProcessSection />
                <CallToAction />
            </main>
            <Footer />
        </SmoothScrollProvider>
    );
}
