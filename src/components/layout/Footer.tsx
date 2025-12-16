"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const footerLinks = {
    navigation: [
        { href: "/services", key: "services" },
        { href: "/projects", key: "projects" },
        { href: "/about", key: "about" },
        { href: "/contacts", key: "contacts" },
    ],
};

export function Footer() {
    const t = useTranslations("navigation");
    const tFooter = useTranslations("footer");
    const tContact = useTranslations("contact");

    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/5">
            {/* Main Footer */}
            <div className="container-wide py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-2"
                    >
                        <Link href="/" className="inline-flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-warm flex items-center justify-center">
                                <span className="text-white font-bold text-lg">N</span>
                            </div>
                            <span className="font-heading text-xl font-semibold text-text-primary">
                                Nine<span className="text-accent">Shine</span>
                            </span>
                        </Link>
                        <p className="text-text-secondary text-sm max-w-md leading-relaxed">
                            {tFooter("description")}
                        </p>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h4 className="text-label mb-6">{tFooter("navigation")}</h4>
                        <ul className="space-y-4">
                            {footerLinks.navigation.map((link) => (
                                <li key={link.key}>
                                    <Link
                                        href={link.href}
                                        className="text-text-secondary hover:text-text-primary text-sm transition-colors duration-300"
                                    >
                                        {t(link.key)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 className="text-label mb-6">{tFooter("contact")}</h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href={`mailto:${tContact("info.email")}`}
                                    className="text-text-secondary hover:text-text-primary text-sm transition-colors duration-300"
                                >
                                    {tContact("info.email")}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`tel:${tContact("info.phone").replace(/\s/g, "")}`}
                                    className="text-text-secondary hover:text-text-primary text-sm transition-colors duration-300"
                                >
                                    {tContact("info.phone")}
                                </a>
                            </li>
                        </ul>

                        {/* Social Links */}
                        <div className="flex items-center gap-3 mt-6">
                            <SocialLink href="https://instagram.com" label="Instagram">
                                <InstagramIcon />
                            </SocialLink>
                            <SocialLink href="https://behance.net" label="Behance">
                                <BehanceIcon />
                            </SocialLink>
                            <SocialLink href="https://dribbble.com" label="Dribbble">
                                <DribbbleIcon />
                            </SocialLink>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-text-muted text-xs">
                        © {currentYear} Nine Shine. {tFooter("rights")}.
                    </p>
                    <Link
                        href="/privacy"
                        className="text-text-muted hover:text-text-secondary text-xs transition-colors duration-300"
                    >
                        {tFooter("privacy")}
                    </Link>
                </div>
            </div>
        </footer>
    );
}

// Social Link Component
function SocialLink({
    href,
    label,
    children,
}: {
    href: string;
    label: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/5 text-text-tertiary hover:text-text-primary hover:bg-white/10 hover:border-white/10 transition-all duration-300"
        >
            {children}
        </a>
    );
}

// Social Icons
function InstagramIcon() {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
    );
}

function BehanceIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
        </svg>
    );
}

function DribbbleIcon() {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
            <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
            <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
        </svg>
    );
}
