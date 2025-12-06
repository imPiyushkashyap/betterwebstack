import { LucideIcon } from "lucide-react"

// Sanity blog post type - customize these fields based on your actual Sanity schema
export interface SanityBlogPost {
    _id: string
    title: string
    slug: {
        current: string
    }
    description?: string
    excerpt?: string
    publishedAt: string
    author?: SanityAuthor | SanityAuthor[]
    mainImage?: SanityImage
    content?: any // Block content from Sanity
    categories?: string[]
    tags?: string[]
    readTime?: number
    featuredPost?: boolean
    seo?: SanitySEO
}

export interface SanitySEO {
    metaTitle?: string
    metaDescription?: string
    metaKeywords?: string[]
    openGraphImage?: SanityImage
    noIndex?: boolean
    noFollow?: boolean
    canonicalUrl?: string
}

export interface SanityAuthor {
    name: string
    image?: SanityImage
    bio?: string
}

export interface SanityImage {
    asset: {
        _ref: string
        _type: string
    }
    alt?: string
    caption?: string
}

// Frontend blog post type for display
export interface BlogPost {
    id: string
    title: string
    slug: string
    description: string
    excerpt?: string
    date: string
    authors: Author[]
    icon?: LucideIcon
    mainImage?: {
        url: string
        alt?: string
        caption?: string
    }
    content?: any
    categories?: string[]
    tags?: string[]
    readTime?: number
    featuredPost?: boolean
    seo?: {
        title?: string
        description?: string
        keywords?: string[]
        ogImage?: string
        noIndex?: boolean
        noFollow?: boolean
        canonicalUrl?: string
    }
}

export interface Author {
    name: string
    avatar?: string
}
