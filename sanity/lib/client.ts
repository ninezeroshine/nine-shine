import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// Sanity client configuration
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2024-01-01";

// Client for fetching data
export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: process.env.NODE_ENV === "production",
});

// Image URL builder
const builder = imageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
    return builder.image(source);
}

// Helper for localized fields
export type Locale = "en" | "ru";

export function getLocalizedValue<T>(
    obj: { en?: T; ru?: T } | undefined,
    locale: Locale
): T | undefined {
    if (!obj) return undefined;
    return obj[locale] || obj.en; // Fallback to English
}
