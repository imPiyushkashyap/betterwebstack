import { MetadataRoute } from 'next'
import { fetchBlogPosts } from '@/lib/blog'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://betterwebstack.com'

    // Fetch all blog posts
    const posts = await fetchBlogPosts()

    const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${baseUrl}/blogs/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.7,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${baseUrl}/blogs`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        ...blogEntries,
    ]
}
