"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GhostButtonProps {
    href: string;
    children: ReactNode;
    icon?: ReactNode;
    size?: "sm" | "md";
    className?: string;
}

/**
 * Ghost button with transparent background that becomes white on hover.
 * Text and icons automatically switch to black on hover for proper contrast.
 */
export function GhostButton({
    href,
    children,
    icon,
    size = "md",
    className = "",
}: GhostButtonProps) {
    const sizeClasses = {
        sm: "px-5 py-2.5 text-sm",
        md: "px-8 py-4",
    };

    return (
        <Link
            href={href}
            className={`group inline-flex items-center gap-3 ${sizeClasses[size]} bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white transition-all duration-300 ${className}`}
        >
            <span className="group-hover:text-black transition-colors duration-300">
                {children}
            </span>
            {icon && (
                <motion.span className="group-hover:text-black group-hover:translate-x-1 transition-all duration-300">
                    {icon}
                </motion.span>
            )}
        </Link>
    );
}

// Arrow icon for use with GhostButton
export function ArrowIcon() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    );
}
