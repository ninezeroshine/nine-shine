"use client";

import { motion } from "framer-motion";
import type { StatsBlock as StatsBlockType } from "@/types/content-blocks";

interface StatsBlockProps {
    block: StatsBlockType;
    color: string;
}

export function StatsBlock({ block, color }: StatsBlockProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
        >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {block.items.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="p-6 rounded-2xl bg-bg-secondary border border-white/5 text-center"
                    >
                        <p
                            className="text-3xl md:text-4xl font-bold font-heading mb-2"
                            style={{ color }}
                        >
                            {stat.value}
                        </p>
                        <p className="text-text-tertiary text-sm">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
