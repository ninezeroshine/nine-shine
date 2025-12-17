"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ImageGalleryBlock as ImageGalleryBlockType } from "@/types/content-blocks";

interface ImageGalleryBlockProps {
    block: ImageGalleryBlockType;
    color: string;
}

export function ImageGalleryBlock({ block, color }: ImageGalleryBlockProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 -mx-4 md:-mx-8 lg:-mx-16"
        >
            {block.title && (
                <div className="flex items-center gap-3 mb-6 px-4 md:px-8 lg:px-16">
                    <div
                        className="w-1 h-6 rounded-full"
                        style={{ backgroundColor: color }}
                    />
                    <h3 className="heading-sm text-text-primary">{block.title}</h3>
                </div>
            )}

            {/* Horizontal scroll gallery */}
            <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 px-4 md:px-8 lg:px-16 pb-4">
                    {block.images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex-shrink-0 w-[300px] md:w-[400px] lg:w-[500px]"
                        >
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 500px"
                                />
                                {/* Hover overlay */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ background: `linear-gradient(to top, ${color}40, transparent)` }}
                                />
                            </div>
                            {image.caption && (
                                <p className="text-text-tertiary text-sm mt-3">{image.caption}</p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
