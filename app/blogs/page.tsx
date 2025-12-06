"use client"

import { useEffect, useState } from "react"
import { BlogCTA } from "@/components/BlogCTA"
import { FeaturedPosts } from "@/components/FeaturePost"
import { BlogCardSkeletonGrid } from "@/components/BlogCardSkeleton"
import { NavbarDemo } from "@/component/Navbar"
import type { BlogPost } from "@/types/blog"
import { fetchBlogPosts } from "@/lib/blog"
import { Construction } from "lucide-react"

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBlogPosts()
      .then(setPosts)
      .finally(() => setLoading(false))
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavbarDemo />
      <div className="mx-auto max-w-6xl px-6 pt-24">
        {loading ? (
          <BlogCardSkeletonGrid count={6} />
        ) : posts.length > 0 ? (
          <FeaturedPosts posts={posts} initialDisplayCount={6} />
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="rounded-full bg-muted p-4 mb-4">
              <Construction className="h-8 w-8 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-2">We are working on it</h2>
            
          </div>
        )}
        <BlogCTA />
      </div>
    </main>
  )
}