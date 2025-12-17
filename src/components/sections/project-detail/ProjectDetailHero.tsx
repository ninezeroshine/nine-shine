"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

interface ProjectDetailHeroProps {
    slug: string;
}

export function ProjectDetailHero({ slug }: ProjectDetailHeroProps) {
    const t = useTranslations("projects");

    const color = t(`items.${slug}.color`);
    const heroImage = t(`items.${slug}.heroImage`);
    const servicesRaw = t.raw(`items.${slug}.services`);
    const services: string[] = Array.isArray(servicesRaw) ? servicesRaw : [];

    return (
        <section className="relative pt-24 pb-0 md:pt-32 overflow-hidden">
            {/* Back Button */}
            <div className="container-wide mb-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors group"
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
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        <span>{t("backToProjects")}</span>
                    </Link>
                </motion.div>
            </div>

            <div className="container-wide">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Column - Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Category Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="inline-block px-4 py-2 rounded-full mb-6"
                            style={{ backgroundColor: `${color}20`, color }}
                        >
                            <span className="text-sm font-medium">
                                {t(`filters.${t(`items.${slug}.category`)}`)}
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            className="heading-xl text-text-primary mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {t(`items.${slug}.title`)}
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            className="text-lg text-text-secondary mb-10 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            {t(`items.${slug}.description`)}
                        </motion.p>

                        {/* Project Info Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="grid grid-cols-2 gap-6 p-6 bg-bg-secondary rounded-2xl border border-white/5"
                        >
                            {/* Client */}
                            <div>
                                <p className="text-sm text-text-tertiary mb-1">
                                    {t("projectInfo.client")}
                                </p>
                                <p className="text-text-primary font-medium">
                                    {t(`items.${slug}.client`)}
                                </p>
                            </div>

                            {/* Year */}
                            <div>
                                <p className="text-sm text-text-tertiary mb-1">
                                    {t("projectInfo.year")}
                                </p>
                                <p className="text-text-primary font-medium">
                                    {t(`items.${slug}.year`)}
                                </p>
                            </div>

                            {/* Services */}
                            <div className="col-span-2">
                                <p className="text-sm text-text-tertiary mb-2">
                                    {t("projectInfo.services")}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {services.map((service, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-sm rounded-full bg-white/5 text-text-secondary"
                                        >
                                            {service}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                            <Image
                                src={heroImage}
                                alt={t(`items.${slug}.title`)}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                            {/* Gradient Overlay */}
                            <div
                                className="absolute inset-0 opacity-30"
                                style={{
                                    background: `linear-gradient(to top, ${color}40, transparent)`,
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
