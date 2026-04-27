"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, ShieldCheck, Search, ArrowDown, TrendingUp, TrendingDown } from "lucide-react";
import RelatedSolutions from "@/components/solutions/RelatedSolutions";
import SolutionPricing from "@/components/solutions/SolutionPricing";
import UnderlineButton from "@/components/UnderlineButton";

const relatedSolutions = [
  { title: "AI Agents & Voice Assistants", description: "Automate conversations and capture more leads.", href: "/solutions/ai-agents" },
  { title: "Autonomous Workflows", description: "Act on insights automatically with smart workflows.", href: "/solutions/autonomous-workflows" },
  { title: "AI-Powered Websites", description: "A website that captures leads and books appointments.", href: "/solutions/ai-driven-websites" },
];

function InsightLossTimeline() {
  const steps = [
    { label: "Call happens", opacity: "opacity-100" },
    { label: "Conversation forgotten", opacity: "opacity-70" },
    { label: "No learning", opacity: "opacity-40" },
    { label: "Repeat mistakes", opacity: "opacity-20" },
  ];
  return (
    <div className="max-w-md mx-auto flex flex-col items-center gap-0">
      {steps.map((step, i) => (
        <div key={i} className="flex flex-col items-center w-full">
          <div className={`w-full px-6 py-4 rounded-2xl border border-destructive/30 bg-destructive/5 text-center shadow-sm ${step.opacity}`}>
            <p className="font-semibold text-sm">{step.label}</p>
          </div>
          {i < steps.length - 1 && (
            <div className="flex flex-col items-center py-1">
              <div className="w-0.5 h-3 bg-destructive/20" />
              <ArrowDown className="w-4 h-4 text-destructive/40" />
              <div className="w-0.5 h-3 bg-destructive/20" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function SampleCharts() {
  const objections = [
    { label: "Price too high", pct: 38 },
    { label: "Not ready yet", pct: 25 },
    { label: "Need approval", pct: 20 },
    { label: "Using competitor", pct: 17 },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {/* Pie-like: Top objections */}
      <Card className="border-border/50 shadow-md">
        <CardHeader>
          <CardTitle className="text-base">Top Objections</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {objections.map((o, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">{o.label}</span>
                <span className="font-semibold">{o.pct}%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full rounded-full bg-primary/70" style={{ width: `${o.pct}%` }} />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Sentiment trend */}
      <Card className="border-border/50 shadow-md">
        <CardHeader>
          <CardTitle className="text-base">Sentiment Trend</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-center items-center gap-4 min-h-[180px]">
          <div className="flex items-end gap-2 h-24">
            {[40, 55, 45, 60, 70, 65, 80, 75, 85].map((h, i) => (
              <div key={i} className="w-4 rounded-t bg-primary/60 transition-all" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-primary font-medium">
            <TrendingUp className="w-4 h-4" /> Improving over 9 weeks
          </div>
        </CardContent>
      </Card>

      {/* Close rate by rep */}
      <Card className="border-border/50 shadow-md">
        <CardHeader>
          <CardTitle className="text-base">Close Rate by Rep</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { name: "Rep A", rate: 72, color: "bg-primary" },
            { name: "Rep B", rate: 48, color: "bg-orange-400" },
            { name: "Rep C", rate: 61, color: "bg-primary/60" },
          ].map((rep, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">{rep.name}</span>
                <span className="font-semibold">{rep.rate}%</span>
              </div>
              <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                <div className={`h-full rounded-full ${rep.color}`} style={{ width: `${rep.rate}%` }} />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

function TeamScorecards() {
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
      <Card className="border-primary/30 bg-primary/5 shadow-md">
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2"><TrendingUp className="w-4 h-4 text-primary" /> Rep A</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3">Strong closing technique. Handles objections well.</p>
          <Badge variant="secondary" className="text-primary border-primary/20">Top performer</Badge>
        </CardContent>
      </Card>
      <Card className="border-orange-400/30 bg-orange-400/5 shadow-md">
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2"><TrendingDown className="w-4 h-4 text-orange-500" /> Rep B</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3">Weak objection handling. Misses follow-up signals.</p>
          <Badge variant="secondary" className="text-orange-500 border-orange-400/20">Needs coaching</Badge>
        </CardContent>
      </Card>
    </div>
  );
}

function TranscriptSearch() {
  return (
    <Card className="max-w-2xl mx-auto border-border/50 shadow-lg">
      <CardHeader>
        <CardTitle className="text-base flex items-center gap-2"><Search className="w-4 h-4" /> Searchable Transcripts</CardTitle>
        <CardDescription>Find key moments across all conversations instantly.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-muted text-sm">
          <Search className="w-4 h-4 text-muted-foreground shrink-0" />
          <span className="text-muted-foreground">pricing concern</span>
        </div>
        <div className="space-y-2 pt-2">
          {[
            { time: "2:34", text: '"The price seems higher than what we budgeted for this quarter..."' },
            { time: "5:12", text: '"Can you break down the pricing? We need to compare with another vendor."' },
            { time: "8:45", text: '"Is there a smaller package? Our concern is mainly the initial cost."' },
          ].map((r, i) => (
            <div key={i} className="flex gap-3 p-3 rounded-lg bg-background border border-border/50 hover:border-primary/30 transition-colors">
              <span className="text-xs text-primary font-mono font-semibold shrink-0 mt-0.5">{r.time}</span>
              <p className="text-sm text-muted-foreground italic">{r.text}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function ConversationIntelligencePage() {
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
              Conversation Intelligence
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Turn Calls and Chats Into <span className="text-primary">Revenue Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Analyze conversations to uncover objections, buying signals, and growth opportunities.
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
              <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> Actionable Insights</span>
              <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> Better Conversions</span>
              <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> Team Coaching</span>
            </div>
          </div>
          {/* Dashboard preview cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { label: "Objections", value: "38%", sub: "price related" },
              { label: "Sentiment", value: "+12%", sub: "improving" },
              { label: "Lead Quality", value: "High", sub: "72% qualified" },
              { label: "Team Score", value: "B+", sub: "avg performance" },
            ].map((d, i) => (
              <div key={i} className="p-5 rounded-2xl border border-border/50 bg-background shadow-sm text-center hover:shadow-md hover:border-primary/30 transition-all">
                <p className="text-xs text-muted-foreground mb-1">{d.label}</p>
                <p className="text-2xl font-bold text-primary">{d.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{d.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insight Loss Timeline */}
      <section className="w-full py-24 bg-muted/30 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Most Businesses Miss</h2>
            <p className="text-muted-foreground text-lg">Valuable signals disappear after every call or chat.</p>
          </div>
          <InsightLossTimeline />
        </div>
      </section>

      {/* What We Detect */}
      <section className="w-full py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What We Detect</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Price Objections", desc: "Surface recurring cost concerns." },
              { title: "Buyer Urgency", desc: "Spot ready-to-buy signals faster." },
              { title: "Script Quality", desc: "Identify what talk tracks close deals." },
              { title: "Repeated Complaints", desc: "Track patterns in support issues." },
              { title: "Winning Patterns", desc: "Find what top reps do differently." },
              { title: "Drop Reasons", desc: "Know exactly why leads fall off." },
            ].map((f, i) => (
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

      {/* Sample Charts */}
      <section className="w-full py-24 bg-muted/30 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Sample Insights</h2>
            <p className="text-muted-foreground text-lg">Real data patterns from conversation analysis.</p>
          </div>
          <SampleCharts />
        </div>
      </section>

      {/* Team Coaching */}
      <section className="w-full py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Team Coaching</h2>
            <p className="text-muted-foreground text-lg">Identify strengths and coaching opportunities per rep.</p>
          </div>
          <TeamScorecards />
        </div>
      </section>

      {/* Searchable Transcript Preview */}
      <section className="w-full py-24 bg-muted/30 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Find Key Moments Instantly</h2>
          </div>
          <TranscriptSearch />
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
              { title: "Business-First", desc: "We focus on what data means for your revenue." },
              { title: "Custom Workflows", desc: "Not generic dashboards. Built around your goals." },
              { title: "Modern Stack", desc: "Fast integrations and clean reporting tools." },
              { title: "Easy Reporting", desc: "Clear summaries your team can actually act on." },
              { title: "Fast Setup", desc: "Most setups ready within 2 to 3 weeks." },
              { title: "Ongoing Support", desc: "We review insights with you and keep improving." },
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
          starter: ["Call/chat summaries", "Basic trend insights", "Searchable conversations", "Monthly reports"],
          growth: ["Objection detection", "Lead quality insights", "Team coaching reports", "Performance dashboards", "Better close-rate insights"],
          enterprise: ["Multi-team analytics", "Custom dashboards", "Advanced reporting", "Secure data workflows"]
        }}
      />

      {/* Final CTA */}
      <section className="w-full py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto bg-primary/5 border border-primary/20 rounded-3xl p-12 shadow-sm">
          <h2 className="text-4xl font-bold mb-6">Start Learning From Every Conversation</h2>
          <p className="text-xl text-muted-foreground mb-10">Let&apos;s build a system that turns calls and chats into smarter growth decisions.</p>
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
