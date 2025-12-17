"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

const navItems = [
    { href: "/services", key: "services" },
    { href: "/projects", key: "projects" },
    { href: "/about", key: "about" },
    { href: "/contacts", key: "contacts" },
] as const;

export function Header() {
    const t = useTranslations("navigation");
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "py-4 bg-bg-primary/80 backdrop-blur-xl border-b border-white/5"
                : "py-6"
                }`}
        >
            <nav className="container-wide flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="relative z-10 group"
                >
                    <motion.div
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Logo Icon */}
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-warm flex items-center justify-center">
                            <span className="text-white font-bold text-lg">N</span>
                        </div>
                        <span className="font-heading text-xl font-semibold tracking-tight text-text-primary">
                            Nine<span className="text-accent">Shine</span>
                        </span>
                    </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <motion.ul
                    className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/5"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {navItems.map((item, index) => (
                        <motion.li
                            key={item.key}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                        >
                            <Link
                                href={item.href}
                                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${pathname === item.href
                                    ? "text-text-primary bg-white/10"
                                    : "text-text-secondary hover:text-text-primary"
                                    }`}
                            >
                                {t(item.key)}
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>

                {/* Right side - Language Switcher & Contact */}
                <motion.div
                    className="hidden md:flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <LanguageSwitcher />
                    <Link
                        href="/contacts"
                        className="group px-5 py-2.5 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-full hover:bg-white transition-all duration-300"
                    >
                        <span className="group-hover:text-black">{t("letsTalk")}</span>
                    </Link>
                </motion.div>

                {/* Mobile Menu Button */}
                <motion.button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden relative z-[60] w-11 h-11 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/15 transition-colors"
                    aria-label="Toggle menu"
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="w-6 h-5 flex flex-col justify-between">
                        <motion.span
                            className="block w-full h-[3px] bg-white rounded-full origin-center"
                            animate={{
                                rotate: isMobileMenuOpen ? 45 : 0,
                                y: isMobileMenuOpen ? 9 : 0,
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                        <motion.span
                            className="block w-full h-[3px] bg-white rounded-full"
                            animate={{
                                opacity: isMobileMenuOpen ? 0 : 1,
                                scaleX: isMobileMenuOpen ? 0 : 1,
                            }}
                            transition={{ duration: 0.2 }}
                        />
                        <motion.span
                            className="block w-full h-[3px] bg-white rounded-full origin-center"
                            animate={{
                                rotate: isMobileMenuOpen ? -45 : 0,
                                y: isMobileMenuOpen ? -9 : 0,
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                    </div>
                </motion.button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-bg-primary/98 backdrop-blur-xl md:hidden z-50 flex flex-col pt-24"
                        >
                            <div className="container-wide h-full flex flex-col justify-center">
                                <ul className="space-y-8">
                                    {navItems.map((item, index) => (
                                        <motion.li
                                            key={item.key}
                                            initial={{ opacity: 0, x: -40 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + index * 0.1 }}
                                        >
                                            <Link
                                                href={item.href}
                                                className={`block text-7xl sm:text-8xl font-heading font-semibold ${pathname === item.href
                                                    ? "text-white"
                                                    : "text-white/60 hover:text-white"
                                                    } transition-colors`}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {t(item.key)}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                                <motion.div
                                    className="mt-16 flex"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <LanguageSwitcher />
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
