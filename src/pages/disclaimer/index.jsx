import React from "react";
import { Container, Card } from "react-bootstrap";

const Disclaimer = () => {
  return (
    <Container className="my-5">
      <Card className="p-4 shadow-lg rounded-3">
        <h2 className="mb-4 text-center">Disclaimer</h2>
        <p>
          The information provided by <strong>FUUNJI</strong> on this website is
          for general informational purposes only. All information on the site
          is provided in good faith; however, we make no representation or
          warranty of any kind, express or implied, regarding the accuracy,
          adequacy, validity, reliability, availability, or completeness of any
          information on the site.
        </p>
        <p>
          Under no circumstance shall we have any liability to you for any loss
          or damage of any kind incurred as a result of the use of the site or
          reliance on any information provided on the site. Your use of the site
          and your reliance on any information on the site is solely at your
          own risk.
        </p>
        <p>
          The website may contain links to other websites or content belonging
          to or originating from third parties, or links to websites and
          features in banners or other advertising. Such external links are not
          investigated, monitored, or checked for accuracy, adequacy, validity,
          reliability, availability, or completeness by us.
        </p>
        <p>
          We do not warrant, endorse, guarantee, or assume responsibility for
          the accuracy or reliability of any information offered by
          third‑party websites linked through the site, or any website or
          feature linked in any banner or other advertising. We will not be a
          party to or in any way responsible for monitoring any transaction
          between you and third‑party providers of products or services.
        </p>
      </Card>
    </Container>
  );
};

export default Disclaimer;
