"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const services = [
    { key: "animation", color: "#f97316", icon: PlayIcon },
    { key: "graphics", color: "#8b5cf6", icon: PaletteIcon },
    { key: "web", color: "#06b6d4", icon: GlobeIcon },
] as const;

export function ServicesList() {
    const t = useTranslations("services");

    return (
        <section className="py-20 md:py-28">
            <div className="container-wide">
                <div className="space-y-16 md:space-y-24">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.key}
                            serviceKey={service.key}
                            color={service.color}
                            icon={service.icon}
                            index={index}
                            isReversed={index % 2 === 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface ServiceCardProps {
    serviceKey: "animation" | "graphics" | "web";
    color: string;
    icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
    index: number;
    isReversed: boolean;
}

function ServiceCard({ serviceKey, color, icon: Icon, index, isReversed }: ServiceCardProps) {
    const t = useTranslations("services");

    // Get features as array - handle both array and object cases
    const featuresRaw = t.raw(`${serviceKey}.features`);
    const features: string[] = Array.isArray(featuresRaw) ? featuresRaw : [];

    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isReversed ? "lg:flex-row-reverse" : ""
                }`}
        >
            {/* Content */}
            <div className={isReversed ? "lg:order-2" : ""}>
                {/* Icon & Number */}
                <div className="flex items-center gap-4 mb-6">
                    <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: `${color}20` }}
                    >
                        <Icon className="w-8 h-8" style={{ color }} />
                    </div>
                    <span
                        className="text-6xl font-heading font-bold opacity-10"
                        style={{ color }}
                    >
                        0{index + 1}
                    </span>
                </div>

                {/* Title */}
                <h2 className="heading-md text-text-primary mb-4">
                    {t(`${serviceKey}.title`)}
                </h2>

                {/* Long Description */}
                <p className="text-text-secondary text-lg leading-relaxed mb-8">
                    {t(`${serviceKey}.longDescription`)}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                            className="flex items-center gap-2"
                        >
                            <div
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: color }}
                            />
                            <span className="text-text-secondary text-sm">{feature}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Visual */}
            <div className={isReversed ? "lg:order-1" : ""}>
                <motion.div
                    className="relative aspect-[4/3] rounded-3xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Gradient Background */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(135deg, ${color}30, ${color}10)`,
                        }}
                    />

                    {/* Decorative elements */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            className="w-32 h-32 rounded-full opacity-20"
                            style={{ backgroundColor: color }}
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.2, 0.3, 0.2],
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />
                    </div>

                    {/* Large Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Icon
                            className="w-24 h-24 opacity-50"
                            style={{ color }}
                        />
                    </div>

                    {/* Border */}
                    <div className="absolute inset-0 border border-white/10 rounded-3xl" />
                </motion.div>
            </div>
        </motion.div>
    );
}

// Icons
function PlayIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
    return (
        <svg
            className={className}
            style={style}
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <polygon points="5 3 19 12 5 21 5 3" />
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
