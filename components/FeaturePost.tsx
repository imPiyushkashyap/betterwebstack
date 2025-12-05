"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"
import { Triangle, CheckCircle, Grid3X3 } from "lucide-react"
import { VercelCard } from "./VercelCard"

const featuredPosts = [
  {
    icon: Triangle,
    date: "Oct 23",
    title: "You can just ship agents",
    description:
      "Building agents should feel like shaping an idea rather than fighting a maze of code or infrastructure. And we've seen this story before. A decade ago, the web moved from hand-rolled routing and homegrown build scripts to opinionated frameworks and a platform that understood what developers were trying to do. Velocity went up, quality followed, and a generation of products appeared.",
    authors: [{ name: "Dan Fein", avatar: "/dan-graffiti.png" }],
  },
  {
    icon: CheckCircle,
    date: "Oct 23",
    title: "Built-in durability: Introducing Workflow Development Kit",
    description:
      "Building reliable software shouldn't require mastering distributed systems. Yet for developers building AI agents or data pipelines, making async functions reliable typically requires message queues, retry logic, and persistence layers. Adding that infrastructure often takes longer than writing the actual business logic. The Workflow Development Kit (WDK) is an open...",
    authors: [
      { name: "Pranay", avatar: "/pranay.jpg" },
      { name: "Dan", avatar: "/dan2.jpg" },
      { name: "3 others", avatar: "/diverse-professional-team.png", count: "+3" },
    ],
  },
  {
    icon: Grid3X3,
    date: "Oct 23",
    title: "Zero-config backends on Vercel AI Cloud",
    description:
      "The same ease of use you expect from Vercel, now extended to your backends. Since we introduced the AI Cloud at Vercel Ship, teams have been building AI applications that go beyond simple prompt-to-response patterns. These apps orchestrate multi-step workflows, spawn sub-agents, and run processes that take hours or days. They need backends that process data, run inference, and respond to real-time...",
    authors: [
      { name: "Marcos", avatar: "/marcos.jpg" },
      { name: "Dan", avatar: "/dan3.jpg" },
    ],
  },
]

export function FeaturedPosts() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 py-8">
      {featuredPosts.map((post, index) => (
        <VercelCard key={index} animateOnHover={false} glowEffect={false} className="cursor-pointer bg-background">
          <article className="p-6 md:p-8 h-full">
            <div className="flex items-start justify-between mb-6">
              <post.icon className="h-8 w-8 text-foreground" strokeWidth={1.5} />
              <span className="text-sm text-muted-foreground">{post.date}</span>
            </div>
            <h2 className="text-xl font-semibold mb-4 leading-tight text-foreground">{post.title}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-6">{post.description}</p>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {post.authors.map((author, i) => (
                  <Avatar key={i} className="h-7 w-7 border-2 border-border">
                    <Image 
                      src={author.avatar || "/placeholder.svg"} 
                      alt={author.name}
                      width={28}
                      height={28}
                      className="rounded-full object-cover"
                    />
                    <AvatarFallback className="bg-muted text-xs">{author.name[0]}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {post.authors.length > 2
                  ? `${post.authors[0].name}, ${post.authors[1].name}, and ${post.authors.length - 2} others`
                  : post.authors.map((a) => a.name).join(" and ")}
              </span>
            </div>
          </article>
        </VercelCard>
      ))}
    </section>
  )
}
