import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";

const BookTable = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      {!submitted ? (
        <Card style={{ width: "28rem" }} className="p-4 shadow">
          <h3 className="text-center mb-4">Book a Table</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTime">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGuests">
              <Form.Label>Guests</Form.Label>
              <Form.Control
                type="number"
                min="1"
                placeholder="Number of guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Reserve Table
            </Button>
          </Form>
        </Card>
      ) : (
        <Card style={{ width: "28rem" }} className="p-5 text-center shadow">
          <h3 className="mb-3">Thank You!</h3>
          <p>Your reservation has been received. We look forward to serving you.</p>
          <Button variant="success" onClick={() => setSubmitted(false)}>
            Book Another Table
          </Button>
        </Card>
      )}
    </div>
  );
};

export default BookTable;
