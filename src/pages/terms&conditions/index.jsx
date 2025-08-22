import React from "react";
import { Container, Card } from "react-bootstrap";

const TermsAndConditions = () => {
  return (
    <Container className="my-5">
      <Card className="p-4 shadow-lg rounded-3">
        <h2 className="mb-4 text-center">Terms & Conditions</h2>
        <p>
          Welcome to <strong>FUUNJI</strong>. By accessing or using our website,
          you agree to comply with and be bound by the following terms and
          conditions. Please read them carefully.
        </p>

        <h5>1. Use of Website</h5>
        <p>
          You agree to use this website only for lawful purposes and in a manner
          that does not infringe the rights of, restrict, or inhibit anyone
          else’s use and enjoyment of the site.
        </p>

        <h5>2. Intellectual Property</h5>
        <p>
          All content, design, logos, images, and material on this website are
          the property of FUUNJI unless otherwise stated. Unauthorized use,
          reproduction, or distribution of any material is prohibited.
        </p>

        <h5>3. Reservations & Services</h5>
        <p>
          Any reservations or services booked through this website are subject
          to availability. FUUNJI reserves the right to cancel or modify
          bookings where necessary.
        </p>

        <h5>4. Limitation of Liability</h5>
        <p>
          FUUNJI shall not be held liable for any damages or losses resulting
          from the use of our website or services, including but not limited to
          indirect or consequential damages.
        </p>

        <h5>5. External Links</h5>
        <p>
          This website may include links to external websites. FUUNJI is not
          responsible for the content, availability, or practices of any
          third-party sites.
        </p>

        <h5>6. Changes to Terms</h5>
        <p>
          FUUNJI reserves the right to update or change these Terms &
          Conditions at any time without prior notice. Continued use of the site
          constitutes acceptance of the revised terms.
        </p>

        <h5>7. Governing Law</h5>
        <p>
          These Terms & Conditions shall be governed by and construed in
          accordance with the laws of Japan. Any disputes arising under these
          terms shall be subject to the exclusive jurisdiction of the Japanese
          courts.
        </p>

        <h5>8. Contact Us</h5>
        <p>
          If you have any questions about these Terms & Conditions, please
          contact us at <strong>info@fu-unji.com</strong>.
        </p>
      </Card>
    </Container>
  );
};

export default TermsAndConditions;
