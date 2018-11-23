import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import CalendarFrame from '../CalendarFrame';


export default function Schedule(props) {
  return(
    <Container className="About">
      <Row>
        <Col>
          <h1>Scheduled Events</h1>
          <CalendarFrame/>
        </Col>
      </Row>
    </Container>
  );
};
