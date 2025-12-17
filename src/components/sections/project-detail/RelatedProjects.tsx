"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const allProjects = [
    "brand-motion",
    "visual-identity",
    "ecommerce-platform",
    "product-showcase",
    "corporate-website",
    "packaging-design",
] as const;

const projectColors: Record<string, string> = {
    "brand-motion": "#f97316",
    "visual-identity": "#8b5cf6",
    "ecommerce-platform": "#06b6d4",
    "product-showcase": "#f97316",
    "corporate-website": "#06b6d4",
    "packaging-design": "#8b5cf6",
};

interface RelatedProjectsProps {
    currentSlug: string;
}

export function RelatedProjects({ currentSlug }: RelatedProjectsProps) {
    const t = useTranslations("projects");

    // Get 3 related projects (excluding current)
    const relatedProjects = allProjects
        .filter((slug) => slug !== currentSlug)
        .slice(0, 3);

    return (
        <section className="py-20 md:py-28 bg-bg-secondary">
            <div className="container-wide">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-between items-center mb-12"
                >
                    <h2 className="heading-lg text-text-primary">{t("relatedProjects")}</h2>
                    <Link
                        href="/projects"
                        className="hidden md:flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
                    >
                        <span>{t("viewAll")}</span>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </Link>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedProjects.map((slug, index) => {
                        const color = projectColors[slug];

                        return (
                            <motion.div
                                key={slug}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Link href={`/projects/${slug}`} className="group block">
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-bg-card border border-white/5 hover:border-white/10 transition-all duration-500">
                                        {/* Background Gradient */}
                                        <div
                                            className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                                            style={{
                                                background: `linear-gradient(135deg, ${color}20, ${color}05)`,
                                            }}
                                        />

                                        {/* Content */}
                                        <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                            {/* Category Badge */}
                                            <div>
                                                <span
                                                    className="inline-block px-3 py-1 rounded-full text-xs font-medium"
                                                    style={{ backgroundColor: `${color}30`, color }}
                                                >
                                                    {t(`filters.${t(`items.${slug}.category`)}`)}
                                                </span>
                                            </div>

                                            {/* Info */}
                                            <div>
                                                <h3 className="heading-sm text-text-primary mb-2 group-hover:text-white transition-colors">
                                                    {t(`items.${slug}.title`)}
                                                </h3>
                                                <p className="text-text-secondary text-sm line-clamp-2">
                                                    {t(`items.${slug}.description`)}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Hover Overlay */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            style={{
                                                background: `linear-gradient(to top, ${color}40, transparent)`,
                                            }}
                                        />
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
