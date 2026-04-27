export default function sitemap() {
    const baseUrl = "https://betterwebstack.vercel.app";
    const now = new Date();

    return [
        { url: `${baseUrl}/`, lastModified: now },
        { url: `${baseUrl}/blogs`, lastModified: now },
        { url: `${baseUrl}/contact`, lastModified: now },

        { url: `${baseUrl}/solutions/ai-agents`, lastModified: now },
        { url: `${baseUrl}/solutions/ai-driven-websites`, lastModified: now },
        { url: `${baseUrl}/solutions/autonomous-workflows`, lastModified: now },
        { url: `${baseUrl}/solutions/conversation-funnels`, lastModified: now },
        { url: `${baseUrl}/solutions/conversation-intelligence`, lastModified: now },
        { url: `${baseUrl}/solutions/custom-ai-solutions`, lastModified: now },
    ];
}