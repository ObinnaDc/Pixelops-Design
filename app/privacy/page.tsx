import type { Metadata } from "next";

import LegalDocument from "@/components/layout/LegalDocument";

export const metadata: Metadata = {
  title: "Privacy Policy | Pixelops",
  description: "How Pixelops collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalDocument title="Privacy Policy" subtitle="Pixelops Privacy Policy">
      <p>
        Welcome to Pixelops&apos;s Privacy Policy. Pixelops Design Limited
        (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) provides this
        Privacy Policy to explain how we collect, use, and disclose information
        when you use the Pixelops website and its related services
        (collectively, the &quot;Web App&quot;). By using the Web App, you
        consent to the practices described in this Privacy Policy.
      </p>

      <section>
        <h2>1. Information We Collect</h2>
        <p>
          We may collect various types of information when you use the Web App,
          including but not limited to:
        </p>
        <h3>1.1 Personal Information</h3>
        <p>
          Your name, email address, and other identifying information you
          provide during registration or through interactions with the Web App.
        </p>
        <h3>1.2 Usage Data</h3>
        <p>
          Information about how you use the Web App, including interactions,
          preferences, and browsing activities.
        </p>
        <h3>1.3 Log Data</h3>
        <p>
          Information automatically collected when you access the Web App,
          including your IP address, browser type, operating system, and
          timestamps.
        </p>
        <h3>1.4 Cookies</h3>
        <p>
          We may use cookies and similar technologies to collect information
          about your interactions and improve your experience.
        </p>
        <h3>1.5 Third-Party Integrations</h3>
        <p>
          We may receive information from third-party platforms if you choose
          to use third-party integrations within the Web App.
        </p>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <h3>2.1 Providing Services</h3>
        <p>To provide, operate, and maintain the Web App and its features.</p>
        <h3>2.2 Personalization</h3>
        <p>To customize and enhance your experience on the Web App.</p>
        <h3>2.3 Analytics</h3>
        <p>
          To analyze usage patterns, troubleshoot issues, and improve the Web
          App&apos;s performance.
        </p>
        <h3>2.4 Communication</h3>
        <p>
          To communicate with you, respond to inquiries, and provide important
          updates.
        </p>
      </section>

      <section>
        <h2>3. Disclosure of Your Information</h2>
        <h3>3.1 Service Providers</h3>
        <p>
          We may share information with third-party service providers who
          assist us in operating the Web App and delivering services.
        </p>
        <h3>3.2 Legal Obligations</h3>
        <p>
          We may disclose information to comply with legal obligations or
          respond to lawful requests.
        </p>
        <h3>3.3 Business Transfers</h3>
        <p>
          If we are involved in a merger, acquisition, or sale of assets, your
          information may be transferred as part of that transaction.
        </p>
      </section>

      <section>
        <h2>4. Your Choices</h2>
        <h3>4.1 Access and Correction</h3>
        <p>
          You can access and update your personal information through your
          account settings.
        </p>
        <h3>4.2 Opt-Out</h3>
        <p>
          You can opt out of promotional emails by following the instructions
          in the email.
        </p>
      </section>

      <section>
        <h2>5. Security</h2>
        <p>
          We take reasonable measures to protect your information from
          unauthorized access or disclosure.
        </p>
      </section>

      <section>
        <h2>6. Changes to this Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The most current
          version will be available on the Web App.
        </p>
      </section>

      <section>
        <h2>7. Contact Us</h2>
        <p>
          If you have questions or concerns about this Privacy Policy, contact
          us at{" "}
          <a href="mailto:hello@pixelops.design">hello@pixelops.design</a>.
        </p>
        <p>Thank you for using Pixelops!</p>
      </section>
    </LegalDocument>
  );
}
