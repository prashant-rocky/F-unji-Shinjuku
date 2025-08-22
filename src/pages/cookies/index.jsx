import React from "react";
import { Container, Card } from "react-bootstrap";

const CookiesPolicy = () => {
  return (
    <Container className="my-5">
      <Card className="p-4 shadow-lg rounded-3">
        <h2 className="mb-4 text-center">Cookies Policy</h2>
        <p>
          This Cookies Policy explains how <strong>FUUNJI</strong> uses cookies
          and similar technologies when you visit our website. By continuing to
          browse or use our site, you agree to the use of cookies as described
          in this policy.
        </p>

        <h5>1. What Are Cookies?</h5>
        <p>
          Cookies are small text files placed on your device when you visit a
          website. They help us improve your browsing experience by remembering
          your preferences and providing personalized features.
        </p>

        <h5>2. How We Use Cookies</h5>
        <p>We use cookies for the following purposes:</p>
        <ul>
          <li>To improve the functionality and performance of our website.</li>
          <li>To analyze visitor traffic and usage patterns.</li>
          <li>To remember your preferences and settings.</li>
          <li>To deliver relevant advertising and promotional content.</li>
        </ul>

        <h5>3. Types of Cookies We Use</h5>
        <ul>
          <li><strong>Essential Cookies:</strong> Necessary for core website functionality.</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site.</li>
          <li><strong>Functional Cookies:</strong> Store user preferences for a personalized experience.</li>
          <li><strong>Advertising Cookies:</strong> Used to deliver relevant ads and measure effectiveness.</li>
        </ul>

        <h5>4. Managing Cookies</h5>
        <p>
          You can manage or disable cookies through your browser settings. Please
          note that disabling cookies may affect the functionality of certain
          features on our website.
        </p>

        <h5>5. Third-Party Cookies</h5>
        <p>
          We may use third-party services, such as analytics providers or ad
          networks, which may also set cookies on your device. These cookies are
          subject to the respective privacy policies of these third parties.
        </p>

        <h5>6. Updates to This Policy</h5>
        <p>
          FUUNJI reserves the right to update this Cookies Policy at any time.
          Changes will be effective immediately upon posting on this page.
        </p>

        <h5>7. Contact Us</h5>
        <p>
          If you have any questions about our Cookies Policy, please contact us
          at <strong>info@fu-unji.com</strong>.
        </p>
      </Card>
    </Container>
  );
};

export default CookiesPolicy;
