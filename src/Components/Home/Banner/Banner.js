import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="top-bg">
      <Container className="m2-5">
        <Row lg="2" md="2" sm="1" xs="1">
          <Col className="text-section">
            <h1>Hi! I'm Yeasin Arafat</h1>
            <h5>
              <span
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontFamily: "cursive",
                }}>
                <Typewriter
                  words={[
                    "-MERN Stack Web Developer👨‍💻",
                    "-Frontend Web Developer",
                    "-UI/UX Designer",
                  ]}
                  loop="auto"
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h5>

            <div className="d-flex align-items-center my-4 icons">
              <a
                href="https://www.linkedin.com/in/yeasin-arafat-b11b2b227/"
                rel="noreferrer"
                target="_blank">
                <h3 className="me-3">
                  <BsLinkedin />
                </h3>
              </a>
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
            </div>

            <div className="d-flex align-items-center buttons">
              <a
                href="https://drive.google.com/file/d/1pMdLWiNI7fgTcuHa7pA68AmILLQ8YCCp/view?usp=sharing"
                rel="noreferrer"
                target="_blank">
                <Button className="py-3 px-5" variant="outline-dark">
                  My Resume
                </Button>{" "}
              </a>
              <a
                href="#about"
                style={{ textDecoration: "none" }}
                className="ms-4 text-dark">
                <h4>
                  Hire Me
                  <AiOutlineArrowRight />
                </h4>
              </a>
            </div>
          </Col>
          <Col className="img-bg">
            <div className="mt-5">
              <img
                style={{ border: "1px dotted white", borderRadius: "20%" }}
                src="https://i.ibb.co/VBRkXdq/Yeasin-removebg-preview.png"
                alt=""
                width="100%"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
