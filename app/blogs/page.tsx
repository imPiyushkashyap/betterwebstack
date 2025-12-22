import { BlogPostsClient } from "@/components/BlogPostsClient";
import { NavbarDemo } from "@/components/Navbar";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavbarDemo />
      <div className="mx-auto max-w-6xl px-6 pt-24">
        <BlogPostsClient />
      </div>
    </main>
  );
}

