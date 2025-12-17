"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SanityProject } from "@/types/sanity";

const filterKeys = ["all", "animation", "graphics", "web"] as const;

interface ProjectsGridProps {
    projects: SanityProject[];
    locale: "en" | "ru";
}

export function ProjectsGrid({ projects, locale }: ProjectsGridProps) {
    const t = useTranslations("projects");
    const [activeFilter, setActiveFilter] = useState<string>("all");

    // Filter projects
    const filteredProjects = projects.filter((project) => {
        if (activeFilter === "all") return true;
        return project.category === activeFilter;
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
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={project._id}
                                project={project}
                                index={index}
                                locale={locale}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}

interface ProjectCardProps {
    project: SanityProject;
    index: number;
    locale: "en" | "ru";
}

function ProjectCard({ project, index, locale }: ProjectCardProps) {
    const t = useTranslations("projects");

    // Helper to safely get localized string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getLocalized = (val: any) => {
        if (!val) return "";
        return val[locale] || val['en'] || "";
    };

    const title = getLocalized(project.title);
    const description = getLocalized(project.description);
    const color = project.color;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group"
        >
            <Link href={`/projects/${project.slug.current}`}>
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
                                {t(`filters.${project.category}`)}
                            </span>
                        </div>

                        {/* Info */}
                        <div>
                            <h3 className="heading-sm text-text-primary mb-2 group-hover:text-white transition-colors">
                                {title}
                            </h3>
                            <p className="text-text-secondary text-sm line-clamp-2">
                                {description}
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

