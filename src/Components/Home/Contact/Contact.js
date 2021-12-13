import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Alert, Button, Container, Form } from "react-bootstrap";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "portfolio2002",
        "template_rj5ttg3",
        form.current,
        "user_XwXESH8TJcIHCnRXUgX0K"
      )
      .then(
        (result) => {
          if (result) {
            setSuccess(true);
          }
        },
        (error) => {
          if (error) {
            setError(true);
          }
        }
      );
    e.target.reset();
  };

  return (
    <div className="space-container" id="contact">
      <div className="readex-font mb-5">
        <h2>Contact_</h2>
        <small>Let's Talk</small>
      </div>
      <Container className="border border-4 rounded p-5 bg-secondary text-start w-50">
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control name="name" type="name" placeholder="Your Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Your Email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Meassage</Form.Label>
            <Form.Control
              name="message"
              as="textarea"
              type="text"
              placeholder="Type your message here"
              rows={3}
            />
          </Form.Group>
          {success && <Alert variant="success">Email send successfully</Alert>}
          {error && <Alert variant="danger">Sending Error!</Alert>}
          <Button variant="dark" type="submit">
            Submit
          </Button>{" "}
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
