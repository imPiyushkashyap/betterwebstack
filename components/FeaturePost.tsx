"use client"

import { useState } from "react"
import Link from "next/link"
import { Triangle } from "lucide-react"
import { VercelCard } from "./VercelCard"
import { Button } from "./ui/button"
import type { BlogPost } from "@/types/blog"

interface FeaturedPostsProps {
  posts?: BlogPost[]
  initialDisplayCount?: number
}

export function FeaturedPosts({ posts, initialDisplayCount = 6 }: FeaturedPostsProps) {
  const [displayCount, setDisplayCount] = useState(initialDisplayCount)
  
  // Use provided posts or fall back to empty array
  const blogPosts = posts || []
  const displayedPosts = blogPosts.slice(0, displayCount)
  const hasMore = displayCount < blogPosts.length

  const handleShowMore = () => {
    setDisplayCount((prev) => Math.min(prev + 6, blogPosts.length))
  }

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 py-8">
        {displayedPosts.map((post) => {
          const Icon = post.icon || Triangle
          
          return (
            <Link key={post.id} href={`/blogs/${post.slug}`}>
              <VercelCard 
                animateOnHover={false} 
                glowEffect={false} 
                className="cursor-pointer bg-background h-full transition-transform hover:scale-[1.02]"
                contentClassName="p-0 items-stretch justify-start"
              >
                <article className="p-6 md:p-8 h-full w-full">
                  <div className="flex items-start justify-between mb-6">
                    <Icon className="h-8 w-8 text-foreground" strokeWidth={1.5} />
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  
                  <h2 className="text-xl font-semibold mb-4 leading-tight text-foreground">
                    {post.title}
                  </h2>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-6">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      {post.authors.length > 2
                        ? `${post.authors[0].name}, ${post.authors[1].name}, and ${post.authors.length - 2} others`
                        : post.authors.map((a) => a.name).join(" and ")}
                    </span>
                  </div>
                </article>
              </VercelCard>
            </Link>
          )
        })}
      </section>

      {hasMore && (
        <div className="flex justify-center pb-8">
          <Button
            onClick={handleShowMore}
            variant="outline"
            className="border-neutral-700 text-white hover:bg-neutral-800 bg-transparent"
          >
            Show More
          </Button>
        </div>
      )}
    </>
  )
}
