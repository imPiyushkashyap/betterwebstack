import { client, urlFor } from './sanity'
import type { SanityBlogPost, BlogPost, Author } from '@/types/blog'
import { Triangle } from 'lucide-react'

/**
 * Fetches all blog posts from Sanity CMS
 * @returns Array of blog posts formatted for the frontend
 */
export async function fetchBlogPosts(): Promise<BlogPost[]> {
    try {
        const query = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      description,
      excerpt,
      publishedAt,
      author->{name, image{asset, alt}},
      mainImage{asset, alt, caption},
      content,
      categories,
      tags,
      readTime,
      featuredPost,
      seo
    }`

        const posts: SanityBlogPost[] = await client.fetch(query)

        return posts.map(transformSanityPost)
    } catch (error) {
        console.error('Error fetching blog posts from Sanity:', error)
        throw error
    }
}

/**
 * Fetches a single blog post by slug
 * @param slug - The post slug
 * @returns Single blog post or null if not found
 */
export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
        const query = `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      excerpt,
      publishedAt,
      author->{name, image{asset, alt}},
      mainImage{asset, alt, caption},
      content,
      categories,
      tags,
      readTime,
      featuredPost,
      seo
    }`

        const post: SanityBlogPost = await client.fetch(query, { slug })

        if (!post) return null

        return transformSanityPost(post)
    } catch (error) {
        console.error(`Error fetching blog post with slug "${slug}":`, error)
        return null
    }
}

/**
 * Transforms a Sanity blog post to the frontend BlogPost format
 * @param post - Sanity blog post
 * @returns Transformed blog post
 */
function transformSanityPost(post: SanityBlogPost): BlogPost {
    // Handle single or multiple authors
    const authors: Author[] = Array.isArray(post.author)
        ? post.author.map(author => ({
            name: author.name,
            avatar: author.image?.asset ? urlFor(author.image).url() : undefined,
        }))
        : post.author
            ? [{
                name: post.author.name,
                avatar: post.author.image?.asset ? urlFor(post.author.image).url() : undefined,
            }]
            : []

    // Format date
    const date = new Date(post.publishedAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
    })

    return {
        id: post._id,
        title: post.title,
        slug: post.slug.current,
        description: post.description || '',
        excerpt: post.excerpt,
        date,
        authors,
        icon: Triangle, // You can customize this based on categories or tags
        mainImage: post.mainImage?.asset ? {
            url: urlFor(post.mainImage).url(),
            alt: post.mainImage.alt,
            caption: post.mainImage.caption,
        } : undefined,
        content: post.content,
        categories: post.categories,
        tags: post.tags,
        readTime: post.readTime,
        featuredPost: post.featuredPost,
        seo: post.seo ? {
            title: post.seo.metaTitle,
            description: post.seo.metaDescription,
            keywords: post.seo.metaKeywords,
            ogImage: post.seo.openGraphImage?.asset ? urlFor(post.seo.openGraphImage).url() : undefined,
            noIndex: post.seo.noIndex,
            noFollow: post.seo.noFollow,
            canonicalUrl: post.seo.canonicalUrl,
        } : undefined,
    }
}
