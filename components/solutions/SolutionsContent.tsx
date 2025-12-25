"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Search, 
  Bot, 
  BarChart3, 
  Zap, 
  Palette,
  CheckCircle2,
  Rocket,
  Globe,
  MessageSquare,
  TrendingUp,
  Workflow,
  Layout
} from "lucide-react";
import Link from "next/link";

const detailedSolutions = [
  {
    id: "nextjs-development",
    title: "Next.js Development",
    subtitle: "High-Performance Web Applications",
    description: "We build cutting-edge web applications using Next.js, the React framework for production. Our solution ensures lightning-fast performance, superior SEO through server-side rendering, and a robust architecture that scales with your business.",
    icon: Code2,
    badge: "Core Technology",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    features: [
      "Server-Side Rendering (SSR) & Static Site Generation (SSG)",
      "App Router & Server Components Architecture",
      "Edge Runtime & Middleware Integration",
      "API Route Optimization & Type-Safe Codebase",
      "Incremental Static Regeneration (ISR)"
    ],
    benefits: [
      "Load times under 1 second",
      "Perfect Lighthouse scores",
      "Enhanced security",
      "Seamless scalability"
    ]
  },
  {
    id: "seo-optimization",
    title: "SEO Optimization",
    subtitle: "Dominate Search Rankings",
    description: "Our comprehensive SEO strategy goes beyond basic meta tags. We implement technical SEO, structured data, and content optimization to ensure your site starts ranking from day one and continues to grow its organic reach.",
    icon: Search,
    badge: "Growth Engine",
    color: "text-green-500",
    bg: "bg-green-500/10",
    features: [
      "Schema Markup & JSON-LD Structured Data",
      "Dynamic Sitemap & Robots.txt Management",
      "Core Web Vitals Optimization",
      "Semantic HTML Structure & Accessibility",
      "Open Graph & Twitter Card Integration"
    ],
    benefits: [
      "Higher organic traffic",
      "Better click-through rates",
      "Increased domain authority",
      "Local SEO dominance"
    ]
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbots",
    subtitle: "24/7 Intelligent Customer Support",
    description: "Transform your customer service with custom-trained AI chatbots. Using advanced LLMs, we create assistants that understand your business context, answer queries instantly, and even qualify leads while you sleep.",
    icon: Bot,
    badge: "Innovation",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    features: [
      "Custom Knowledge Base Training",
      "Natural Language Processing (NLP)",
      "Seamless Human Handoff Protocols",
      "Multi-platform Integration (Web, WhatsApp, Slack)",
      "Conversation History & Analytics"
    ],
    benefits: [
      "Instant response times",
      "Reduced support costs",
      "Higher lead conversion",
      "Brand consistency"
    ]
  },
  {
    id: "analytics-crm",
    title: "Analytics & CRM",
    subtitle: "Data-Driven Decision Making",
    description: "Stop guessing and start knowing. We integrate powerful analytics and CRM tools directly into your application, giving you a 360-degree view of your users and keeping your sales pipeline flowing efficiently.",
    icon: BarChart3,
    badge: "Business Intelligence",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    features: [
      "Custom Event Tracking & User Journeys",
      "Real-time Dashboard Integration",
      "Lead Scoring & Segmentation",
      "Automated Deal Flow Pipelines",
      "Conversion Rate Optimization (CRO) Setup"
    ],
    benefits: [
      "Deep user insights",
      "Improved retention",
      "Streamlined sales process",
      "Measurable ROI"
    ]
  },
  {
    id: "automation",
    title: "Automation",
    subtitle: "Streamlined Workflows",
    description: "Eliminate repetitive tasks and human error. We connect your web app with your favorite tools via webhooks and APIs to automate email sequences, client onboarding, invoicing, and more.",
    icon: Zap,
    badge: "Efficiency",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    features: [
      "Zapier / n8n / Make Integration",
      "Automated Email Marketing Flows",
      "Dynamic Form Handling & Routing",
      "Scheduled Background Jobs",
      "Third-party API Orchestration"
    ],
    benefits: [
      "Hours saved daily",
      "Reduced operational costs",
      "Faster turnaround times",
      "Consistency in processes"
    ]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    subtitle: "Captivating User Experiences",
    description: "We don't just write code; we craft experiences. Our design philosophy centers on user-centric principles, modern aesthetics, and intuitive navigation to ensure your visitors stay longer and convert more.",
    icon: Palette,
    badge: "Design",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    features: [
      "Mobile-First Responsive Design",
      "Dark Mode & Theming Support",
      "Micro-interactions & Animations",
      "WCAG 2.1 Accessibility Compliance",
      "Design System Creation"
    ],
    benefits: [
      "Lower bounce rates",
      "Higher engagement",
      "Premium brand perception",
      "Universal accessibility"
    ]
  }
];

export default function SolutionsContent() {
  return (
    <div className="w-full py-12 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Header content */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-primary/20 text-primary">
            Our Expertise
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
            Comprehensive Digital Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine technical excellence with business strategy to deliver digital products that drive real growth.
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-24">
          {detailedSolutions.map((solution, index) => (
            <div 
              id={solution.id} 
              key={solution.id}
              className={`flex flex-col gap-12 scroll-mt-32 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Visual Side */}
              <div className="w-full md:w-1/2">
                <div className={`rounded-2xl p-1 ${solution.bg}`}>
                  <Card className="border-none shadow-xl bg-background/90 backdrop-blur">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg ${solution.bg} flex items-center justify-center mb-4`}>
                        <solution.icon className={`h-6 w-6 ${solution.color}`} />
                      </div>
                      <Badge variant="secondary" className="w-fit mb-2">{solution.badge}</Badge>
                      <CardTitle className="text-2xl">{solution.title}</CardTitle>
                      <CardDescription className="text-base">{solution.subtitle}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {solution.description}
                      </p>
                      <div className="grid grid-cols-1 gap-3">
                        {solution.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm font-medium">
                            <CheckCircle2 className={`h-4 w-4 ${solution.color}`} />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <span className={`${solution.color}`}>///</span> Technical Features
                </h3>
                <ul className="space-y-4">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors border border-transparent hover:border-border/50">
                      <div className={`mt-1 p-1 rounded-full ${solution.bg}`}>
                        <div className={`h-1.5 w-1.5 rounded-full ${solution.color}`} />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                   <Button asChild size="lg" className="group">
                    <Link href="/#booking">
                      Get Started with {solution.title}
                      <Rocket className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </Link>
                   </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-32 text-center bg-muted/30 rounded-3xl p-12 border border-border/50">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let&apos;s turn your vision into a high-performance reality. Schedule a free consultation call with us today.
          </p>
          <div className="flex justify-center gap-4">
             <Button asChild size="lg" variant="default">
              <Link href="/#booking">
                Book a Free Call
              </Link>
             </Button>
             <Button asChild size="lg" variant="outline">
              <Link href="/contact">
                Contact Sales
              </Link>
             </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
