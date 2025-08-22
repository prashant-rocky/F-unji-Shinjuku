import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../contactForm";

const ContactDetail = () => {
    return(
        <section className="ContactDetail py-5">
            <div className="container py-3">
                <div className="row">
                    <div className="col-md-6 pt-5">
                        <h3 className="py-4">Reach Us Anytime</h3>
                        <p>Whether you’re planning your visit, have questions about our menu, or simply want to know more about FUUNJI, we’re here to help. Reach out to us through the details below, and our team will be glad to assist you</p>
                        <div className="row py-3">
                            <div className="col-md-6">
                                <h5>Address : 2-14-3 Yoyogi, Shibuya-ku, Tokyo 151-0053, Japan</h5>
                                <h5 className="py-3">Phone: +81-3-6413-8480</h5>
                                <h5>email : info@fu-unji.com</h5>
                                <button className="myBtn my-4"><Link to="/about" className="text-decoration-none text-white">About Us</Link></button>
                            </div>
                            <div className="col-md-6">
                                <p>Lunch: 11:00 am – 3:00 pm (last orders around closing)</p>
                                <p>Dinner: 5:00 pm – 9:00 pm (last orders around closing)</p>
                                <p>
                                Closed: Sundays & national holidays
                                </p>
                                <p>Note: The shop closes early if the soup runs out.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactDetail;