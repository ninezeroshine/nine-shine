import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ["var(--font-heading)", "system-ui", "sans-serif"],
                body: ["var(--font-body)", "system-ui", "sans-serif"],
            },
            colors: {
                // Background colors
                bg: {
                    primary: "#0a0a0b",
                    secondary: "#111113",
                    tertiary: "#1a1a1d",
                    card: "#151517",
                },
                // Text colors
                text: {
                    primary: "#fafafa",
                    secondary: "#a1a1aa",
                    tertiary: "#71717a",
                    muted: "#52525b",
                },
                // Accent - Electric Violet
                accent: {
                    DEFAULT: "#8b5cf6",
                    light: "#a78bfa",
                    dark: "#7c3aed",
                },
                // Warm Accent - Coral/Orange
                warm: {
                    DEFAULT: "#f97316",
                    light: "#fb923c",
                    dark: "#ea580c",
                },
            },
            borderRadius: {
                "4xl": "2rem",
                "5xl": "2.5rem",
            },
            animation: {
                "fade-in": "fadeIn 0.6s ease-out forwards",
                "slide-up": "slideUp 0.6s ease-out forwards",
                "scale-in": "scaleIn 0.4s ease-out forwards",
                "float": "float 6s ease-in-out infinite",
                "pulse-glow": "pulseGlow 3s ease-in-out infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                scaleIn: {
                    "0%": { opacity: "0", transform: "scale(0.95)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                pulseGlow: {
                    "0%, 100%": { opacity: "0.5" },
                    "50%": { opacity: "1" },
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-accent": "linear-gradient(135deg, #8b5cf6 0%, #f97316 100%)",
            },
        },
    },
    plugins: [],
} satisfies Config;
