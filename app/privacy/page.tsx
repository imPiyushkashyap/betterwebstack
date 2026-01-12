export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-24">
      <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>
      <div className="prose dark:prose-invert max-w-none space-y-6">
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of such third-party sites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us via our contact page.
          </p>
        </section>
      </div>
    </div>
  );
}
