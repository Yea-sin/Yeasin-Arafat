import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Intro = () => {
  return (
    <Container className="my-5" id="about">
      <Row lg={2} md={2} sm={1} xs={1} className="">
        <Col>
          <div
            className="title-text"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="900">
            <h2>Intro</h2>
            <small>Let Me Introduce Myself</small>
          </div>
        </Col>
        <Col>
          <div
            className="text-start readex-font mt-5"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000">
            <h3>Hi!</h3>
            <p className="text-secondary" style={{ lineHeight: "30px" }}>
              I am Yeasin Arafat from Khulna, BD. A Junior MERN Stack Web
              developer with solid knowledge in different technologies and
              enough experience in creating & designing super responsive
              websites. Skilled in Front End technologies such as Html5, Css3,
              JavaScript, React, Bootstrap, Material UI, and Back End
              technologies such as Node.JS, Express JS, Heroku, and MongoDB.
              Learning a variety of scripting languages and multimedia tools is
              one of my strengths. I am also a hard worker and team player. I am
              looking for a challenging opportunity that will enable me to use
              my skills and abilities to achieve a challenging goal.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Intro;
