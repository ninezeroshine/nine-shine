import { setRequestLocale } from "next-intl/server";
import { ContactsHero } from "@/components/sections/contacts/ContactsHero";
import { ContactForm } from "@/components/sections/contacts/ContactForm";

interface ContactsPageProps {
    params: Promise<{ locale: string }>;
}

export default async function ContactsPage({ params }: ContactsPageProps) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <>
            <ContactsHero />
            <ContactForm />
        </>
    );
}
