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
      <Container className="py-5">
        <Row lg="2" md="2" sm="1" xs="1">
          <Col className="text-section">
            <h1>
              YEASIN <br /> ARAFAT
            </h1>
            <h5>
              <span
                style={{
                  color: "black",
                }}>
                <Typewriter
                  words={[
                    "-MERN Stack Web Developer",
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
              <hr />
            </h5>
            {/* <br />
            <div className="fw-bolder">
              <p>
                <span style={{ color: "olivedrab" }}>Age :</span>{" "}
                <span className="readex-font">22</span>
              </p>
              <p>
                <span style={{ color: "olivedrab" }}>Phone. :</span>{" "}
                <span className="readex-font">01795617763</span>
              </p>
              <p>
                <span style={{ color: "olivedrab" }}>Address :</span>{" "}
                <span className="readex-font">Khulna, Bangladesh</span>
              </p>
            </div> */}

            <div className="d-flex align-items-center my-4 icons">
              <a
                href="https://www.linkedin.com/in/yeasin-a-r"
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
                href="https://drive.google.com/file/d/1S3ClCKSdaPLL6CGO1oc7kZ01TxHvjQBv/view?usp=sharing"
                rel="noreferrer"
                target="_blank">
                <Button className="py-3 px-5" variant="outline-dark">
                  My Resume
                </Button>{" "}
              </a>
              <a
                href="https://www.upwork.com/freelancers/~011a1828cf36c3f8cb"
                rel="noreferrer"
                target="_blank"
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
                style={{
                  border: "1px solid transparent",
                  borderRadius: "50%",
                }}
                src="https://i.ibb.co/DrVX96T/186518950-2931533400419053-6915430711965229197-n.jpg"
                alt=""
                width="90%"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
