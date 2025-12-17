"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function StorySection() {
    const t = useTranslations("about");

    return (
        <section className="py-20 md:py-28">
            <div className="container-wide">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="heading-lg text-text-primary mb-6">{t("storyTitle")}</h2>
                        <p className="text-text-secondary text-lg leading-relaxed">
                            {t("storyContent")}
                        </p>
                    </motion.div>

                    {/* Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden relative">
                            {/* Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-warm/20" />

                            {/* Decorative Elements */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    className="w-48 h-48 rounded-full border border-white/10"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.div
                                    className="absolute w-32 h-32 rounded-full border border-accent/30"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                />
                                <div className="absolute w-20 h-20 rounded-full bg-accent/20" />
                            </div>

                            {/* Logo */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent to-warm flex items-center justify-center">
                                    <span className="text-white font-bold text-4xl font-heading">N</span>
                                </div>
                            </div>

                            {/* Border */}
                            <div className="absolute inset-0 border border-white/10 rounded-3xl" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
