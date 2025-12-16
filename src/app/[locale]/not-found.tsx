import { Link } from "@/i18n/navigation";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-50">
            <div className="text-center px-6">
                <h1 className="font-heading text-8xl md:text-9xl font-bold text-neutral-200 mb-4">
                    404
                </h1>
                <h2 className="font-heading text-2xl md:text-3xl font-medium text-neutral-900 mb-4">
                    Page not found
                </h2>
                <p className="text-neutral-600 mb-8 max-w-md mx-auto">
                    Sorry, we couldn&apos;t find the page you&apos;re looking for.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white font-medium rounded-full hover:bg-neutral-800 transition-colors duration-300"
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m12 19-7-7 7-7" />
                        <path d="M19 12H5" />
                    </svg>
                    Back to home
                </Link>
            </div>
        </div>
    );
}
