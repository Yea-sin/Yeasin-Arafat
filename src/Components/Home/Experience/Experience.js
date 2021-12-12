import React from "react";
import "./Experience.css";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillHtml5 } from "react-icons/ai";
import { DiJavascript1, DiMongodb, DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";

const Experience = () => {
  return (
    <Container className="space-container">
      <Row lg={2} md={2} sm={1} xs={1}>
        <Col>
          <div className="title-text">
            <h2>Experience</h2>
            <small>The Skills I Have</small>
          </div>
        </Col>
        <Col>
          <div className="text-start  mt-5">
            <div className="row gy-3 francois">
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="p-5 skills d-flex justify-content-center aling-items-center">
                  <div className="skills-child">
                    <h4 className="text-center">
                      <AiFillHtml5 />
                    </h4>
                    <h4>Html5/Css3</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="p-5 bg-secondary d-flex justify-content-center aling-items-center">
                  <div>
                    <h4 className="text-center">
                      <DiReact />
                    </h4>
                    <h4>React</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="p-5 d-flex justify-content-center aling-items-center">
                  <div>
                    <h4 className="text-center">
                      <DiJavascript1 />
                    </h4>
                    <h4>Javascript</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="p-5 bg-secondary d-flex justify-content-center aling-items-center">
                  <div>
                    <h4 className="text-center">
                      <FaNodeJs />
                    </h4>
                    <h4>Node.js</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="p-5 d-flex justify-content-center aling-items-center">
                  <div>
                    <h4 className="text-center">
                      <FaNodeJs />
                    </h4>
                    <h4>Express.js</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="p-5 bg-secondary d-flex justify-content-center aling-items-center">
                  <div>
                    <h4 className="text-center">
                      <DiMongodb />
                    </h4>
                    <h4>MongoDB</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
