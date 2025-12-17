"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const projectKeys = ["brand-motion", "visual-identity", "ecommerce-platform", "product-showcase", "corporate-website", "packaging-design"] as const;
const projectColors: Record<string, string> = {
    "brand-motion": "#f97316",
    "visual-identity": "#8b5cf6",
    "ecommerce-platform": "#06b6d4",
    "product-showcase": "#f97316",
    "corporate-website": "#06b6d4",
    "packaging-design": "#8b5cf6",
};
const filterKeys = ["all", "animation", "graphics", "web"] as const;

export function ProjectsGrid() {
    const t = useTranslations("projects");
    const [activeFilter, setActiveFilter] = useState<string>("all");

    // Filter projects
    const filteredProjects = projectKeys.filter((key) => {
        if (activeFilter === "all") return true;
        const category = t(`items.${key}.category`);
        return category === activeFilter;
    });

    return (
        <section className="py-16 md:py-24">
            <div className="container-wide">
                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-wrap gap-2 mb-12"
                >
                    {filterKeys.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter
                                    ? "bg-accent text-white"
                                    : "bg-white/5 text-text-secondary hover:bg-white/10 hover:text-text-primary"
                                }`}
                        >
                            {t(`filters.${filter}`)}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((key, index) => (
                            <ProjectCard
                                key={key}
                                projectKey={key}
                                color={projectColors[key]}
                                index={index}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}

interface ProjectCardProps {
    projectKey: string;
    color: string;
    index: number;
}

function ProjectCard({ projectKey, color, index }: ProjectCardProps) {
    const t = useTranslations("projects");

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group"
        >
            <Link href={`/projects/${projectKey}`}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-bg-card border border-white/5 hover:border-white/10 transition-all duration-500 cursor-pointer">
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
                                {t(`filters.${t(`items.${projectKey}.category`)}`)}
                            </span>
                        </div>

                        {/* Info */}
                        <div>
                            <h3 className="heading-sm text-text-primary mb-2 group-hover:text-white transition-colors">
                                {t(`items.${projectKey}.title`)}
                            </h3>
                            <p className="text-text-secondary text-sm line-clamp-2">
                                {t(`items.${projectKey}.description`)}
                            </p>

                            {/* View Project Link */}
                            <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-sm font-medium" style={{ color }}>
                                    {t("viewProject")}
                                </span>
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke={color}
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="group-hover:translate-x-1 transition-transform"
                                >
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </div>
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
}
