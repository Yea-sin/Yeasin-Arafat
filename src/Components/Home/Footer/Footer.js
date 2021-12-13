import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="border">
      <Container className="py-5">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-4">
            <h4 className="logo-text">
              Yeasin <span className="text-secondary">Arafat</span>
            </h4>
          </div>
          <div className="col-md-4">
            <h5 className="text-secondary">Email :</h5>
            <small>yeasinn200@gmail.com</small>
          </div>
          <div className="col-md-4">&copy;2021 Yeasin Arafat</div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
