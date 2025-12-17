"use client";

import { motion } from "framer-motion";
import type { TwoColumnTextBlock as TwoColumnTextBlockType } from "@/types/content-blocks";

interface TwoColumnTextBlockProps {
    block: TwoColumnTextBlockType;
    color: string;
}

export function TwoColumnTextBlock({ block, color }: TwoColumnTextBlockProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Column */}
                <div>
                    {block.leftHeading && (
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="w-1 h-6 rounded-full"
                                style={{ backgroundColor: color }}
                            />
                            <h3 className="heading-sm text-text-primary">{block.leftHeading}</h3>
                        </div>
                    )}
                    <p className={`text-text-secondary leading-relaxed ${block.leftHeading ? "pl-4" : ""}`}>
                        {block.leftContent}
                    </p>
                </div>

                {/* Right Column */}
                <div>
                    {block.rightHeading && (
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="w-1 h-6 rounded-full"
                                style={{ backgroundColor: color }}
                            />
                            <h3 className="heading-sm text-text-primary">{block.rightHeading}</h3>
                        </div>
                    )}
                    <p className={`text-text-secondary leading-relaxed ${block.rightHeading ? "pl-4" : ""}`}>
                        {block.rightContent}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
