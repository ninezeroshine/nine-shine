export const metadata = {
    title: "Nine Shine Studio - CMS",
};

export default function StudioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body style={{ margin: 0, padding: 0 }}>{children}</body>
        </html>
    );
}
