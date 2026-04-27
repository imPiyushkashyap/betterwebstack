import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, CalendarClock, MessageSquareText, TrendingUp, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import RelatedSolutions from '@/components/solutions/RelatedSolutions';
import SolutionPricing from '@/components/solutions/SolutionPricing';
import UnderlineButton from '@/components/UnderlineButton';

const relatedSolutions = [
  { title: 'Conversation Funnels', description: 'Turn visitors into qualified leads with guided chat flows.', href: '/solutions/conversation-funnels' },
  { title: 'AI Agents & Voice Assistants', description: 'Automate support, bookings, and follow-ups 24/7.', href: '/solutions/ai-agents' },
  { title: 'Autonomous Workflows', description: 'Automate internal operations and reduce manual work.', href: '/solutions/autonomous-workflows' },
];

export default function AIWebsitesPage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-background relative">
      
      {/* Back Button */}
      <div className="absolute top-4 left-6 z-10 hidden md:block">
        <UnderlineButton />
      </div>

      {/* 1. Hero Section */}
      <section className="w-full py-20 lg:py-32 px-4 flex flex-col items-center text-center">
        <Badge variant="secondary" className="mb-6 py-1.5 px-4 rounded-full border border-primary/20 text-primary font-medium tracking-wide">
          <Zap className="w-4 h-4 mr-2 inline" />
          Built for Growth
        </Badge>
        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight max-w-4xl mb-6 text-foreground">
          Turn Your Website Into a <span className="text-primary">24/7 Sales System</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
          Custom websites with smart automation, instant responses, and booking flows that help your business grow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full justify-center">
          <Button size="lg" className="rounded-full text-lg h-14 px-8" asChild>
            <Link href="/contact">Book a Free Call <ArrowRight className="ml-2 w-5 h-5"/></Link>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full text-lg h-14 px-8" asChild>
            <Link href="/#pricing">Get a Quote</Link>
          </Button>
        </div>
        
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-muted-foreground">
          <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> Fast Delivery</span>
          <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> Mobile Ready</span>
          <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> Custom Built</span>
        </div>
      </section>

      {/* 2. Pain Points Section */}
      <section className="w-full py-24 bg-muted/30 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Most Business Websites Underperform</h2>
            <p className="text-muted-foreground text-lg">Your website should be an asset, not just a digital brochure.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Visitors leave without contacting you",
              "Slow replies lose leads",
              "Missed calls after hours",
              "Paid traffic gets wasted",
              "No clear booking path",
              "Outdated design hurts trust"
            ].map((pain, i) => (
              <Card key={i} className="border-border/50 bg-background/50 shadow-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2 shrink-0" />
                  <p className="font-medium">{pain}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Solution Section */}
      <section className="w-full py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Your New Website Can Do</h2>
            <p className="text-muted-foreground text-lg">Smart features built to capture and convert.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border/50 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <Bot className="w-10 h-10 text-primary mb-2" />
                <CardTitle>AI Chat Assistant</CardTitle>
                <CardDescription>Answer common questions instantly and capture lead information 24/7.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border/50 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageSquareText className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Smart Forms</CardTitle>
                <CardDescription>Instant lead capture forms that route directly to your inbox or CRM.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border/50 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CalendarClock className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Booking System</CardTitle>
                <CardDescription>Let clients schedule appointments directly without the back-and-forth.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border/50 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="w-10 h-10 text-primary mb-2" />
                <CardTitle>SEO & Analytics</CardTitle>
                <CardDescription>Built to rank on Google and track what actually brings you customers.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Benefits Section */}
      <section className="w-full py-24 bg-primary text-primary-foreground px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-16">Real Business Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-2">+</div>
              <p className="text-primary-foreground/80 font-medium">Qualified Leads</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-2">Fast</div>
              <p className="text-primary-foreground/80 font-medium">Response Times</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-2">Zero</div>
              <p className="text-primary-foreground/80 font-medium">Missed Inquiries</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-2">High</div>
              <p className="text-primary-foreground/80 font-medium">Brand Trust</p>
            </div>
            <div className="flex flex-col items-center col-span-2 md:col-span-1">
              <div className="text-4xl font-bold mb-2">Better</div>
              <p className="text-primary-foreground/80 font-medium">Ad Conversion</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Case Studies Section */}
      <section className="w-full py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Example Results</h2>
            <p className="text-muted-foreground text-lg">See how these smart systems transform businesses.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-muted/20 border-none shadow-md">
              <CardHeader>
                <Badge className="w-fit mb-4">Local Dental Clinic</Badge>
                <CardTitle className="text-xl">More Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-muted-foreground"><span className="text-destructive font-bold">-</span> Old site had low inquiries</li>
                  <li className="flex items-start gap-2 text-foreground"><span className="text-primary font-bold">+</span> New booking flow & instant answers</li>
                  <li className="flex items-start gap-2 text-foreground font-medium"><span className="text-primary font-bold">+</span> 40% more appointments in month one</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-muted/20 border-none shadow-md">
              <CardHeader>
                <Badge className="w-fit mb-4">Fitness Studio</Badge>
                <CardTitle className="text-xl">Higher Trial Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-muted-foreground"><span className="text-destructive font-bold">-</span> Visitors dropped off early</li>
                  <li className="flex items-start gap-2 text-foreground"><span className="text-primary font-bold">+</span> Added lead form & schedule preview</li>
                  <li className="flex items-start gap-2 text-foreground font-medium"><span className="text-primary font-bold">+</span> Consistent trial class bookings</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-muted/20 border-none shadow-md">
              <CardHeader>
                <Badge className="w-fit mb-4">Real Estate Agent</Badge>
                <CardTitle className="text-xl">Organized Lead Flow</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-muted-foreground"><span className="text-destructive font-bold">-</span> Messy leads from many channels</li>
                  <li className="flex items-start gap-2 text-foreground"><span className="text-primary font-bold">+</span> Smart intake landing pages</li>
                  <li className="flex items-start gap-2 text-foreground font-medium"><span className="text-primary font-bold">+</span> Better lead quality & fast follow-up</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. Process Section */}
      <section className="w-full py-24 bg-muted/30 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Simple Process, Fast Delivery</h2>
          </div>
          <div className="flex flex-col space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
            {[
              { title: "Discovery Call & Goals", desc: "We learn about your business and what you want to achieve." },
              { title: "Strategy & Page Plan", desc: "We map out the content, booking flows, and automation steps." },
              { title: "Design & Development", desc: "We build your custom, mobile-ready website from scratch." },
              { title: "Launch & Optimize", desc: "We test everything, launch, and ensure it runs perfectly." }
            ].map((step, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
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

      {/* 7. Why Us Section */}
      <section className="w-full py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Work With Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Custom Builds", desc: "No cheap templates. Everything is tailored to your brand." },
              { title: "Modern Tech", desc: "Built with Next.js for lightning-fast loading speeds." },
              { title: "Automation Experts", desc: "We know how to connect your site to your CRM or WhatsApp." },
              { title: "Clear Communication", desc: "No confusing jargon. Just straightforward business talk." },
              { title: "Clean Performance", desc: "Optimized for Google, ensuring you rank higher." },
              { title: "Ongoing Support", desc: "We don't just launch and leave. We are here to help." }
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

      {/* Related Solutions */}
      <RelatedSolutions solutions={relatedSolutions} />

      {/* 8. FAQ Section */}
      <section className="w-full py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "How much does a project cost?", a: "Every business has different needs, so we provide custom quotes after a brief discovery call. Our solutions are designed to deliver clear ROI." },
              { q: "How long does it take?", a: "Most projects take between 2 to 4 weeks depending on the complexity of the booking flows and automations." },
              { q: "Can you redesign my current website?", a: "Yes, we can rebuild your existing site on our modern stack while keeping your branding and content." },
              { q: "Can it connect with WhatsApp or CRM tools?", a: "Absolutely. We specialize in integrating websites directly with tools like WhatsApp, HubSpot, and others." },
              { q: "Is the chatbot custom to my business?", a: "Yes. We train the AI specifically on your business information, services, and FAQ so it answers accurately." },
              { q: "Will the website work well on mobile?", a: "100%. We design 'mobile-first' since most of your visitors will be using their phones." }
            ].map((faq, i) => (
              <details key={i} className="group bg-background rounded-xl border border-border/50 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-medium text-lg">
                  {faq.q}
                  <span className="shrink-0 rounded-full bg-muted p-1.5 text-foreground group-open:rotate-45 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <SolutionPricing
        features={{
          starter: ["Responsive website", "Mobile first design", "Contact forms", "Speed optimized"],
          growth: ["Lead capture flows", "Booking integration", "SEO-ready pages", "Basic automations", "Analytics setup"],
          enterprise: ["Custom web apps", "Advanced integrations", "Multi-page architecture", "Scalable backend"]
        }}
      />

      {/* 9. Final CTA */}
      <section className="w-full py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto bg-primary/5 border border-primary/20 rounded-3xl p-12 shadow-sm">
          <h2 className="text-4xl font-bold mb-6">Ready for a Website That Brings Results?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Let's build something that helps your business grow.
          </p>
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
