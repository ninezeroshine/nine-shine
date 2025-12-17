"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { SanityProjectDetail } from "@/types/sanity";
import { urlFor } from "../../../../sanity/lib/client";

interface ProjectDetailHeroProps {
    project: SanityProjectDetail;
    locale: "en" | "ru";
}

export function ProjectDetailHero({ project, locale }: ProjectDetailHeroProps) {
    const t = useTranslations("projects");

    // Helper to safely get localized string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getLocalized = (val: any) => {
        if (!val) return "";
        return val[locale] || val['en'] || "";
    };

    const title = getLocalized(project.title);
    const description = getLocalized(project.description);
    const clientName = getLocalized(project.client);

    // Handle services which might be localized array or just array
    const rawServices = getLocalized(project.services);
    const servicesList = Array.isArray(rawServices) ? rawServices : [];

    const color = project.color;
    const imageUrl = project.heroImage ? urlFor(project.heroImage).width(1920).url() : "";

    return (
        <section className="relative min-h-[90vh] flex items-end pb-20 pt-32 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                {imageUrl && (
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover brightness-[0.3]"
                        priority
                    />
                )}
                {!imageUrl && (
                    <div className="absolute inset-0 bg-neutral-900" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent" />
            </div>

            {/* Back Button */}
            <div className="absolute top-32 left-0 right-0 z-20 pointer-events-none">
                <div className="container-wide">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="pointer-events-auto inline-block"
                    >
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group px-4 py-2 rounded-full bg-black/20 backdrop-blur-md border border-white/10"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="group-hover:-translate-x-1 transition-transform"
                            >
                                <path d="M19 12H5" />
                                <path d="m12 19-7-7 7-7" />
                            </svg>
                            <span>{t("backToProjects")}</span>
                        </Link>
                    </motion.div>
                </div>
            </div>

            <div className="container-wide relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        {/* Category */}
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/10 backdrop-blur-sm"
                            style={{ backgroundColor: `${color}20`, color: color }}
                        >
                            {t(`filters.${project.category}`)}
                        </motion.span>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="heading-xl text-white mb-8"
                        >
                            {title}
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl md:text-2xl text-text-secondary max-w-2xl leading-relaxed"
                        >
                            {description}
                        </motion.p>
                    </div>

                    {/* Meta Info */}
                    <div className="lg:col-span-4 lg:pb-2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="grid grid-cols-2 lg:grid-cols-1 gap-8 lg:gap-12"
                        >
                            {/* Client */}
                            <div>
                                <h3 className="text-sm text-text-muted mb-2 uppercase tracking-wider">
                                    {t("detail.client")}
                                </h3>
                                <p className="text-white font-medium text-lg">
                                    {clientName}
                                </p>
                            </div>

                            {/* Year */}
                            <div>
                                <h3 className="text-sm text-text-muted mb-2 uppercase tracking-wider">
                                    {t("detail.year")}
                                </h3>
                                <p className="text-white font-medium text-lg">
                                    {project.year}
                                </p>
                            </div>

                            {/* Services */}
                            <div className="col-span-2 lg:col-span-1">
                                <h3 className="text-sm text-text-muted mb-2 uppercase tracking-wider">
                                    {t("detail.services")}
                                </h3>
                                <ul className="flex flex-wrap gap-x-4 gap-y-2">
                                    {servicesList.map((service: string, index: number) => (
                                        <li key={index} className="text-white font-medium text-lg">
                                            {service}
                                            {index < servicesList.length - 1 && (
                                                <span className="text-text-muted ml-4 opacity-30">/</span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
