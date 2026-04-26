import { Code2, Search, Bot, BarChart3, Zap, Palette, LucideIcon } from "lucide-react";

export interface SolutionItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  badge: string;
  color: string;
  features: string[];
  detailedContent: string;
  benefits: string[];
}

export const solutions: SolutionItem[] = [
  {
    id: "nextjs-development",
    icon: Code2,
    title: "Next.js Development",
    description: "Lightning-fast, SEO-optimized websites built with the latest Next.js features including App Router, Server Components, and edge runtime.",
    badge: "Core",
    color: "text-blue-500",
    features: ["App Router", "Server Components", "Edge Runtime"],
    detailedContent: "Our Next.js development services provide you with a cutting-edge web presence. By leveraging the latest features like the App Router and Server Components, we ensure your site loads instantly and scales effortlessly. We build with the future in mind, delivering a seamless experience for your users and robust architecture for your business. We also seamlessly integrate [SEO optimization](/solutions/seo-optimization) to ensure your blazing-fast new site ranks perfectly on Google.",
    benefits: ["Sub-second page loads", "Perfect Core Web Vitals", "Seamless integrations", "Future-proof architecture"]
  },
  {
    id: "seo-optimization",
    icon: Search,
    title: "SEO Optimization",
    description: "Comprehensive SEO strategies including technical SEO, content optimization, and structured data to boost your search rankings.",
    badge: "Growth",
    color: "text-green-500",
    features: ["Technical SEO", "Meta Optimization", "Rich Snippets"],
    detailedContent: "Rank higher and drive more organic traffic with our comprehensive SEO optimization. We go beyond basic keywords, diving deep into technical SEO, site architecture, and rich snippets to ensure search engines love your site just as much as your users do. This pairs perfectly with our [UI/UX Design](/solutions/ui-ux-design) services to turn that new traffic into paying customers.",
    benefits: ["Higher search rankings", "Increased organic traffic", "Better brand visibility", "Optimized site structure"]
  },
  {
    id: "ai-chatbots",
    icon: Bot,
    title: "AI Chatbots",
    description: "Intelligent conversational AI powered by the latest LLMs to engage visitors, answer questions, and convert leads 24/7.",
    badge: "AI",
    color: "text-purple-500",
    features: ["Custom Training", "Lead Capture", "24/7 Support"],
    detailedContent: "Transform your customer experience with our AI Chatbot solutions. We build intelligent agents that understand context, answer complex queries, and guide visitors through your sales funnel—working tirelessly around the clock so you never miss an opportunity. When combined with our [Automation](/solutions/automation) workflows, these bots can book meetings and sync directly to your CRM.",
    benefits: ["24/7 automated support", "Instant response times", "Higher conversion rates", "Reduced support workload"]
  },
  {
    id: "analytics-crm",
    icon: BarChart3,
    title: "Analytics & CRM",
    description: "Deep insights into user behavior with integrated CRM tools to track, nurture, and convert your leads effectively.",
    badge: "Data",
    color: "text-orange-500",
    features: ["User Tracking", "Lead Scoring", "Conversion Funnels"],
    detailedContent: "Make data-driven decisions with our integrated analytics and CRM setups. We track the entire user journey, helping you understand where visitors drop off and which marketing channels deliver the highest ROI. These insights power our [AI Chatbots](/solutions/ai-chatbots) to deliver hyper-personalized experiences connected directly to your sales pipeline.",
    benefits: ["Clear ROI tracking", "Actionable user insights", "Streamlined lead management", "Data-driven growth"]
  },
  {
    id: "automation",
    icon: Zap,
    title: "Automation",
    description: "Streamline your workflows with smart automation for email sequences, lead routing, and business processes.",
    badge: "Efficiency",
    color: "text-yellow-500",
    features: ["Email Flows", "Webhooks", "Integrations"],
    detailedContent: "Eliminate repetitive tasks and human error with custom business automation. From immediate lead follow-ups to complex multi-step workflows connecting different software platforms, we help your business operate faster and more efficiently. We can even pass data seamlessly into your [Analytics & CRM](/solutions/analytics-crm) systems so everything stays perfectly synced.",
    benefits: ["Save countless hours", "Eliminate manual errors", "Faster response times", "Scalable operations"]
  },
  {
    id: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed to delight users and maximize conversions with modern design principles.",
    badge: "Design",
    color: "text-pink-500",
    features: ["Responsive", "Accessible", "Dark Mode"],
    detailedContent: "First impressions matter. Our UI/UX design focuses on creating visually stunning, highly intuitive interfaces that guide users naturally toward your business goals. We combine aesthetics with behavioral psychology to maximize engagement and conversions before handing it off for high-performance [Next.js Development](/solutions/nextjs-development).",
    benefits: ["Higher user engagement", "Lower bounce rates", "Premium brand perception", "Intuitive user journeys"]
  }
];
