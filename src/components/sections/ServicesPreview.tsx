"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const services = [
    {
        key: "animation",
        icon: PlayIcon,
        color: "#f97316",
    },
    {
        key: "graphics",
        icon: PaletteIcon,
        color: "#8b5cf6",
    },
    {
        key: "web",
        icon: GlobeIcon,
        color: "#06b6d4",
    },
] as const;

export function ServicesPreview() {
    const t = useTranslations("services");
    const tCommon = useTranslations("common");

    return (
        <section className="py-24 md:py-32 relative overflow-hidden bg-bg-secondary/50">
            <div className="container-wide relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <span className="text-label text-accent mb-4 block">{tCommon("whatWeDo")}</span>
                    <h2 className="heading-lg text-text-primary mb-4">
                        {t("title")}
                    </h2>
                    <p className="text-text-secondary text-lg max-w-xl mx-auto">
                        {t("subtitle")}
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.key}
                            service={service}
                            index={index}
                        />
                    ))}
                </div>

                {/* View All Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 text-text-primary font-medium transition-all duration-300"
                    >
                        <span>{tCommon("exploreServices")}</span>
                        <svg
                            width="16"
                            height="16"
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
            </div>
        </section>
    );
}

interface ServiceCardProps {
    service: {
        key: "animation" | "graphics" | "web";
        icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
        color: string;
    };
    index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
    const t = useTranslations("services");
    const tCommon = useTranslations("common");
    const Icon = service.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            <Link
                href="/services"
                className="group block h-full p-8 lg:p-10 bg-bg-card rounded-2xl lg:rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-500 relative overflow-hidden"
            >
                {/* Hover glow effect */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(circle at 50% 0%, ${service.color}15, transparent 70%)`
                    }}
                />

                <div className="relative z-10">
                    {/* Icon */}
                    <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundColor: `${service.color}20` }}
                    >
                        <Icon className="w-7 h-7" style={{ color: service.color }} />
                    </div>

                    {/* Title */}
                    <h3 className="heading-sm text-text-primary mb-3">
                        {t(`${service.key}.title`)}
                    </h3>

                    {/* Description */}
                    <p className="text-text-secondary text-sm lg:text-base leading-relaxed mb-6">
                        {t(`${service.key}.description`)}
                    </p>

                    {/* Read More */}
                    <div className="flex items-center gap-2 text-sm font-medium text-text-tertiary group-hover:text-text-primary transition-colors duration-300">
                        <span>{tCommon("readMore")}</span>
                        <svg
                            width="16"
                            height="16"
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
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

// Icons with consistent style
function PlayIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
    return (
        <svg
            className={className}
            style={style}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" stroke="none" />
        </svg>
    );
}

function PaletteIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
    return (
        <svg
            className={className}
            style={style}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="13.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            <circle cx="17.5" cy="10.5" r="1.5" fill="currentColor" stroke="none" />
            <circle cx="8.5" cy="7.5" r="1.5" fill="currentColor" stroke="none" />
            <circle cx="6.5" cy="12.5" r="1.5" fill="currentColor" stroke="none" />
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z" />
        </svg>
    );
}

function GlobeIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
    return (
        <svg
            className={className}
            style={style}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
        </svg>
    );
}
