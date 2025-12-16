"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

// Placeholder projects until CMS is connected
const placeholderProjects = [
    {
        id: "1",
        slug: "neural-brand",
        title: "Neural Brand Identity",
        category: "graphics",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
        color: "#8b5cf6",
    },
    {
        id: "2",
        slug: "motion-reel",
        title: "Motion Design Reel",
        category: "animation",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
        color: "#f97316",
    },
    {
        id: "3",
        slug: "digital-experience",
        title: "Digital Experience Platform",
        category: "web",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        color: "#06b6d4",
    },
    {
        id: "4",
        slug: "abstract-visuals",
        title: "Abstract Visual System",
        category: "graphics",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
        color: "#22c55e",
    },
];

export function FeaturedProjects() {
    const t = useTranslations("projects");

    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2" />

            <div className="container-wide relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-label text-accent mb-4 block">{t("featured")}</span>
                        <h2 className="heading-lg text-text-primary">
                            {t("title")}
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary font-medium transition-colors duration-300 group"
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
                                className="group-hover:translate-x-1 transition-transform duration-300"
                            >
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>

                {/* Projects Grid - Bento Style */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {placeholderProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            isLarge={index === 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface ProjectCardProps {
    project: {
        id: string;
        slug: string;
        title: string;
        category: string;
        image: string;
        color: string;
    };
    index: number;
    isLarge?: boolean;
}

function ProjectCard({ project, index, isLarge }: ProjectCardProps) {
    const t = useTranslations("projects.filters");

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className={isLarge ? "md:row-span-2" : ""}
        >
            <Link
                href={`/projects/${project.slug}`}
                className={`group block relative overflow-hidden rounded-2xl lg:rounded-3xl bg-bg-card border border-white/5 ${isLarge ? "aspect-[3/4] md:aspect-auto md:h-full" : "aspect-[4/3]"
                    }`}
            >
                {/* Image */}
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/60 to-transparent opacity-80" />

                {/* Colored accent on hover */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, ${project.color}, transparent)` }}
                />

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    {/* Category Tag */}
                    <motion.span
                        className="inline-block self-start px-3 py-1.5 bg-white/10 backdrop-blur-sm text-text-primary text-xs font-medium rounded-full mb-4 border border-white/10"
                    >
                        {t(project.category as "animation" | "graphics" | "web")}
                    </motion.span>

                    {/* Title */}
                    <h3 className="text-text-primary text-xl md:text-2xl lg:text-3xl font-heading font-medium group-hover:translate-y-0 transition-transform duration-500">
                        {project.title}
                    </h3>

                    {/* Arrow Icon */}
                    <motion.div
                        className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white/10 backdrop-blur-sm border border-white/10"
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
                            className="text-text-primary"
                        >
                            <path d="M7 17 17 7" />
                            <path d="M7 7h10v10" />
                        </svg>
                    </motion.div>
                </div>
            </Link>
        </motion.div>
    );
}
