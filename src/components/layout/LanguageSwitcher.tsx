"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { motion } from "framer-motion";

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLocale = (newLocale: Locale) => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <div className="flex items-center gap-0.5 p-1 bg-white/5 border border-white/5 rounded-full">
            {routing.locales.map((loc) => (
                <button
                    key={loc}
                    onClick={() => switchLocale(loc)}
                    className={`relative px-3 py-1.5 text-xs font-medium uppercase tracking-wider rounded-full transition-all duration-300 ${locale === loc
                            ? "text-text-primary"
                            : "text-text-tertiary hover:text-text-secondary"
                        }`}
                >
                    {locale === loc && (
                        <motion.span
                            layoutId="lang-indicator"
                            className="absolute inset-0 bg-white/10 rounded-full"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                    )}
                    <span className="relative z-10">{loc}</span>
                </button>
            ))}
        </div>
    );
}
