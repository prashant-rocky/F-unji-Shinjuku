import React from "react";
import aboutBanner from "../../assets/images/contactBanner.jpg"
const ContactSlider =() => {
    return(
        <section className="tabSlider text-white" style={{backgroundImage : `url(${aboutBanner})`}} >
            <div className="container text-center">
                <h1>Contact Us</h1>
                <h3 className="py-2">Get in Touch With Us</h3>
                <p>We’d love to hear from you. Reach out with questions, feedback, <br /> or reservations, and our team will assist promptly</p>
            </div>
        </section>
    )
}
export default ContactSlider;