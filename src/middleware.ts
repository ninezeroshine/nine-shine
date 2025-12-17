import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    // Match all pathnames except for
    // - /api routes
    // - /_next (Next.js internals)
    // - /static (static files)
    // - /studio (Sanity CMS)
    // - /favicon.ico, /sitemap.xml, /robots.txt (static files)
    matcher: ['/', '/(en|ru)/:path*', '/((?!api|_next|static|studio|favicon.ico|sitemap.xml|robots.txt).*)']
};
