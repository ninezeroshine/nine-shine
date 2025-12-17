"use client";

import { useEffect, useState, useCallback, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Subscribe to matchMedia changes
function subscribeToFinePointer(callback: () => void) {
    if (typeof window === "undefined") return () => { };
    const mediaQuery = window.matchMedia("(pointer: fine)");
    mediaQuery.addEventListener("change", callback);
    return () => mediaQuery.removeEventListener("change", callback);
}

// Get current fine pointer state
function getFinePointerSnapshot() {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(pointer: fine)").matches;
}

// Server snapshot (always false)
function getServerSnapshot() {
    return false;
}

export function Cursor() {
    // Use useSyncExternalStore to safely track media query without setState in effect
    const hasFinePointer = useSyncExternalStore(
        subscribeToFinePointer,
        getFinePointerSnapshot,
        getServerSnapshot
    );

    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    // Mouse position
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Smooth spring physics
    const ringConfig = { damping: 30, stiffness: 200, mass: 0.8 };
    const dotConfig = { damping: 25, stiffness: 400, mass: 0.3 };

    const ringX = useSpring(mouseX, ringConfig);
    const ringY = useSpring(mouseY, ringConfig);
    const dotX = useSpring(mouseX, dotConfig);
    const dotY = useSpring(mouseY, dotConfig);

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        },
        [mouseX, mouseY]
    );

    const handleMouseOver = useCallback((e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const isClickable = target.closest(
            "a, button, input, textarea, select, [role='button'], [data-cursor='pointer']"
        );
        setIsHovering(!!isClickable);
    }, []);

    const handleMouseDown = useCallback(() => setIsClicking(true), []);
    const handleMouseUp = useCallback(() => setIsClicking(false), []);

    useEffect(() => {
        if (!hasFinePointer) return;

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        window.addEventListener("mouseover", handleMouseOver, { passive: true });
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        // Hide default cursor globally
        document.documentElement.style.cursor = "none";
        document.body.style.cursor = "none";

        const style = document.createElement("style");
        style.id = "custom-cursor-styles";
        style.textContent = `*, *::before, *::after { cursor: none !important; }`;
        document.head.appendChild(style);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.documentElement.style.cursor = "";
            document.body.style.cursor = "";
            const styleEl = document.getElementById("custom-cursor-styles");
            if (styleEl) styleEl.remove();
        };
    }, [hasFinePointer, handleMouseMove, handleMouseOver, handleMouseDown, handleMouseUp]);

    if (!hasFinePointer) return null;

    return (
        <>
            {/* Outer ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            >
                <motion.div
                    className="rounded-full border-[1.5px] border-white/60"
                    animate={{
                        width: isHovering ? 48 : 32,
                        height: isHovering ? 48 : 32,
                        borderColor: isHovering
                            ? "rgba(139, 92, 246, 0.8)"
                            : "rgba(255, 255, 255, 0.5)",
                        scale: isClicking ? 0.85 : 1,
                    }}
                    transition={{
                        type: "spring",
                        damping: 20,
                        stiffness: 300,
                    }}
                    style={{
                        boxShadow: isHovering
                            ? "0 0 20px rgba(139, 92, 246, 0.4), inset 0 0 10px rgba(139, 92, 246, 0.1)"
                            : "0 0 10px rgba(255, 255, 255, 0.1)",
                    }}
                />
            </motion.div>

            {/* Inner dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            >
                <motion.div
                    className="rounded-full bg-white"
                    animate={{
                        width: isHovering ? 8 : 6,
                        height: isHovering ? 8 : 6,
                        opacity: isClicking ? 0.6 : 1,
                        backgroundColor: isHovering ? "#8b5cf6" : "#ffffff",
                    }}
                    transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 400,
                    }}
                    style={{
                        boxShadow: "0 0 6px rgba(255, 255, 255, 0.5)",
                    }}
                />
            </motion.div>
        </>
    );
}
