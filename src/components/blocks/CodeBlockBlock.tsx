"use client";

import { motion } from "framer-motion";
import type { CodeBlockBlock as CodeBlockBlockType } from "@/types/content-blocks";

interface CodeBlockBlockProps {
    block: CodeBlockBlockType;
    color: string;
}

export function CodeBlockBlock({ block, color }: CodeBlockBlockProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
        >
            {block.title && (
                <div className="flex items-center gap-3 mb-4">
                    <div
                        className="w-1 h-6 rounded-full"
                        style={{ backgroundColor: color }}
                    />
                    <h3 className="heading-sm text-text-primary">{block.title}</h3>
                </div>
            )}

            <div className="rounded-2xl overflow-hidden bg-[#1a1a2e] border border-white/10">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-xs text-text-tertiary uppercase tracking-wider">
                        {block.language}
                    </span>
                </div>

                {/* Code */}
                <pre className="p-6 overflow-x-auto">
                    <code className="text-sm text-text-secondary font-mono leading-relaxed">
                        {block.code}
                    </code>
                </pre>
            </div>
        </motion.div>
    );
}
