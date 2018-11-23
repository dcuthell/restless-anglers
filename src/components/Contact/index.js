import React from "react";
import { Container, Col, Row } from 'reactstrap';


export default function Contact (props) {
  return (
    <Container className="Contact">
      <Row>
        <Col>
          <h3>Call</h3>
          <a href="tel:+16698675309"><h3>(669)-867-5309</h3></a>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="mailto:goodtunes@restlessanglers.com"><h4>goodtunes@restlessanglers.com</h4></a>
        </Col>
      </Row>
    </Container>
  );
};
