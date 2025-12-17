"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const processSteps = [
    { key: "discovery", icon: SearchIcon },
    { key: "concept", icon: LightbulbIcon },
    { key: "creation", icon: PenToolIcon },
    { key: "delivery", icon: RocketIcon },
] as const;

export function ProcessSection() {
    const t = useTranslations("services");

    return (
        <section className="py-24 md:py-32 bg-bg-secondary relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className="container-wide relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <span className="text-label text-accent mb-4 block">
                        {t("processTitle")}
                    </span>
                    <h2 className="heading-lg text-text-primary mb-4">
                        {t("processSubtitle")}
                    </h2>
                </motion.div>

                {/* Process Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {processSteps.map((step, index) => (
                        <ProcessCard key={step.key} stepKey={step.key} icon={step.icon} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface ProcessCardProps {
    stepKey: string;
    icon: React.ComponentType<{ className?: string }>;
    index: number;
}

function ProcessCard({ stepKey, icon: Icon, index }: ProcessCardProps) {
    const t = useTranslations("services");

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative"
        >
            {/* Connector Line (except last) */}
            {index < 3 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-white/10 to-transparent z-0" />
            )}

            <div className="relative p-8 bg-bg-card rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-500">
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-sm font-bold text-white">{index + 1}</span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-text-secondary group-hover:text-accent transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="heading-sm text-text-primary mb-3">
                    {t(`process.${stepKey}.title`)}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed">
                    {t(`process.${stepKey}.description`)}
                </p>
            </div>
        </motion.div>
    );
}

// Icons
function SearchIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    );
}

function LightbulbIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6" />
            <path d="M10 22h4" />
        </svg>
    );
}

function PenToolIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m12 19 7-7 3 3-7 7-3-3z" />
            <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
            <path d="m2 2 7.586 7.586" />
            <circle cx="11" cy="11" r="2" />
        </svg>
    );
}

function RocketIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
    );
}
