"use client";

import { useEffect, useRef } from "react";

/**
 * InteractiveGrid Component
 * A high-end Canvas-based grid that reacts to mouse movement.
 * Features magnetic dots and a smooth spotlight effect.
 */
export function InteractiveGrid() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: 0, y: 0, active: false });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let width: number;
        let height: number;
        const dots: { x: number; y: number; ox: number; oy: number }[] = [];
        const spacing = 40;

        const init = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            dots.length = 0;

            for (let x = spacing / 2; x < width; x += spacing) {
                for (let y = spacing / 2; y < height; y += spacing) {
                    dots.push({ x, y, ox: x, oy: y });
                }
            }
        };

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // 1. Draw Spotlight Background
            if (mouse.current.active) {
                // Main Accent Spotlight (Violet)
                const gradient = ctx.createRadialGradient(
                    mouse.current.x, mouse.current.y, 0,
                    mouse.current.x, mouse.current.y, 500
                );
                gradient.addColorStop(0, "rgba(139, 92, 246, 0.15)");
                gradient.addColorStop(0.5, "rgba(139, 92, 246, 0.05)");
                gradient.addColorStop(1, "transparent");
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, width, height);

                // Warm Secondary Glow (Coral)
                const warmGradient = ctx.createRadialGradient(
                    mouse.current.x, mouse.current.y, 100,
                    mouse.current.x, mouse.current.y, 700
                );
                warmGradient.addColorStop(0, "rgba(249, 115, 22, 0.04)");
                warmGradient.addColorStop(1, "transparent");
                ctx.fillStyle = warmGradient;
                ctx.fillRect(0, 0, width, height);
            }

            // 2. Draw Magnetic Dots
            dots.forEach(dot => {
                let dx = mouse.current.x - dot.ox;
                let dy = mouse.current.y - dot.oy;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Displacement effect (Magnetic)
                if (dist < 250 && mouse.current.active) {
                    const force = (250 - dist) / 250;
                    // Move dots slightly TOWARDS the cursor
                    dot.x = dot.ox + dx * force * 0.15;
                    dot.y = dot.oy + dy * force * 0.15;

                    // Brighter and slightly larger dots near cursor
                    const alpha = 0.1 + (force * 0.4);
                    const size = 0.8 + (force * 0.6);
                    ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                    ctx.beginPath();
                    ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
                    ctx.fill();
                } else {
                    // Smooth return to original position
                    dot.x += (dot.ox - dot.x) * 0.08;
                    dot.y += (dot.oy - dot.y) * 0.08;
                    ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
                    ctx.beginPath();
                    ctx.arc(dot.x, dot.y, 0.8, 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            animationFrameId = requestAnimationFrame(render);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
            mouse.current.active = true;
        };

        const handleResize = () => {
            init();
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize);

        init();
        render();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 bg-bg-primary"
            style={{
                mixBlendMode: "screen", // Helps with integration on dark backgrounds
                opacity: 0.8
            }}
        />
    );
}
