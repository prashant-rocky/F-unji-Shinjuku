import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Privacy Policy component tailored for a restaurant website (FUUNJI)
// Replace emails/addresses with your final details as needed.

const PrivacyPolicy = () => {
  const lastUpdated = "August 22, 2025";

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <div className="p-4 p-md-5 bg-white shadow rounded-3">
            <header className="mb-4 text-center">
              <h1 className="h2 mb-2">Privacy Policy</h1>
              <p className="text-muted mb-0">Last updated: {lastUpdated}</p>
            </header>

            <nav className="mb-4">
              <h2 className="h5">Contents</h2>
              <ul className="list-unstyled ms-0">
                <li><a href="#intro" className="link-primary text-decoration-none">1. Introduction</a></li>
                <li><a href="#scope" className="link-primary text-decoration-none">2. Scope</a></li>
                <li><a href="#data-we-collect" className="link-primary text-decoration-none">3. Information We Collect</a></li>
                <li><a href="#how-we-use" className="link-primary text-decoration-none">4. How We Use Information</a></li>
                <li><a href="#legal-bases" className="link-primary text-decoration-none">5. Legal Bases</a></li>
                <li><a href="#sharing" className="link-primary text-decoration-none">6. Sharing & Disclosure</a></li>
                <li><a href="#retention" className="link-primary text-decoration-none">7. Data Retention</a></li>
                <li><a href="#cookies" className="link-primary text-decoration-none">8. Cookies & Analytics</a></li>
                <li><a href="#security" className="link-primary text-decoration-none">9. Security</a></li>
                <li><a href="#international" className="link-primary text-decoration-none">10. International Transfers</a></li>
                <li><a href="#your-rights" className="link-primary text-decoration-none">11. Your Rights</a></li>
                <li><a href="#children" className="link-primary text-decoration-none">12. Children’s Privacy</a></li>
                <li><a href="#third-parties" className="link-primary text-decoration-none">13. Third-Party Links & Services</a></li>
                <li><a href="#changes" className="link-primary text-decoration-none">14. Changes to This Policy</a></li>
                <li><a href="#contact" className="link-primary text-decoration-none">15. Contact Us</a></li>
              </ul>
            </nav>

            <section id="intro" className="mb-4">
              <h2 className="h4">1. Introduction</h2>
              <p>
                Welcome to FUUNJI (the “Restaurant”, “we”, “us”, or “our”). We are
                committed to protecting your privacy. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information when
                you visit our website and when you interact with us online or
                offline (for example, by making a reservation or contacting us).
              </p>
            </section>

            <section id="scope" className="mb-4">
              <h2 className="h4">2. Scope</h2>
              <p>
                This Policy applies to our website and any related services that
                link to or reference this Policy (collectively, the “Services”).
                By using our Services, you agree to the practices described here.
              </p>
            </section>

            <section id="data-we-collect" className="mb-4">
              <h2 className="h4">3. Information We Collect</h2>
              <ul>
                <li>
                  <strong>Contact & Reservation Information:</strong> name, email address,
                  phone number, party size, date/time of reservation, and any
                  notes you choose to provide.
                </li>
                <li>
                  <strong>Communications:</strong> content of messages you send via our
                  contact forms or email, and our responses.
                </li>
                <li>
                  <strong>Usage Data:</strong> IP address, browser type, pages viewed,
                  access times, referring URLs, and other diagnostic data.
                </li>
                <li>
                  <strong>Cookies & Similar Technologies:</strong> small files stored on
                  your device to improve site functionality and analyze usage.
                </li>
              </ul>
              <p className="small text-muted">
                We do not intentionally collect sensitive personal information or
                payment card details via our website. If online payments are enabled in the
                future, they will be processed by a PCI-compliant provider and
                subject to the provider’s privacy policy.
              </p>
            </section>

            <section id="how-we-use" className="mb-4">
              <h2 className="h4">4. How We Use Information</h2>
              <ul>
                <li>To manage reservations, respond to inquiries, and provide customer support.</li>
                <li>To operate, maintain, and improve our website and Services.</li>
                <li>To send administrative information such as confirmations or updates.</li>
                <li>To analyze usage and enhance user experience and site performance.</li>
                <li>To comply with legal obligations and enforce our terms and policies.</li>
              </ul>
            </section>

            <section id="legal-bases" className="mb-4">
              <h2 className="h4">5. Legal Bases</h2>
              <p>
                Where required by law (e.g., GDPR in the EU/UK), we process
                personal data on one or more of the following bases:
              </p>
              <ul>
                <li><strong>Consent</strong> (e.g., when you submit a form or opt in to communications).</li>
                <li><strong>Performance of a contract</strong> (e.g., to fulfill a reservation).</li>
                <li><strong>Legitimate interests</strong> (e.g., website security, service improvement).</li>
                <li><strong>Legal obligations</strong> (e.g., regulatory or accounting requirements).</li>
              </ul>
            </section>

            <section id="sharing" className="mb-4">
              <h2 className="h4">6. Sharing & Disclosure</h2>
              <p>
                We do not sell your personal information. We may share
                information with service providers who assist with website
                hosting, analytics, reservations, customer communications, or
                security. These parties are permitted to process data only as
                needed to perform services for us and are bound by confidentiality
                obligations. We may also disclose information if required by law
                or to protect rights, property, or safety.
              </p>
            </section>

            <section id="retention" className="mb-4">
              <h2 className="h4">7. Data Retention</h2>
              <p>
                We retain personal information only for as long as necessary to
                fulfill the purposes outlined in this Policy, comply with legal
                obligations, resolve disputes, and enforce agreements. Retention
                periods vary depending on the nature of the information and our
                legal requirements.
              </p>
            </section>

            <section id="cookies" className="mb-4">
              <h2 className="h4">8. Cookies & Analytics</h2>
              <p>
                We use cookies and similar technologies to keep the site secure,
                remember preferences, and understand how visitors use our
                Services. You can adjust cookie settings in your browser. If we
                use third-party analytics (e.g., Google Analytics), those
                providers may set their own cookies and collect usage data in
                accordance with their privacy policies.
              </p>
            </section>

            <section id="security" className="mb-4">
              <h2 className="h4">9. Security</h2>
              <p>
                We implement reasonable technical and organizational measures to
                protect personal information. However, no method of transmission
                over the internet or electronic storage is 100% secure. We cannot
                guarantee absolute security.
              </p>
            </section>

            <section id="international" className="mb-4">
              <h2 className="h4">10. International Transfers</h2>
              <p>
                Our servers and operations are based in Japan. If you access the
                Services from outside Japan, your information may be transferred
                to, stored, and processed in Japan or other jurisdictions with
                different data protection laws.
              </p>
            </section>

            <section id="your-rights" className="mb-4">
              <h2 className="h4">11. Your Rights</h2>
              <p>
                Depending on your location, you may have rights to access, correct,
                update, or delete your personal information; object to or restrict
                processing; and request data portability. To exercise these rights,
                please contact us using the details below. We will respond in
                accordance with applicable law.
              </p>
            </section>

            <section id="children" className="mb-4">
              <h2 className="h4">12. Children’s Privacy</h2>
              <p>
                Our Services are not directed to children under 13 (or the
                relevant minimum age in your jurisdiction). We do not knowingly
                collect personal information from children. If you believe a child
                has provided us with personal information, please contact us and
                we will take appropriate steps to delete such information.
              </p>
            </section>

            <section id="third-parties" className="mb-4">
              <h2 className="h4">13. Third-Party Links & Services</h2>
              <p>
                Our website may contain links to third-party sites or services
                (for example, map embeds or delivery services). We are not
                responsible for the privacy practices of those third parties and
                encourage you to review their policies.
              </p>
            </section>

            <section id="changes" className="mb-4">
              <h2 className="h4">14. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The “Last
                updated” date at the top of this page indicates when this Policy
                was most recently revised. Changes become effective when posted on
                this page.
              </p>
            </section>

            <section id="contact" className="mb-2">
              <h2 className="h4">15. Contact Us</h2>
              <p className="mb-1">If you have questions about this Privacy Policy or our data practices, please contact us:</p>
              <ul className="mb-2">
                <li>Email: <a href="mailto:contact@fu-unji.com">contact@fu-unji.com</a></li>
                <li>Phone (Shinjuku Main Branch): +81-3-6413-8480</li>
                <li>Address: 2-14-3 Yoyogi, Shibuya-ku, Tokyo 151-0053, Japan</li>
              </ul>
              <p className="small text-muted">
                If you are located in the EU/UK and believe your rights have been
                infringed, you may lodge a complaint with your local data
                protection authority. We encourage you to contact us first so we
                can address your concerns.
              </p>
            </section>

            <hr />
            <p className="small text-center text-muted mb-0">
              © {new Date().getFullYear()} FUUNJI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
