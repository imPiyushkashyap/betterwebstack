"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, UserCheck, Database, Mail, Bell, CheckSquare, BarChart2, Layers, Puzzle } from "lucide-react";
import RelatedSolutions from "@/components/solutions/RelatedSolutions";
import SolutionPricing from "@/components/solutions/SolutionPricing";
import UnderlineButton from "@/components/UnderlineButton";

const relatedSolutions = [
  { title: "AI Agents & Voice Assistants", description: "Automate conversations and handle leads around the clock.", href: "/solutions/ai-agents" },
  { title: "Conversation Intelligence", description: "Use conversation data to improve your workflows further.", href: "/solutions/conversation-intelligence" },
  { title: "AI-Powered Websites", description: "Start the workflow with a website built to capture leads.", href: "/solutions/ai-driven-websites" },
];

const features = [
  { icon: UserCheck, title: "Lead Routing", desc: "Send inquiries to the right person instantly." },
  { icon: Database, title: "CRM Sync", desc: "Sync records automatically." },
  { icon: BarChart2, title: "Reporting", desc: "Generate recurring reports automatically." },
  { icon: Bell, title: "Notifications", desc: "Alert teams when action is needed." },
  { icon: CheckSquare, title: "Approval Flows", desc: "Move requests through clear steps." },
  { icon: Mail, title: "Follow-ups", desc: "Send emails, reminders, and updates." },
  { icon: Puzzle, title: "Multi-app Workflows", desc: "Connect tools into one system." },
];

const departmentWorkflows: Record<string, { steps: string[]; desc: string }> = {
  Sales: {
    desc: "New lead enters, gets scored, assigned to rep, CRM updated, follow-up scheduled.",
    steps: ["New Lead", "Score Lead", "Assign Rep", "Update CRM", "Schedule Follow-up"],
  },
  HR: {
    desc: "Application received, screened, interview scheduled, team notified, offer drafted.",
    steps: ["Application", "Screen", "Schedule Interview", "Notify Team", "Draft Offer"],
  },
  Operations: {
    desc: "Task requested, approved, assigned, tracked, completed, reported.",
    steps: ["Request", "Approve", "Assign", "Track", "Complete", "Report"],
  },
  Support: {
    desc: "Ticket created, categorized, assigned, resolved, feedback collected.",
    steps: ["New Ticket", "Categorize", "Assign Agent", "Resolve", "Collect Feedback"],
  },
};

const integrations = [
  { name: "CRM", color: "bg-blue-500/10 text-blue-600" },
  { name: "Email", color: "bg-red-500/10 text-red-500" },
  { name: "Sheets", color: "bg-green-500/10 text-green-600" },
  { name: "Slack", color: "bg-purple-500/10 text-purple-600" },
  { name: "WhatsApp", color: "bg-emerald-500/10 text-emerald-600" },
  { name: "Internal Tools", color: "bg-orange-500/10 text-orange-500" },
];

function WorkflowMap({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="px-4 py-2 rounded-xl border border-primary/30 bg-primary/5 text-xs font-medium">{step}</div>
          {i < steps.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0" />}
        </div>
      ))}
    </div>
  );
}

function TimeSavedEstimator() {
  const [tasks, setTasks] = useState(10);
  const [minutesPerTask, setMinutesPerTask] = useState(15);
  const hoursSaved = Math.round((tasks * minutesPerTask * 5) / 60);

  return (
    <Card className="max-w-lg mx-auto border-primary/20 shadow-lg">
      <CardHeader className="text-center">
        <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
        <CardTitle className="text-xl">Time Saved Estimator</CardTitle>
        <CardDescription>See how much time automation could save your team weekly.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-2">
          <label className="text-sm font-medium">Repetitive tasks per day</label>
          <input
            type="range"
            min={1}
            max={50}
            value={tasks}
            onChange={(e) => setTasks(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <p className="text-sm text-muted-foreground text-center">{tasks} tasks / day</p>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Minutes per task</label>
          <input
            type="range"
            min={1}
            max={60}
            value={minutesPerTask}
            onChange={(e) => setMinutesPerTask(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <p className="text-sm text-muted-foreground text-center">{minutesPerTask} min each</p>
        </div>
        <div className="pt-4 border-t text-center">
          <p className="text-sm text-muted-foreground mb-1">Estimated hours saved per week</p>
          <p className="text-5xl font-bold text-primary">{hoursSaved}h</p>
          <p className="text-sm text-muted-foreground mt-1">That&apos;s {Math.round(hoursSaved / 40 * 100)}% of a full work week</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function AutonomousWorkflowsPage() {
  const [activeDept, setActiveDept] = useState("Sales");

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
              Autonomous Workflows
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Systems That Run <span className="text-primary">Without Constant Oversight</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Automate repetitive operations, reduce errors, and scale faster.
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
              <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> Saves Time</span>
              <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> Fewer Errors</span>
              <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> Built to Scale</span>
            </div>
          </div>
          {/* Workflow map animation */}
          <div className="hidden lg:block">
            <WorkflowMap steps={["New Lead", "Check Rules", "Assign", "CRM Update", "Notify Team", "Follow-up"]} />
          </div>
        </div>
      </section>

      {/* Where Time Gets Lost */}
      <section className="w-full py-24 bg-muted/30 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Where Time Gets Lost</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Manual entry", "Missed handoffs", "Slow approvals", "Repeated admin work"].map((pain, i) => (
              <Card key={i} className="border-destructive/20 bg-destructive/5 shadow-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <Clock className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                  <p className="font-medium text-sm">{pain}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Automate */}
      <section className="w-full py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What We Automate</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <Card key={i} className="border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
                <CardHeader>
                  <f.icon className="w-8 h-8 text-primary mb-2" />
                  <CardTitle className="text-base">{f.title}</CardTitle>
                  <CardDescription className="text-sm">{f.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Department Workflow Tabs */}
      <section className="w-full py-24 bg-muted/30 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Department Workflow Examples</h2>
            <p className="text-muted-foreground text-lg">See how automation applies to different teams.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.keys(departmentWorkflows).map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeDept === dept
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-background border border-border hover:border-primary/30"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
          <Card className="border-border/50 shadow-md">
            <CardContent className="p-8">
              <p className="text-muted-foreground text-center mb-6">{departmentWorkflows[activeDept].desc}</p>
              <WorkflowMap steps={departmentWorkflows[activeDept].steps} />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Time Saved Estimator */}
      <section className="w-full py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How Much Time Could You Save?</h2>
          </div>
          <TimeSavedEstimator />
        </div>
      </section>

      {/* Integration Grid */}
      <section className="w-full py-24 bg-muted/30 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Connects With Your Tools</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {integrations.map((int, i) => (
              <div key={i} className={`flex items-center justify-center p-5 rounded-2xl border border-border/50 bg-background shadow-sm hover:shadow-md hover:border-primary/30 transition-all`}>
                <div className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${int.color}`}>{int.name}</div>
              </div>
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
              { title: "Business-First", desc: "Every workflow is designed around your actual operations." },
              { title: "Hands-on Experience", desc: "We have built real automation systems across industries." },
              { title: "Custom Solutions", desc: "No generic templates. Everything fits your process." },
              { title: "Clean Integrations", desc: "We connect your tools without technical headaches." },
              { title: "Fast Setup", desc: "Most workflows are live within 2 to 4 weeks." },
              { title: "Ongoing Support", desc: "We adjust and improve as your business changes." },
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
          starter: ["One workflow automation", "Notifications", "Basic CRM sync", "Process cleanup"],
          growth: ["Multi-step workflows", "Tool integrations", "Reporting automation", "Team handoff systems", "Ongoing improvements"],
          enterprise: ["Department-wide automation", "Approval systems", "Multi-tool architecture", "Scalable operations workflows"]
        }}
      />

      {/* Final CTA */}
      <section className="w-full py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto bg-primary/5 border border-primary/20 rounded-3xl p-12 shadow-sm">
          <h2 className="text-4xl font-bold mb-6">Automate the Work Slowing Growth</h2>
          <p className="text-xl text-muted-foreground mb-10">Let&apos;s build workflows that save time, reduce friction, and help your business scale.</p>
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
