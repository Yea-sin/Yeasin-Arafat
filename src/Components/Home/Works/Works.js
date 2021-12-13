import React from "react";
import "./Work.css";
import { Col, Container, Row } from "react-bootstrap";
import { BsChevronCompactRight } from "react-icons/bs";
import { RiEarthLine } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";

const Works = () => {
  return (
    <Container className="space-container" id="projects">
      <div className="readex-font mb-5">
        <h2>Works_</h2>
        <small>Projects I Made</small>
      </div>
      <Row lg={2} md={2} sm={1} xs={1} className="align-items-center g-5">
        <Col>
          <div className="project-img">
            <img
              src="https://i.ibb.co/Ph0HrFh/3-devices-black.png"
              width={"100%"}
              alt=""
            />
          </div>
        </Col>
        <Col className="text-start">
          <div className="francois mb-3">
            <h2 className="fw-bold">Drive-home - Car Niche Website</h2>
            <small className="text-secondary">Web App</small>
          </div>
          <div className="readex-font">
            <p>
              <BsChevronCompactRight /> A responsive, fully-functional, admin
              secure niche website using MERN stack
            </p>
            <p>
              <BsChevronCompactRight /> Allowing customers to create an account,
              browse products, order products & write reviews.
            </p>
            <p>
              <BsChevronCompactRight /> Admins have the ability to add new
              products, remove existing products, remove user products and
              create new admin accounts.
            </p>
            <p>
              <BsChevronCompactRight /> Reviews are dynamic
            </p>
          </div>
          <div className="row text-light gy-2">
            <small className="col-md-3 ms-2 p-1 rounded bg-secondary">
              #React
            </small>
            <small className="col-md-3 ms-2 p-1 rounded bg-secondary">
              #Javascript
            </small>
            <small className="col-md-3 ms-2 p-1 rounded bg-secondary">
              #MUI
            </small>
            <small className="col-md-3 ms-2 p-1 rounded bg-secondary">
              #Node.js
            </small>
            <small className="col-md-3 ms-2 p-1 rounded bg-secondary">
              #express.js
            </small>
            <small className="col-md-3 ms-2 p-1 rounded bg-secondary">
              #firebase
            </small>
            <small className="col-md-3 ms-2 p-1 rounded bg-secondary">
              #Heroku
            </small>
          </div>
          <div className="mt-3">
            <small className="links">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://drive-home-884b0.web.app/">
                <RiEarthLine className="me-1" />
                Live Site
              </a>
            </small>
            <small className="links mx-3">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/Yea-sin/drive-home-client-side">
                <AiFillGithub className="me-1" />
                Client Side
              </a>
            </small>
            <small className="links">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/Yea-sin/drive-home-server-side">
                <AiFillGithub className="me-1" />
                Server Side
              </a>
            </small>
          </div>
        </Col>
      </Row>
      <Row lg={2} md={2} sm={1} xs={1} className="align-items-center mt-5 g-5">
        <Col>
          <div className="project-img">
            <img
              src="https://i.ibb.co/7Kjpd3m/3-devices-black.png"
              width={"100%"}
              alt=""
            />
          </div>
        </Col>
        <Col className="text-start">
          <div className="francois mb-3">
            <h2 className="fw-bold">Get-Food - Food Delivery Website</h2>
            <small className="text-secondary">Web App</small>
          </div>
          <div className="readex-font">
            <p>
              <BsChevronCompactRight /> Functional Food delivery, fully
              responsive website using MERN stack.
            </p>
            <p>
              <BsChevronCompactRight /> Users can order/buy Food online through
              this website
            </p>
            <p>
              <BsChevronCompactRight /> Users have the ability to add new
              products, remove existing products
            </p>
          </div>
          <div className="row text-light gy-2">
            <small className="col-md-3 ms-2 p-1 rounded bg-secondary">
              #React
            </small>
            <small className="col-md-3 ms-2 p-1 rounded bg-secondary">
              #Javascript
            </small>

            <small className="col-md-3 ms-2 p-1 rounded bg-secondary">
              #Node.js
            </small>
            <small className="col-md-3 ms-2 p-1 rounded bg-secondary">
              #express.js
            </small>
            <small className="col-md-3 ms-2 p-1 rounded bg-secondary">
              #firebase
            </small>
            <small className="col-md-3 ms-2 p-1 rounded bg-secondary">
              #Heroku
            </small>
          </div>
          <div className="mt-3">
            <small className="links">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://drive-home-884b0.web.app/">
                <RiEarthLine className="me-1" />
                Live Site
              </a>
            </small>
            <small className="links mx-3">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/Yea-sin/drive-home-client-side">
                <AiFillGithub className="me-1" />
                Client Side
              </a>
            </small>
            <small className="links">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/Yea-sin/drive-home-server-side">
                <AiFillGithub className="me-1" />
                Server Side
              </a>
            </small>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Works;
