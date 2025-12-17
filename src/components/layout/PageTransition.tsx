"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "@/i18n/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef } from "react";

// FrozenRouter helps standard Framer Motion exit animations work in Next.js App Router
// by holding onto the previous route's context while it animates out
function FrozenRouter(props: { children: React.ReactNode }) {
    const context = useContext(LayoutRouterContext);
    const frozenRef = useRef(context);

    // Only update ref on first render, keep frozen for exit animations
    if (frozenRef.current === null) {
        frozenRef.current = context;
    }

    return (
        <LayoutRouterContext.Provider value={frozenRef.current}>
            {props.children}
        </LayoutRouterContext.Provider>
    );
}

export function PageTransition({ children }: { children: React.ReactNode }) {
    // We use the pathname as key to trigger animations on route change
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex-grow w-full"
            >
                <FrozenRouter>{children}</FrozenRouter>
            </motion.div>
        </AnimatePresence>
    );
}
