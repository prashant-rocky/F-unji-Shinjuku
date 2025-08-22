import React, { useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const Scroll = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    // Load TermsFeed cookie script dynamically
    const script = document.createElement("script");
    script.defer = true;
    script.async = true;
    script.src =
      "https://www.termsfeed.com/public/cookie-consent/4.2.0/cookie-consent.js";
    script.type = "text/javascript";
    script.charset = "UTF-8";
    script.onload = () => {
      if (window.cookieconsent) {
        window.cookieconsent.run({
          notice_banner_type: "simple",
          consent_type: "express",
          palette: "light",
          language: "en",
          page_load_consent_levels: ["strictly-necessary"],
          notice_banner_reject_button_hide: false,
          preferences_center_close_button_hide: false,
          page_refresh_confirmation_buttons: false,
          website_name: "Hakata Kitaro Sushi",
          website_privacy_policy_url: "https://github.com/", // replace with your real policy URL
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <footer className="footer text-white pt-5">
      <div className="container">
        <div className="row">
          {/* Logo + Description */}
          <div className="col-md-4">
            <div className="footerLogo">
              <img src={logo} alt="Hakata Kitaro Sushi Logo" className="pb-3" />
              <p>
                FUUNJI is dedicated to crafting ramen and tsukemen that blend tradition, passion, and unforgettable flavor. From our humble Shinjuku beginnings to our growing family of branches, we continue to serve bowls that warm hearts across Japan
              </p>
              <p>
                Tokyo, Shibuya-ku, Yoyogi 2-14-3, Hokuto Dai-ichi Building 1F
              </p>
              <p>Phone: +81-3-6413-8480</p>
              <p>Email: info@example.com</p>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-md-4 px-md-5">
            <h4 className="py-3">Useful Links</h4>
            <p>
              <Link to={"/"}  className="text-decoration-none text-white">Home</Link>
            </p>
            <p>
              <Link to={"/about"}  className="text-decoration-none text-white">about</Link>
            </p>
            <p>
              <Link to={"/blog"}  className="text-decoration-none text-white">Blog</Link>
            </p>
            <p>
              <Link to={"/menu"}  className="text-decoration-none text-white">Menu</Link>
            </p>
            <p>
              <Link to={"/contact"}  className="text-decoration-none text-white">Contact</Link>
            </p>
          </div>

          {/* Opening Hours */}
          <div className="col-md-4">
            <h4 className="py-3">Opening Hours</h4>
            <p>Lunch: 11:00 am – 3:00 pm (last orders around closing)</p>
            <p>Dinner: 5:00 pm – 9:00 pm (last orders around closing)</p>
            <p>Sunday&Holidays : Closed</p>
            <p>Note: The shop closes early if the soup runs out.</p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="row">
          <div className="col-md-4">
            <div className="text-center py-3">
              <p className="mb-0">
                © 2025 Fūunji Shinjuku Sushi. All rights reserved.
              </p>
            </div>
          </div>
          <div className="col-md-8 py-3 text-center">
            <span>
              <Link
                to="/cookies"
                className="text-decoration-none text-white px-2"
                onClick={Scroll}
              >
                Cookies Policy
              </Link>
              |
              <Link
                to="/privacy"
                className="text-decoration-none text-white px-2"
                onClick={Scroll}
              >
                Privacy Policy
              </Link>
              |
              <Link
                to="/disclaimer"
                className="text-decoration-none text-white px-2"
                onClick={Scroll}
              >
                Disclaimer
              </Link>
              |
              <Link
                to="/terms&condition"
                className="text-decoration-none text-white px-2"
                onClick={Scroll}
              >
                Terms & Conditions
              </Link>|
            </span>
            {/* Update cookies preferences link */}
            <div className="text-center py-2 d-inline">
              <a
                href="#"
                id="open_preferences_center"
                className="text-decoration-none text-white"
              >
                Update cookies preferences
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>


  );
};

export default Footer;