"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, ShieldCheck, Box, MessageSquare, Workflow, TrendingUp, Cpu, Lightbulb, UserCheck, Target, Zap, Clock, Smartphone, Layers } from "lucide-react";
import RelatedSolutions from "@/components/solutions/RelatedSolutions";
import SolutionPricing from "@/components/solutions/SolutionPricing";
import UnderlineButton from "@/components/UnderlineButton";

const relatedSolutions = [
  { title: "AI Agents & Voice Assistants", description: "Automate conversations and handle leads around the clock.", href: "/solutions/ai-agents" },
  { title: "Autonomous Workflows", description: "Act on insights automatically with smart workflows.", href: "/solutions/autonomous-workflows" },
  { title: "Conversation Funnels", description: "Turn visitors into qualified leads with guided chat flows.", href: "/solutions/conversation-funnels" },
];

function ModularSystemBuilder() {
  const steps = [
    { label: "Your Business Inputs", icon: Database },
    { label: "AI Logic", icon: Cpu },
    { label: "Automations", icon: Workflow },
    { label: "Results", icon: Target },
  ];
  return (
    <div className="flex flex-col items-center gap-0">
      {steps.map((step, i) => (
        <div key={i} className="flex flex-col items-center">
          <div
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border bg-background shadow-sm text-sm font-medium w-64 transition-all duration-500"
            style={{
              borderColor: `hsl(${220 + i * 25}, 70%, 55%)`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            <step.icon className="w-5 h-5 text-primary" />
            <span>{step.label}</span>
          </div>
          {i < steps.length - 1 && (
            <div className="flex flex-col items-center py-1">
              <div className="w-0.5 h-3 bg-border" />
              <ArrowRight className="w-4 h-4 text-primary rotate-90" />
              <div className="w-0.5 h-3 bg-border" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// Custom icons just for the Modular System Builder component
function Database(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
}

export default function CustomAISolutionsPage() {
  const [activeGoal, setActiveGoal] = useState("More Leads");

  const goals: Record<string, { desc: string; icon: any }> = {
    "More Leads": { desc: "Capture and qualify more inquiries automatically.", icon: UserCheck },
    "Save Time": { desc: "Reduce repetitive admin work.", icon: Clock },
    "Better Customer Experience": { desc: "Faster responses and smoother journeys.", icon: Smartphone },
    "Higher Efficiency": { desc: "Teams focus on high-value work.", icon: Zap },
    "Smarter Decisions": { desc: "Use AI insights to improve performance.", icon: Target },
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-background relative">
      {/* Back Button */}
      <div className="absolute top-4 left-6 z-10 hidden md:block">
        <UnderlineButton />
      </div>

      {/* Hero */}
      <section className="w-full py-20 lg:py-32 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="secondary" className="mb-6 py-1.5 px-4 rounded-full border border-primary/20 text-primary font-medium">
              Custom AI Solutions
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              AI Built Around How Your Business <span className="text-primary">Actually Works</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              We design custom AI systems, assistants, automations, and growth solutions tailored to your workflow, customers, industry, and business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" className="rounded-full text-lg h-14 px-8" asChild>
                <Link href="/contact">Book Free Call <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-lg h-14 px-8" asChild>
                <Link href="/#pricing">Get a Quote</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-5 text-sm font-medium text-muted-foreground">
              <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> Fully Custom Built</span>
              <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> Practical Use Cases</span>
              <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> Growth Focused</span>
              <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> Future Ready</span>
            </div>
          </div>
          {/* Modular system builder animation */}
          <div className="hidden lg:flex justify-center">
            <ModularSystemBuilder />
          </div>
        </div>
      </section>

      {/* Why Custom Beats Generic Tools */}
      <section className="w-full py-24 bg-muted/30 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Custom Beats Generic Tools</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Most AI tools are built for everyone. Your business is not everyone.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <Card className="border-destructive/30 bg-destructive/5 shadow-sm">
              <CardHeader>
                <CardTitle className="text-destructive text-lg">Generic Tools Create:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Poor fit for real workflows",
                  "Extra manual work",
                  "Weak customer experience",
                  "Limited integrations",
                  "Low adoption by teams"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-destructive font-bold">-</span> {item}
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="border-primary/30 bg-primary/5 shadow-sm">
              <CardHeader>
                <CardTitle className="text-primary text-lg">Custom Solutions Offer:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-foreground font-medium leading-relaxed mt-2">
                  Systems built precisely around how you already operate. No forced workflows. We fit the technology to your business, not the other way around.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="w-full py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What We Build</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "AI Assistants", desc: "Chat, voice, lead qualification, booking, support.", icon: MessageSquare },
              { title: "Internal Automation", desc: "Reduce repetitive tasks and connect tools.", icon: Workflow },
              { title: "Lead Generation Systems", desc: "Funnels, outreach systems, qualification flows.", icon: UserCheck },
              { title: "Reporting & Insights", desc: "Dashboards, alerts, customer intelligence.", icon: TrendingUp },
              { title: "Industry-Specific AI Tools", desc: "Custom systems for clinics, agencies, real estate, ecommerce, and more.", icon: Box },
              { title: "Experimental Growth Systems", desc: "Trend-based solutions built for current market opportunities.", icon: Lightbulb },
            ].map((cat, i) => (
              <Card key={i} className="border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
                <CardHeader>
                  <cat.icon className="w-8 h-8 text-primary mb-3" />
                  <CardTitle className="text-xl">{cat.title}</CardTitle>
                  <CardDescription className="text-base">{cat.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Real Business Goals */}
      <section className="w-full py-24 bg-muted/30 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Built for Real Business Goals</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.keys(goals).map((goal) => (
              <button
                key={goal}
                onClick={() => setActiveGoal(goal)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  activeGoal === goal
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-background border border-border hover:border-primary/30"
                }`}
              >
                {activeGoal === goal && (() => { const Icon = goals[goal].icon; return <Icon className="w-4 h-4" />; })()}
                {goal}
              </button>
            ))}
          </div>
          <Card className="border-border/50 shadow-md max-w-2xl mx-auto">
            <CardContent className="p-10 flex flex-col items-center">
              {(() => {
                const Icon = goals[activeGoal].icon;
                return <Icon className="w-12 h-12 text-primary mb-4 opacity-80" />;
              })()}
              <h3 className="text-2xl font-bold mb-2">{activeGoal}</h3>
              <p className="text-muted-foreground text-lg text-center">{goals[activeGoal].desc}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trend-Based Solutions */}
      <section className="w-full py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Built Around What Is Working Right Now</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We also create solutions based on current market trends, customer behavior shifts, and new platform opportunities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Instagram Lead Systems", desc: "Turn comments and messages into qualified leads." },
              { title: "AI Booking Assistants", desc: "Instant scheduling for service businesses." },
              { title: "Voice Reception AI", desc: "Never miss calls after hours." },
              { title: "Content Repurposing Systems", desc: "Turn one input into multi-platform content." },
              { title: "CRM Follow-up Engines", desc: "Automated reminders and reactivation flows." },
              { title: "Industry Trend Opportunities", desc: "Rapid custom builds for new demand." },
            ].map((trend, i) => (
              <Card key={i} className="bg-muted/20 border-none shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2"><SparklesIcon className="w-4 h-4 text-primary" /> {trend.title}</CardTitle>
                  <CardDescription className="text-sm">{trend.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work (Timeline) */}
      <section className="w-full py-24 bg-muted/30 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How We Work</h2>
          </div>
          <div className="flex flex-col space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
            {[
              { title: "Discovery", desc: "Understand your workflow, pain points, and growth goals." },
              { title: "Solution Design", desc: "Map the best AI system for your business." },
              { title: "Build + Integrate", desc: "Develop and connect everything cleanly." },
              { title: "Launch + Improve", desc: "Deploy, monitor, and optimize continuously." },
            ].map((step, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">
                  {i + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-background p-6 rounded-2xl shadow-sm border border-border/50">
                  <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why BetterWebStack */}
      <section className="w-full py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why BetterWebStack</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Business-First Thinking", desc: "We focus on outcomes, not hype." },
              { title: "Modern Build Stack", desc: "Fast, scalable, reliable systems." },
              { title: "Custom Execution", desc: "No copy-paste templates." },
              { title: "Practical AI Experience", desc: "Solutions designed to be used daily." },
              { title: "Flexible Scope", desc: "Start small or build larger systems over time." },
              { title: "Ongoing Support", desc: "We stay available after launch." },
            ].map((item, i) => (
              <Card key={i} className="border-border/50 shadow-sm">
                <CardHeader>
                  <ShieldCheck className="w-8 h-8 text-primary mb-2" />
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <RelatedSolutions solutions={relatedSolutions} />

      <SolutionPricing
        features={{
          starter: ["One custom use-case build", "Basic setup", "Core integration", "Launch support"],
          growth: ["Tailored AI system", "Multi-step logic", "Better integrations", "Optimization support", "Priority execution"],
          enterprise: ["Full custom architecture", "Team systems", "Advanced integrations", "Long-term roadmap"]
        }}
      />

      {/* Final CTA */}
      <section className="w-full py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto bg-primary/5 border border-primary/20 rounded-3xl p-12 shadow-sm">
          <h2 className="text-4xl font-bold mb-6">Need an AI Solution Built for Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-10">Let&apos;s design something practical, useful, and built to grow with you.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="rounded-full h-14 px-8 text-lg" asChild>
              <Link href="/contact">Contact Us Today</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg bg-background" asChild>
              <Link href="/contact">Book Free Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function SparklesIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}
