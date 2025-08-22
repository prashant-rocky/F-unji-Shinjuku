import React from "react";
import ContactSlider from "../../components/contactSlider";
import ContactDetail from "../../components/contactDetail";

const Contact = () => {
    return (
        <>
            <ContactSlider />
            <ContactDetail />
            <div className="container-fluid py-5">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.6006380806225!2d139.6966393!3d35.6868343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ccfae1f4fe7%3A0x2d6a64fb6fab829c!2sF%C5%ABunji%20Shinjuku!5e0!3m2!1sen!2sin!4v1755838746653!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    );
};

export default Contact;
