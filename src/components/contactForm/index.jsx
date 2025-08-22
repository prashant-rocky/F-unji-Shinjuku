import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can add form submission logic (API, email service, etc.)
  };

  return (
    <div className="container">
      {!submitted ? (
        <div className="row justify-content-center">
          <div className="col-md-12">
            <h2 className="text-center mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="myBtn px-4">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <div className="card text-center shadow-lg p-5 mt-4" style={{ maxWidth: "500px" }}>
            <div className="card-body">
              <h3 className="card-title text-success">Thank You!</h3>
              <p className="card-text">
                Your message has been successfully sent. We’ll get back to you soon.
              </p>
              <button className="btn btn-outline-primary" onClick={() => setSubmitted(false)}>
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
