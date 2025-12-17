import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { ContactsHero } from "@/components/sections/contacts/ContactsHero";
import { ContactForm } from "@/components/sections/contacts/ContactForm";

interface ContactsPageProps {
    params: Promise<{ locale: string }>;
}

export default async function ContactsPage({ params }: ContactsPageProps) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <SmoothScrollProvider>
            <Header />
            <main>
                <ContactsHero />
                <ContactForm />
            </main>
            <Footer />
        </SmoothScrollProvider>
    );
}
