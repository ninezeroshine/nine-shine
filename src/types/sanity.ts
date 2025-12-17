export interface SanityProject {
    _id: string;
    slug: { current: string };
    title: string; // localized string handled by query projection or helper
    description: string;
    category: "animation" | "graphics" | "web";
    year: string;
    color: string;
    client: string;
    services: string[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    heroImage: any; // Sanity image object
}

export interface SanityProjectDetail extends SanityProject {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    contentBlocks?: any[];
}
