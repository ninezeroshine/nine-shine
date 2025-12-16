"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const statsData = [
    { value: 50, suffix: "+", key: "projects" },
    { value: 5, suffix: "+", key: "years" },
    { value: 30, suffix: "+", key: "clients" },
    { value: 100, suffix: "%", key: "satisfaction" },
];

export function Stats() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const t = useTranslations("stats");

    return (
        <section ref={ref} className="py-20 md:py-24 border-y border-white/5">
            <div className="container-wide">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {statsData.map((stat, index) => (
                        <motion.div
                            key={stat.key}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="heading-lg text-text-primary mb-2 font-heading">
                                <AnimatedNumber value={stat.value} isInView={isInView} />
                                <span className="text-accent">{stat.suffix}</span>
                            </div>
                            <p className="text-text-tertiary text-sm">{t(stat.key)}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AnimatedNumber({ value, isInView }: { value: number; isInView: boolean }) {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * value);
            setDisplayValue(current);

            if (step >= steps) {
                setDisplayValue(value);
                clearInterval(timer);
            }
        }, stepDuration);

        return () => clearInterval(timer);
    }, [value, isInView]);

    return <span>{displayValue}</span>;
}
