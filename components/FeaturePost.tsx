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
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
        {displayedPosts.map((post) => {
          const Icon = post.icon || Triangle
          
          return (
            <Link key={post.id} href={`/blogs/${post.slug}`}>
              <VercelCard 
                animateOnHover={false} 
                glowEffect={false} 
                className="cursor-pointer bg-background h-full transition-transform hover:scale-[1.01]"
                contentClassName="p-0"
              >
                <article className="flex flex-col h-full w-full overflow-hidden">
                  {/* Image Section - Top */}
                  <div className="w-full h-48 bg-muted relative flex items-center justify-center overflow-hidden border-b border-neutral-200 dark:border-neutral-800">
                    {post.mainImage?.url ? (
                      <img 
                        src={post.mainImage.url} 
                        alt={post.mainImage.alt || post.title}
                        className="w-full h-full object-cover absolute inset-0 transition-transform duration-300 group-hover/canvas-card:scale-105"
                      />
                    ) : (
                      <Icon className="h-12 w-12 text-muted-foreground/20" strokeWidth={1} />
                    )}
                  </div>

                  {/* Content Section - Bottom */}
                  <div className="flex-1 p-5 flex flex-col">
                    <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground font-medium">
                      <time dateTime={post.date}>{post.date}</time>
                      {post.readTime && (
                        <>
                          <span>•</span>
                          <span>{post.readTime} min read</span>
                        </>
                      )}
                    </div>
                    
                    <h2 className="text-lg font-bold mb-2 leading-tight text-foreground line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    
                    <div className="flex items-center gap-2 mt-auto pt-2">
                      <span className="text-xs font-medium text-foreground">
                        {post.authors.length > 0 ? post.authors[0].name : 'Anonymous'}
                      </span>
                    </div>
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
