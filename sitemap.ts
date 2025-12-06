export default function sitemap() {
    const baseUrl = "https://betterwebstack.vercel.app";

    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/blogs`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
        },
    ];
}
