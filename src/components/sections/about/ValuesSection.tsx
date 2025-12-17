"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const valueKeys = ["excellence", "innovation", "collaboration", "integrity"] as const;
const valueIcons = [StarIcon, LightbulbIcon, UsersIcon, ShieldIcon];
const valueColors = ["#8b5cf6", "#f97316", "#06b6d4", "#22c55e"];

export function ValuesSection() {
    const t = useTranslations("about");

    return (
        <section className="py-24 md:py-32 bg-bg-secondary">
            <div className="container-wide">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="heading-lg text-text-primary mb-4">{t("valuesTitle")}</h2>
                </motion.div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {valueKeys.map((key, index) => {
                        const Icon = valueIcons[index];
                        const color = valueColors[index];

                        return (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group p-8 bg-bg-card rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-500"
                            >
                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundColor: `${color}20` }}
                                >
                                    <Icon className="w-7 h-7" style={{ color }} />
                                </div>

                                {/* Title */}
                                <h3 className="heading-sm text-text-primary mb-3">
                                    {t(`values.${key}.title`)}
                                </h3>

                                {/* Description */}
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    {t(`values.${key}.description`)}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// Icons
function StarIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
    return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    );
}

function LightbulbIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
    return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6" />
            <path d="M10 22h4" />
        </svg>
    );
}

function UsersIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
    return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}

function ShieldIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
    return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    );
}
