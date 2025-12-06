"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { NavbarDemo } from "@/component/Navbar"
import { VercelCard } from "@/components/VercelCard"
import type { BlogPost } from "@/types/blog"
import { Triangle } from "lucide-react"

// Skeleton loader for individual blog post
function BlogPostSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-12 bg-muted rounded w-3/4 mb-6" />
      <div className="flex items-center gap-4 mb-8">
        <div className="h-4 bg-muted rounded w-24" />
        <div className="h-4 bg-muted rounded w-32" />
      </div>
      <div className="h-96 bg-muted rounded mb-8" />
      <div className="space-y-4">
        <div className="h-4 bg-muted rounded w-full" />
        <div className="h-4 bg-muted rounded w-full" />
        <div className="h-4 bg-muted rounded w-5/6" />
        <div className="h-4 bg-muted rounded w-full" />
        <div className="h-4 bg-muted rounded w-4/6" />
      </div>
    </div>
  )
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: Replace with actual Sanity fetch
    // Example: fetchBlogPost(slug).then(setPost).finally(() => setLoading(false))
    
    // Temporary mock data for demonstration
    setTimeout(() => {
      setPost({
        id: "1",
        title: "Sample Blog Post",
        slug: slug,
        description: "This is a sample blog post description that will be replaced with actual Sanity data.",
        date: "Dec 5, 2024",
        authors: [{ name: "Author Name" }],
        icon: Triangle,
        mainImage: "/placeholder.svg",
        content: "Full blog post content will be rendered here from Sanity CMS.",
      })
      setLoading(false)
    }, 1000)
  }, [slug])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavbarDemo />
      <div className="mx-auto max-w-4xl px-6 pt-24 pb-16">
        {loading ? (
          <BlogPostSkeleton />
        ) : post ? (
          <article>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.authors.map((a) => a.name).join(", ")}</span>
            </div>

            {post.mainImage && (
              <div className="mb-8 rounded-lg overflow-hidden">
                <img
                  src={post.mainImage}
                  alt={post.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {post.description}
              </p>
              
              {/* TODO: Render Sanity block content here */}
              <div className="mt-8">
                {post.content}
              </div>
            </div>
          </article>
        ) : (
          <div className="text-center py-16">
            <h1 className="text-3xl font-bold mb-4">Blog post not found</h1>
            <p className="text-muted-foreground">
              The blog post you're looking for doesn't exist.
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
