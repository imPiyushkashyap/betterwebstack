import { solutions } from "@/lib/data/solutions";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return solutions.map((solution) => ({
    id: solution.id,
  }));
}

function renderContent(text: string) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    parts.push(
      <Link key={lastIndex} href={match[2]} className="text-primary font-semibold hover:underline underline-offset-4 decoration-primary/50 transition-colors">
        {match[1]}
      </Link>
    );
    lastIndex = linkRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
}

export default async function SolutionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const solution = solutions.find((s) => s.id === id);

  if (!solution) {
    notFound();
  }

  const Icon = solution.icon;

  return (
    <div className="container mx-auto max-w-4xl py-16 px-4 md:py-24">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-8 -ml-4">
          <Link href="/#solutions">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Solutions
          </Link>
        </Button>
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-4 rounded-xl bg-muted/50 ${solution.color}`}>
            <Icon className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{solution.title}</h1>
        </div>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-xl text-muted-foreground leading-relaxed font-medium">
          {solution.description}
        </p>
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            {renderContent(solution.detailedContent)}
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6">Key Benefits</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
          {solution.benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-center p-4 rounded-lg bg-card border border-border m-0">
              <div className={`mr-3 h-2 w-2 rounded-full bg-current ${solution.color}`} />
              <span className="font-medium">{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="mt-16 bg-muted/30 p-8 rounded-2xl border border-border/50 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss how our {solution.title} services can help your business grow.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
