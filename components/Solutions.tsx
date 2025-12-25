"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Search, 
  Bot, 
  BarChart3, 
  Zap, 
  Palette,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    id: "nextjs-development",
    icon: Code2,
    title: "Next.js Development",
    description: "Lightning-fast, SEO-optimized websites built with the latest Next.js features including App Router, Server Components, and edge runtime.",
    badge: "Core",
    color: "text-blue-500",
    features: ["App Router", "Server Components", "Edge Runtime"]
  },
  {
    id: "seo-optimization",
    icon: Search,
    title: "SEO Optimization",
    description: "Comprehensive SEO strategies including technical SEO, content optimization, and structured data to boost your search rankings.",
    badge: "Growth",
    color: "text-green-500",
    features: ["Technical SEO", "Meta Optimization", "Rich Snippets"]
  },
  {
    id: "ai-chatbots",
    icon: Bot,
    title: "AI Chatbots",
    description: "Intelligent conversational AI powered by the latest LLMs to engage visitors, answer questions, and convert leads 24/7.",
    badge: "AI",
    color: "text-purple-500",
    features: ["Custom Training", "Lead Capture", "24/7 Support"]
  },
  {
    id: "analytics-crm",
    icon: BarChart3,
    title: "Analytics & CRM",
    description: "Deep insights into user behavior with integrated CRM tools to track, nurture, and convert your leads effectively.",
    badge: "Data",
    color: "text-orange-500",
    features: ["User Tracking", "Lead Scoring", "Conversion Funnels"]
  },
  {
    id: "automation",
    icon: Zap,
    title: "Automation",
    description: "Streamline your workflows with smart automation for email sequences, lead routing, and business processes.",
    badge: "Efficiency",
    color: "text-yellow-500",
    features: ["Email Flows", "Webhooks", "Integrations"]
  },
  {
    id: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed to delight users and maximize conversions with modern design principles.",
    badge: "Design",
    color: "text-pink-500",
    features: ["Responsive", "Accessible", "Dark Mode"]
  }
];

export default function Solutions() {
  return (
    <section className="w-full py-16 md:py-24" id="solutions">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm">
            What We Offer
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Complete Web Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, launch, and scale your digital presence—all in one place.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 border-border/50 hover:border-border"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-lg bg-muted/50 ${solution.color}`}>
                    <solution.icon className="h-5 w-5" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {solution.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {solution.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {solution.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Link href={`/solutions#${solution.id}`} className="mt-4 flex items-center text-sm text-muted-foreground group-hover:text-primary transition-colors cursor-pointer inline-flex">
                  <span>Learn more</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
