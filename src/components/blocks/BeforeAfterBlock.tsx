"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { BeforeAfterBlock as BeforeAfterBlockType } from "@/types/content-blocks";

interface BeforeAfterBlockProps {
    block: BeforeAfterBlockType;
    color: string;
}

export function BeforeAfterBlock({ block, color }: BeforeAfterBlockProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percent);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        handleMove(e.clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
        >
            <div
                ref={containerRef}
                className="relative aspect-video rounded-2xl overflow-hidden cursor-ew-resize select-none"
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
            >
                {/* After Image (Bottom Layer) */}
                <Image
                    src={block.afterImage}
                    alt="After"
                    fill
                    className="object-cover pointer-events-none"
                />

                {/* Before Image (Top Layer, Clipped) */}
                <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                    <Image
                        src={block.beforeImage}
                        alt="Before"
                        fill
                        className="object-cover pointer-events-none"
                    />
                </div>

                {/* Slider Line */}
                <div
                    className="absolute top-0 bottom-0 w-0.5 pointer-events-none"
                    style={{ left: `${sliderPosition}%`, backgroundColor: color }}
                >
                    {/* Slider Handle */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: color }}
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="white"
                            stroke="white"
                            strokeWidth="2"
                        >
                            <path d="M8 12h8" />
                            <path d="m12 8 4 4-4 4" />
                            <path d="m12 16-4-4 4-4" />
                        </svg>
                    </div>
                </div>

                {/* Labels */}
                <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-black/50 text-white text-sm backdrop-blur-sm">
                    {block.beforeLabel || "Before"}
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/50 text-white text-sm backdrop-blur-sm">
                    {block.afterLabel || "After"}
                </div>
            </div>
        </motion.div>
    );
}
