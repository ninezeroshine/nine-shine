"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { VideoPlayerBlock as VideoPlayerBlockType } from "@/types/content-blocks";

interface VideoPlayerBlockProps {
    block: VideoPlayerBlockType;
    color: string;
}

export function VideoPlayerBlock({ block, color }: VideoPlayerBlockProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    const aspectRatioClass = {
        "16:9": "aspect-video",
        "4:3": "aspect-[4/3]",
        "1:1": "aspect-square",
        "9:16": "aspect-[9/16]",
    }[block.aspectRatio || "16:9"];

    // Parse video URL
    const getEmbedUrl = (url: string) => {
        if (url.includes("youtube.com") || url.includes("youtu.be")) {
            const videoId = url.includes("youtu.be")
                ? url.split("/").pop()
                : new URLSearchParams(new URL(url).search).get("v");
            return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        }
        if (url.includes("vimeo.com")) {
            const videoId = url.split("/").pop();
            return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
        }
        return url;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
        >
            {block.title && (
                <div className="flex items-center gap-3 mb-6">
                    <div
                        className="w-1 h-6 rounded-full"
                        style={{ backgroundColor: color }}
                    />
                    <h3 className="heading-sm text-text-primary">{block.title}</h3>
                </div>
            )}

            <div className={`relative ${aspectRatioClass} rounded-2xl overflow-hidden bg-bg-card`}>
                {!isPlaying ? (
                    <>
                        {/* Poster/Thumbnail */}
                        {block.poster && (
                            <Image
                                src={block.poster}
                                alt="Video thumbnail"
                                fill
                                className="object-cover"
                            />
                        )}
                        {/* Play button */}
                        <button
                            onClick={() => setIsPlaying(true)}
                            className="absolute inset-0 flex items-center justify-center group"
                        >
                            <div
                                className="w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                                style={{ backgroundColor: color }}
                            >
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    className="ml-1"
                                >
                                    <polygon points="5 3 19 12 5 21 5 3" />
                                </svg>
                            </div>
                        </button>
                        {/* Gradient overlay */}
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{ background: `linear-gradient(to top, ${color}30, transparent)` }}
                        />
                    </>
                ) : (
                    <iframe
                        src={getEmbedUrl(block.videoUrl)}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                )}
            </div>
        </motion.div>
    );
}
