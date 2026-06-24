import type { Metadata } from "next";

import LegalDocument from "@/components/layout/LegalDocument";

export const metadata: Metadata = {
  title: "Terms of Service | Pixelops",
  description: "Terms governing the use of Pixelops services.",
};

export default function TermsPage() {
  return (
    <LegalDocument title="Terms of Service" subtitle="Pixelops Terms of Service">
      <p>
        Welcome to Pixelops, a platform provided by Pixelops Design Limited
        (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). By accessing or
        using the Pixelops website and its related services (collectively, the
        &quot;Web App&quot;), you agree to be bound by these Terms of Service
        (&quot;Terms&quot;). Please read these Terms carefully before using the
        Web App. If you do not agree to these Terms, you should not use the Web
        App.
      </p>

      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By using the Web App, you acknowledge that you have read, understood,
          and agree to be bound by these Terms, as well as our Privacy Policy,
          which is incorporated by reference into these Terms. If you do not
          agree to these Terms or the Privacy Policy, you must not use the Web
          App.
        </p>
      </section>

      <section>
        <h2>2. Description of the Web App</h2>
        <p>
          Pixelops is a platform designed to facilitate collaboration among
          peers, enabling them to stay informed about each other&apos;s
          availability for work and to refer job opportunities to one another.
        </p>
      </section>

      <section>
        <h2>3. Use of the Web App</h2>
        <h3>3.1 Eligibility</h3>
        <p>
          You must be at least 18 years old to use the Web App. By using the Web
          App, you represent and warrant that you are at least 18 years old.
        </p>
        <h3>3.2 Account Registration</h3>
        <p>
          To access certain features of the Web App, you may need to create an
          account. You agree to provide accurate, current, and complete
          information during registration and to update such information to
          keep it accurate, current, and complete.
        </p>
        <h3>3.3 User Content</h3>
        <p>
          You are responsible for any content you submit to the Web App,
          including text, images, and other materials (&quot;User
          Content&quot;). You retain ownership of your User Content, but grant
          us a worldwide, non-exclusive, royalty-free, sublicensable, and
          transferable license to use, reproduce, distribute, prepare
          derivative works of, display, and perform your User Content in
          connection with the Web App.
        </p>
        <h3>3.4 Prohibited Activities</h3>
        <p>
          You agree not to use the Web App for any illegal, harmful, or
          unauthorized purposes. You shall not engage in any conduct that could
          damage, disable, overburden, or impair the Web App&apos;s
          functionality or interfere with any other party&apos;s use.
        </p>
      </section>

      <section>
        <h2>4. Intellectual Property</h2>
        <p>
          All intellectual property rights in the Web App and its content,
          including text, graphics, logos, icons, images, audio clips, digital
          downloads, data compilations, and software, are owned by Pixelops
          Design Limited or its licensors. You may not use, reproduce,
          distribute, or create derivative works based on any part of the Web
          App without our prior written consent.
        </p>
      </section>

      <section>
        <h2>5. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to the Web
          App at any time, without notice, for any reason, including if we
          believe you have violated these Terms.
        </p>
      </section>

      <section>
        <h2>6. Limitation of Liability</h2>
        <p>
          To the extent permitted by applicable law, Pixelops Design Limited
          shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages arising out of or relating to your
          use of the Web App.
        </p>
      </section>

      <section>
        <h2>7. Changes to the Terms</h2>
        <p>
          We reserve the right to modify or replace these Terms at any time.
          The most current version will always be available on the Web App.
          Your continued use following changes constitutes your acceptance of
          those changes.
        </p>
      </section>

      <section>
        <h2>8. Governing Law</h2>
        <p>
          These Terms and your use of the Web App shall be governed by and
          construed in accordance with the laws of Hong Kong, without regard to
          its conflict of law principles.
        </p>
        <p>
          For questions or concerns about these Terms, contact us at{" "}
          <a href="mailto:hello@pixelops.design">hello@pixelops.design</a>.
        </p>
        <p>Thank you for using Pixelops!</p>
      </section>
    </LegalDocument>
  );
}
