"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Phone, MessageSquare, Mail, ArrowRight, CheckCircle2, ShieldCheck, User, ArrowDown } from "lucide-react";
import RelatedSolutions from "@/components/solutions/RelatedSolutions";
import SolutionPricing from "@/components/solutions/SolutionPricing";
import UnderlineButton from "@/components/UnderlineButton";

const relatedSolutions = [
  { title: "Conversation Funnels", description: "Turn visitors into qualified leads with guided chat flows.", href: "/solutions/conversation-funnels" },
  { title: "Autonomous Workflows", description: "Automate internal operations and reduce manual work.", href: "/solutions/autonomous-workflows" },
  { title: "Conversation Intelligence", description: "Learn from every call and chat to improve performance.", href: "/solutions/conversation-intelligence" },
];

const channels = [
  { icon: MessageSquare, label: "Website Chat", color: "bg-blue-500/10 text-blue-500" },
  { icon: Phone, label: "Phone Call", color: "bg-green-500/10 text-green-500" },
  { icon: MessageSquare, label: "WhatsApp", color: "bg-emerald-500/10 text-emerald-500" },
  { icon: Mail, label: "Email", color: "bg-orange-500/10 text-orange-500" },
];

const features = [
  { title: "Chat Support", desc: "Instant answers on your website." },
  { title: "Voice Calls", desc: "AI picks up and guides callers." },
  { title: "Lead Qualification", desc: "Asks the right questions automatically." },
  { title: "Appointment Booking", desc: "Schedules directly into your calendar." },
  { title: "Follow-ups", desc: "Sends reminders and updates." },
  { title: "Internal Routing", desc: "Passes requests to the right team." },
];

function HandoffDiagram() {
  const steps = [
    { label: "Customer asks", sub: "via any channel", highlight: false },
    { label: "AI handles instantly", sub: "answers, collects info", highlight: true },
    { label: "Needs human?", sub: "complex or sensitive case", highlight: false },
    { label: "Passes full context to team", sub: "no repeat, no delay", highlight: true },
  ];
  return (
    <div className="max-w-md mx-auto flex flex-col items-center gap-0">
      {steps.map((step, i) => (
        <div key={i} className="flex flex-col items-center w-full">
          <div className={`w-full px-6 py-4 rounded-2xl border text-center transition-all ${step.highlight ? "border-primary/40 bg-primary/5" : "border-border bg-background"} shadow-sm`}>
            <p className="font-semibold text-sm">{step.label}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{step.sub}</p>
          </div>
          {i < steps.length - 1 && (
            <div className="flex flex-col items-center py-1">
              <div className="w-0.5 h-3 bg-border" />
              <ArrowDown className="w-4 h-4 text-primary" />
              <div className="w-0.5 h-3 bg-border" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function AvailabilityBar() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium flex items-center gap-2"><User className="w-4 h-4" /> Human Team</span>
          <span className="text-muted-foreground">8 hrs / day</span>
        </div>
        <div className="h-4 rounded-full bg-muted overflow-hidden">
          <div className="h-full w-[33%] rounded-full bg-muted-foreground/30" />
        </div>
      </div>
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium flex items-center gap-2"><Bot className="w-4 h-4 text-primary" /> AI Assistant</span>
          <span className="text-primary font-semibold">24 hrs / day</span>
        </div>
        <div className="h-4 rounded-full bg-muted overflow-hidden">
          <div className="h-full w-full rounded-full bg-primary" />
        </div>
      </div>
    </div>
  );
}

export default function AIAgentsPage() {
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
              AI Agents & Voice Assistants
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              AI Team Members Working <span className="text-primary">24/7</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Answer questions, take calls, qualify leads, and book appointments automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" className="rounded-full text-lg h-14 px-8" asChild>
                <Link href="/contact">Book Free Call <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-lg h-14 px-8" asChild>
                <Link href="/#pricing">Get Quote</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-5 text-sm font-medium text-muted-foreground">
              <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> 24/7 Availability</span>
              <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> Fast Setup</span>
              <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> Custom Workflows</span>
            </div>
          </div>
          {/* Channel cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {channels.map((ch, i) => (
              <div key={i} className={`flex items-center gap-3 p-5 rounded-2xl border border-border/50 bg-background shadow-sm hover:shadow-md hover:border-primary/30 transition-all`}>
                <div className={`p-2.5 rounded-xl ${ch.color}`}>
                  <ch.icon className="w-5 h-5" />
                </div>
                <span className="font-medium text-sm">{ch.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Happens Without AI */}
      <section className="w-full py-24 bg-muted/30 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Happens Without AI</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Missed calls after hours", "Slow replies lose leads", "Staff answering same questions", "Follow-ups forgotten"].map((pain, i) => (
              <Card key={i} className="border-border/50 bg-background/50 shadow-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2 shrink-0" />
                  <p className="font-medium text-sm">{pain}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What AI Handles */}
      <section className="w-full py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What AI Handles</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Card key={i} className="border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
                <CardHeader>
                  <CardTitle className="text-base">{f.title}</CardTitle>
                  <CardDescription>{f.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Human + AI Handoff */}
      <section className="w-full py-24 bg-muted/30 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Human + AI Handoff</h2>
            <p className="text-muted-foreground text-lg">AI handles the routine. Humans step in when it matters.</p>
          </div>
          <HandoffDiagram />
        </div>
      </section>

      {/* Availability Comparison */}
      <section className="w-full py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Always Available</h2>
            <p className="text-muted-foreground text-lg">Human hours vs AI 24/7 coverage</p>
          </div>
          <AvailabilityBar />
        </div>
      </section>

      {/* Industries */}
      <section className="w-full py-24 bg-muted/30 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Industries We Serve</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "Clinic", desc: "Voice assistant answers calls, shares timings, books appointments." },
              { label: "Real Estate", desc: "Agent handles inquiries, collects budget, schedules callbacks." },
              { label: "Agency", desc: "Website assistant qualifies leads and routes service requests." },
              { label: "Ecommerce", desc: "Support agent answers shipping, returns, and product questions." },
              { label: "Services", desc: "AI assistant handles FAQs, quotes, and booking requests." },
            ].map((u, i) => (
              <Card key={i} className="bg-muted/20 border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2">{u.label}</Badge>
                  <CardDescription className="text-sm leading-relaxed">{u.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="w-full py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Work With Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Custom Solutions", desc: "Not generic bots. Your agent is trained for your business." },
              { title: "Modern Tech", desc: "Built on proven AI infrastructure with reliable performance." },
              { title: "Real Experience", desc: "We have built agents for real business workflows." },
              { title: "Fast Setup", desc: "Most agents are live within 2 to 3 weeks." },
              { title: "Clean UX", desc: "Natural, helpful conversations your customers enjoy." },
              { title: "Ongoing Support", desc: "We retrain and improve the agent over time." },
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
          starter: ["Chat or voice assistant setup", "FAQ responses", "Lead capture", "Basic booking actions"],
          growth: ["Multi-channel assistant", "Human handoff flow", "CRM connection", "Follow-up actions", "Ongoing tuning"],
          enterprise: ["Advanced AI agents", "Multi-team workflows", "Custom training data", "Scalable automation systems"]
        }}
      />

      {/* Final CTA */}
      <section className="w-full py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto bg-primary/5 border border-primary/20 rounded-3xl p-12 shadow-sm">
          <h2 className="text-4xl font-bold mb-6">Build Your AI Assistant</h2>
          <p className="text-xl text-muted-foreground mb-10">Let&apos;s build an AI assistant that saves time and helps your business grow.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="rounded-full h-14 px-8 text-lg" asChild>
              <Link href="/contact">Book Free Call</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg bg-background" asChild>
              <Link href="/#pricing">Get Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
