"use client";

import { motion } from "framer-motion";
import type { QuoteBlock as QuoteBlockType } from "@/types/content-blocks";

interface QuoteBlockProps {
    block: QuoteBlockType;
    color: string;
}

export function QuoteBlock({ block, color }: QuoteBlockProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
        >
            <div
                className="relative p-8 lg:p-12 rounded-3xl border border-white/5"
                style={{ background: `linear-gradient(135deg, ${color}10, transparent)` }}
            >
                {/* Quote mark */}
                <div
                    className="absolute top-6 left-6 text-6xl font-serif leading-none opacity-30"
                    style={{ color }}
                >
                    "
                </div>

                <blockquote className="relative z-10">
                    <p className="text-xl md:text-2xl text-text-primary leading-relaxed mb-6 pl-8">
                        {block.text}
                    </p>

                    {(block.author || block.role) && (
                        <footer className="flex items-center gap-4 pl-8">
                            <div
                                className="w-12 h-[2px] rounded-full"
                                style={{ backgroundColor: color }}
                            />
                            <div>
                                {block.author && (
                                    <p className="text-text-primary font-medium">{block.author}</p>
                                )}
                                {block.role && (
                                    <p className="text-text-tertiary text-sm">{block.role}</p>
                                )}
                            </div>
                        </footer>
                    )}
                </blockquote>
            </div>
        </motion.div>
    );
}
