import { VercelCard } from "./VercelCard"

export function BlogCardSkeleton() {
  return (
    <VercelCard animateOnHover={false} glowEffect={false} className="bg-background">
      <article className="p-6 md:p-8 h-full animate-pulse">
        <div className="flex items-start justify-between mb-6">
          {/* Icon skeleton */}
          <div className="h-8 w-8 bg-muted rounded" />
          {/* Date skeleton */}
          <div className="h-4 w-16 bg-muted rounded" />
        </div>
        
        {/* Title skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-6 bg-muted rounded w-3/4" />
          <div className="h-6 bg-muted rounded w-1/2" />
        </div>
        
        {/* Description skeleton */}
        <div className="space-y-2 mb-6">
          <div className="h-4 bg-muted rounded w-full" />
          <div className="h-4 bg-muted rounded w-full" />
          <div className="h-4 bg-muted rounded w-5/6" />
          <div className="h-4 bg-muted rounded w-4/6" />
        </div>
        
        {/* Author skeleton */}
        <div className="flex items-center gap-2">
          <div className="h-4 bg-muted rounded w-32" />
        </div>
      </article>
    </VercelCard>
  )
}

export function BlogCardSkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 py-8">
      {Array.from({ length: count }).map((_, index) => (
        <BlogCardSkeleton key={index} />
      ))}
    </section>
  )
}
