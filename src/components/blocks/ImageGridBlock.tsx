"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ImageGridBlock as ImageGridBlockType } from "@/types/content-blocks";

interface ImageGridBlockProps {
    block: ImageGridBlockType;
    color: string;
}

export function ImageGridBlock({ block, color }: ImageGridBlockProps) {
    const columnClass = {
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-2 lg:grid-cols-4",
    }[block.columns];

    const gapClass = {
        small: "gap-2",
        medium: "gap-4",
        large: "gap-6",
    }[block.gap || "medium"];

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
        >
            <div className={`grid ${columnClass} ${gapClass}`}>
                {block.images.map((image, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative aspect-square rounded-2xl overflow-hidden group"
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes={`(max-width: 768px) 100vw, ${100 / block.columns}vw`}
                        />
                        {/* Hover overlay */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ background: `linear-gradient(to top, ${color}40, transparent)` }}
                        />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
