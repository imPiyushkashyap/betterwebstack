import { LucideIcon } from "lucide-react"

// Sanity blog post type - customize these fields based on your actual Sanity schema
export interface SanityBlogPost {
    _id: string
    title: string
    slug: {
        current: string
    }
    description?: string
    publishedAt: string
    author?: SanityAuthor | SanityAuthor[]
    mainImage?: SanityImage
    content?: any // Block content from Sanity
    categories?: string[]
    tags?: string[]
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
}

// Frontend blog post type for display
export interface BlogPost {
    id: string
    title: string
    slug: string
    description: string
    date: string
    authors: Author[]
    icon?: LucideIcon
    mainImage?: string
    content?: any
}

export interface Author {
    name: string
    avatar?: string
}
