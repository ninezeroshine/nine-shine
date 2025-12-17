"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export function ContactForm() {
    const t = useTranslations("contact");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    // Create schema with translated messages
    const formSchema = z.object({
        name: z.string().min(1, t("validation.nameRequired")),
        email: z.string().min(1, t("validation.emailRequired")).email(t("validation.emailInvalid")),
        company: z.string().optional(),
        service: z.string().optional(),
        message: z.string().min(1, t("validation.messageRequired")).min(10, t("validation.messageMinLength")),
    });

    type FormData = z.infer<typeof formSchema>;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));
            console.log("Form data:", data);
            setSubmitStatus("success");
            reset();
        } catch {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-16 md:py-24">
            <div className="container-wide">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="heading-md text-text-primary mb-8">{t("formTitle")}</h2>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label className="block text-sm text-text-secondary mb-2">
                                    {t("form.name")} *
                                </label>
                                <input
                                    {...register("name")}
                                    placeholder={t("form.namePlaceholder")}
                                    className="w-full px-4 py-4 bg-bg-secondary border border-white/10 rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors"
                                />
                                {errors.name && (
                                    <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm text-text-secondary mb-2">
                                    {t("form.email")} *
                                </label>
                                <input
                                    {...register("email")}
                                    type="email"
                                    placeholder={t("form.emailPlaceholder")}
                                    className="w-full px-4 py-4 bg-bg-secondary border border-white/10 rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors"
                                />
                                {errors.email && (
                                    <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Company */}
                            <div>
                                <label className="block text-sm text-text-secondary mb-2">
                                    {t("form.company")}
                                </label>
                                <input
                                    {...register("company")}
                                    placeholder={t("form.companyPlaceholder")}
                                    className="w-full px-4 py-4 bg-bg-secondary border border-white/10 rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors"
                                />
                            </div>

                            {/* Service */}
                            <div>
                                <label className="block text-sm text-text-secondary mb-2">
                                    {t("form.service")}
                                </label>
                                <select
                                    {...register("service")}
                                    className="w-full px-4 py-4 bg-bg-secondary border border-white/10 rounded-xl text-text-primary focus:outline-none focus:border-accent/50 transition-colors appearance-none cursor-pointer"
                                    defaultValue=""
                                >
                                    <option value="" disabled className="bg-bg-secondary">
                                        {t("form.servicePlaceholder")}
                                    </option>
                                    <option value="animation" className="bg-bg-secondary">
                                        {t("form.serviceOptions.animation")}
                                    </option>
                                    <option value="graphics" className="bg-bg-secondary">
                                        {t("form.serviceOptions.graphics")}
                                    </option>
                                    <option value="web" className="bg-bg-secondary">
                                        {t("form.serviceOptions.web")}
                                    </option>
                                    <option value="other" className="bg-bg-secondary">
                                        {t("form.serviceOptions.other")}
                                    </option>
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm text-text-secondary mb-2">
                                    {t("form.message")} *
                                </label>
                                <textarea
                                    {...register("message")}
                                    placeholder={t("form.messagePlaceholder")}
                                    rows={5}
                                    className="w-full px-4 py-4 bg-bg-secondary border border-white/10 rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors resize-none"
                                />
                                {errors.message && (
                                    <p className="mt-2 text-sm text-red-400">{errors.message.message}</p>
                                )}
                            </div>

                            {/* Submit Status */}
                            {submitStatus === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl"
                                >
                                    <p className="text-green-400 text-sm">{t("form.success")}</p>
                                </motion.div>
                            )}

                            {submitStatus === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl"
                                >
                                    <p className="text-red-400 text-sm">{t("form.error")}</p>
                                </motion.div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 px-8 bg-gradient-to-r from-accent to-warm text-white font-medium rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                {isSubmitting ? t("form.sending") : t("form.submit")}
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="heading-md text-text-primary mb-8">{t("infoTitle")}</h2>

                        <div className="space-y-8">
                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                                    <MailIcon className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <p className="text-sm text-text-tertiary mb-1">Email</p>
                                    <a
                                        href={`mailto:${t("info.email")}`}
                                        className="text-text-primary hover:text-accent transition-colors"
                                    >
                                        {t("info.email")}
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-warm/10 flex items-center justify-center flex-shrink-0">
                                    <PhoneIcon className="w-6 h-6 text-warm" />
                                </div>
                                <div>
                                    <p className="text-sm text-text-tertiary mb-1">Phone</p>
                                    <a
                                        href={`tel:${t("info.phone").replace(/\s/g, "")}`}
                                        className="text-text-primary hover:text-warm transition-colors"
                                    >
                                        {t("info.phone")}
                                    </a>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                                    <MapPinIcon className="w-6 h-6 text-cyan-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-text-tertiary mb-1">Address</p>
                                    <p className="text-text-primary">{t("info.address")}</p>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                                    <ClockIcon className="w-6 h-6 text-green-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-text-tertiary mb-1">Working Hours</p>
                                    <p className="text-text-primary">{t("info.workingHours")}</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-12 pt-8 border-t border-white/5">
                            <h3 className="text-sm text-text-tertiary mb-4">{t("social.title")}</h3>
                            <div className="flex gap-3">
                                <SocialLink href="https://instagram.com" label={t("social.instagram")}>
                                    <InstagramIcon />
                                </SocialLink>
                                <SocialLink href="https://behance.net" label={t("social.behance")}>
                                    <BehanceIcon />
                                </SocialLink>
                                <SocialLink href="https://dribbble.com" label={t("social.dribbble")}>
                                    <DribbbleIcon />
                                </SocialLink>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

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
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 text-text-tertiary hover:text-text-primary hover:bg-white/10 hover:border-white/10 transition-all duration-300"
        >
            {children}
        </a>
    );
}

// Icons
function MailIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    );
}

function PhoneIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}

function MapPinIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

function ClockIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
    );
}

function BehanceIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
        </svg>
    );
}

function DribbbleIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
            <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
            <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
        </svg>
    );
}
