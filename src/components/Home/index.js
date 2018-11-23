import React from 'react';
import { Container, Col, Row } from 'reactstrap';

export default function Home (props) {
  return (
    <Container className="Home">
      <Row>
        <Col>
          <h1>We're the Restless Anglers</h1>
          <h4>we play good tunes</h4>
          <h3>for good vibes and good times</h3>
        </Col>
      </Row>
    </Container>
  );
};
