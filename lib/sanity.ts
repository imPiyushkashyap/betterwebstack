import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url'

// Sanity client configuration
export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!, // Use current date or your preferred API version
    useCdn: process.env.NODE_ENV === 'production', // Use CDN in production for faster response
    token: process.env.SANITY_API_TOKEN, // Optional: only needed for write operations or private datasets
})

// Image URL builder for Sanity images
const builder = createImageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
    return builder.image(source)
}
