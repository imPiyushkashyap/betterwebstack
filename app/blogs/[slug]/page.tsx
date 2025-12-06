import { client } from "@/lib/sanity"
import { PortableText } from "@portabletext/react"
import UnderlineButton from "@/components/UnderlineButton"

interface Props {
  params: Promise<{ slug: string }>
}

interface BlogPost {
  title: string
  date: string
  body: any
  author: {
    name: string
  }
  mainImage?: {
    asset: any
  }
  readTime?: number
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params

  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    "date": publishedAt,
    body,
    author->{name},
    mainImage,
    readTime
  }`

  const post: BlogPost | null = await client.fetch(query, { slug })

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground p-6">
        <div className="max-w-3xl mx-auto pt-10 md:pt-32">
           <UnderlineButton href="/blogs" />
           <p className="text-center mt-10 text-muted-foreground">Post not found</p>
        </div>
      </div>
    )
  }

  return (
    <article className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto p-6 pt-10 md:pt-32">
        <div className="mb-10">
          <UnderlineButton href="/blogs" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-foreground mb-10">
          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
          <span>•</span>
          <span>{post.author?.name}</span>
          {post.readTime && (
            <>
              <span>•</span>
              <span>{post.readTime} min read</span>
            </>
          )}
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <PortableText value={post.body} />
        </div>

        <p className="text-foreground text-sm mt-12 pt-10 border-t border-border">
          Published by{" "}
          <span className="text-foreground font-bold">{post.author?.name}</span>
        </p>
      </div>
    </article>
  )
}
