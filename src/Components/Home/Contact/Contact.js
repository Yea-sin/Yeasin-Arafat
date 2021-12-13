import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram, BsLinkedin, BsSkype } from "react-icons/bs";

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
    <Container className="contact-container" id="contact">
      <Row lg={2} md={2} sm={1} xs={1} className="">
        <Col>
          <div className="title-text">
            <h2>Contact</h2>
            <small>Let's Talk</small>
          </div>
        </Col>
        <Col>
          <div className="mt-5">
            <h5 className="text-secondary">Email :</h5>
            <small>yeasinn200@gmail.com</small>
          </div>
          <div className="d-flex align-items-center justify-content-center my-4 icons">
            <a
              href="https://www.facebook.com/fahim.hossain160/"
              rel="noreferrer"
              target="_blank">
              <h3 className="me-3">
                <FaFacebookSquare />
              </h3>
            </a>
            <a
              href="https://www.instagram.com/fahimhossainn/"
              rel="noreferrer"
              target="_blank">
              <h3 className="me-3">
                <BsInstagram />
              </h3>
            </a>
            <a
              href="https://join.skype.com/invite/u4q5iqR4RE29"
              rel="noreferrer"
              target="_blank">
              <h3 className="me-3">
                <BsSkype />
              </h3>
            </a>
            <a
              href="https://www.linkedin.com/in/yeasin-a-r"
              rel="noreferrer"
              target="_blank">
              <h3 className="me-3">
                <BsLinkedin />
              </h3>
            </a>
          </div>
          <h5 className="readex-font">------------or------------</h5>
          <Container className="border border-4 mt-5 rounded p-5 bg-secondary text-start">
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name="name" type="name" placeholder="Your Name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Your Email"
                />
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
              {success && (
                <Alert variant="success">Email send successfully</Alert>
              )}
              {error && <Alert variant="danger">Sending Error!</Alert>}
              <Button variant="dark" type="submit">
                Submit
              </Button>{" "}
            </Form>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
