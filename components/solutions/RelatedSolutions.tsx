import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export type RelatedSolution = {
  title: string;
  description: string;
  href: string;
};

export default function RelatedSolutions({ solutions }: { solutions: RelatedSolution[] }) {
  return (
    <section className="w-full py-24 bg-muted/30 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Related Solutions</h2>
          <p className="text-muted-foreground text-lg">Combine services for even stronger results.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((s) => (
            <Link key={s.href} href={s.href} className="group block">
              <Card className="h-full border-border/50 shadow-sm group-hover:shadow-md group-hover:border-primary/30 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">{s.title}</CardTitle>
                  <CardDescription className="text-base">{s.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center p-8 rounded-2xl border border-border/50 bg-background">
          <p className="font-semibold text-lg mb-2">Need More Than One Solution?</p>
          <p className="text-muted-foreground mb-6">Many businesses combine multiple systems for stronger results.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/solutions" className="inline-flex items-center justify-center h-11 px-6 rounded-full border border-border font-medium hover:bg-muted transition-colors text-sm">
              View All Solutions
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors text-sm">
              Book Strategy Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
