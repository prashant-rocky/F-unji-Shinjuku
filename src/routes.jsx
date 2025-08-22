import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Menu from "./pages/menu";
import Reservation from "./pages/reservation";
import Blog from "./pages/blog";
import CookiesPolicy from "./pages/cookies";
import PrivacyPolicy from "./pages/privacy";
import Disclaimer from "./pages/disclaimer";
import TermsAndConditions from "./pages/terms&conditions";

const Approutes = () => {
    return (
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/cookies" element={<CookiesPolicy />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/terms&condition" element={<TermsAndConditions />} />
        </Routes>
    )
}
export default Approutes;