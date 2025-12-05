import { BlogCTA } from "@/components/BlogCTA"
import { FeaturedPosts } from "@/components/FeaturePost"
import { NavbarDemo } from "@/component/Navbar"


export const metadata = {
  title: "Blog – Vercel",
  description: "Explore articles on web development, AI, and the future of the web.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavbarDemo />
      <div className="mx-auto max-w-6xl px-6 pt-24">
        <FeaturedPosts />
        <BlogCTA />
      </div>
     
    </main> 
  )
}