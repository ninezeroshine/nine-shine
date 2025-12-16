"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const marqueeKeys = [
    "animation",
    "branding",
    "webDesign",
    "motionGraphics",
    "uiux",
    "visualization",
    "creativeDirection",
] as const;

export function Marquee() {
    const t = useTranslations("marquee");

    // Build items array with translations
    const items: string[] = [];
    marqueeKeys.forEach((key) => {
        items.push(t(key));
        items.push("•");
    });

    return (
        <section className="py-8 overflow-hidden border-y border-white/5 bg-bg-secondary">
            <div className="relative">
                <motion.div
                    className="flex gap-8 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {/* Double the items for seamless loop */}
                    {[...items, ...items].map((item, index) => (
                        <span
                            key={index}
                            className={`text-2xl md:text-3xl font-heading font-medium ${item === "•"
                                    ? "text-accent"
                                    : "text-text-tertiary hover:text-text-primary transition-colors duration-300"
                                }`}
                        >
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
