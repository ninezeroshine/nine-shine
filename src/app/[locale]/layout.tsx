import type { Metadata } from "next";
import { Unbounded, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "../globals.css";

// Primary font for headings - Modern geometric with Cyrillic support
const unbounded = Unbounded({
    subsets: ["latin", "cyrillic"],
    variable: "--font-heading",
    display: "swap",
    weight: ["400", "500", "600", "700"],
});

// Body font - Clean and readable with Cyrillic support
const manrope = Manrope({
    subsets: ["latin", "cyrillic"],
    variable: "--font-body",
    display: "swap",
    weight: ["300", "400", "500", "600", "700"],
});

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const messages = await getMessages();
    const metadata = messages.metadata as { title: string; description: string };

    return {
        title: {
            default: metadata.title,
            template: `%s | Nine Shine`,
        },
        description: metadata.description,
        keywords: [
            "design studio",
            "animation",
            "motion graphics",
            "web design",
            "graphic design",
            "branding",
            "UI/UX",
        ],
        authors: [{ name: "Nine Shine Studio" }],
        creator: "Nine Shine",
        openGraph: {
            type: "website",
            locale: locale === "ru" ? "ru_RU" : "en_US",
            alternateLocale: locale === "ru" ? "en_US" : "ru_RU",
            siteName: "Nine Shine",
        },
        twitter: {
            card: "summary_large_image",
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Validate locale
    if (!routing.locales.includes(locale as "en" | "ru")) {
        notFound();
    }

    // Enable static rendering
    setRequestLocale(locale);

    // Get messages for client components
    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
            <body
                className={`${unbounded.variable} ${manrope.variable} font-body antialiased`}
            >
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
