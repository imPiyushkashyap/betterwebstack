export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-24">
      <h1 className="mb-8 text-4xl font-bold">Terms and Conditions</h1>
      <div className="prose dark:prose-invert max-w-none space-y-6">
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to BetterWebStack. By accessing our website and using our services, you agree to be bound by these Terms and Conditions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
          <p>
            BetterWebStack provides web development, design, and related digital services. We reserve the right to modify or discontinue any service at any time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
          <p>
            Unless otherwise stated, we own the intellectual property rights for all material on BetterWebStack. All intellectual property rights are reserved.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Client Obligations</h2>
          <p>
            Clients must provide accurate information and necessary assets for project completion. Delays caused by the client may affect delivery timelines.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
          <p>
            In no event shall BetterWebStack be liable for any special, incidental, or consequential damages arising out of the use or inability to use our services.
          </p>
        </section>
      </div>
    </div>
  );
}
