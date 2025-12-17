"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { FullWidthImageBlock as FullWidthImageBlockType } from "@/types/content-blocks";

interface FullWidthImageBlockProps {
    block: FullWidthImageBlockType;
    color: string;
}

export function FullWidthImageBlock({ block, color }: FullWidthImageBlockProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 -mx-4 md:-mx-8 lg:-mx-16"
        >
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mx-4 md:mx-8 lg:mx-16">
                <Image
                    src={block.src}
                    alt={block.alt}
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
                {/* Gradient overlay */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{ background: `linear-gradient(to top, ${color}, transparent)` }}
                />
            </div>
            {block.caption && (
                <p className="text-text-tertiary text-sm mt-4 text-center px-4">
                    {block.caption}
                </p>
            )}
        </motion.div>
    );
}
