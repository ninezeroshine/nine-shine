"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Hero() {
    const t = useTranslations("hero");

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="container-wide relative z-10 pt-0 pb-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="max-w-5xl mx-auto text-center"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm text-text-secondary">{t("title")}</span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        className="heading-xl text-text-primary mb-8"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {t("headline")}{" "}
                        <span className="gradient-text">{t("headlineAccent")}</span>
                        {" "}{t("headlineEnd")}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        {t("description")}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <Link
                            href="/projects"
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white hover:text-black transition-all duration-300"
                        >
                            <span className="group-hover:text-black">{t("viewWork")}</span>
                            <motion.svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="group-hover:translate-x-1 group-hover:text-black transition-all duration-300"
                            >
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </motion.svg>
                        </Link>
                        <Link
                            href="/contacts"
                            className="inline-flex items-center gap-2 px-8 py-4 text-text-primary font-medium rounded-full border border-white/10 hover:bg-white/5 transition-all duration-300"
                        >
                            <span>{t("getInTouch")}</span>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                >
                    <motion.div
                        className="w-6 h-10 border border-white/20 rounded-full flex justify-center p-2"
                        animate={{ y: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <motion.div
                            className="w-1 h-2 bg-white/40 rounded-full"
                            animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
                            transition={{
                                repeat: Infinity,
                                duration: 2,
                                ease: "easeInOut",
                            }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
