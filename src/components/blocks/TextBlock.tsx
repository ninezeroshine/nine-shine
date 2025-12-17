"use client";

import { motion } from "framer-motion";
import type { TextBlock as TextBlockType } from "@/types/content-blocks";

interface TextBlockProps {
    block: TextBlockType;
    color: string;
}

export function TextBlock({ block, color }: TextBlockProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`mb-16 ${block.align === "center" ? "text-center" : ""}`}
        >
            {block.heading && (
                <div className={`flex items-center gap-3 mb-4 ${block.align === "center" ? "justify-center" : ""}`}>
                    <div
                        className="w-1 h-6 rounded-full"
                        style={{ backgroundColor: color }}
                    />
                    <h2 className="heading-sm text-text-primary">{block.heading}</h2>
                </div>
            )}
            <p className={`text-text-secondary text-lg leading-relaxed ${!block.heading || block.align === "center" ? "" : "pl-4"}`}>
                {block.content}
            </p>
        </motion.div>
    );
}
