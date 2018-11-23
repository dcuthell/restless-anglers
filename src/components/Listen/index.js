import React from 'react';
import { Container, Col, Row } from 'reactstrap';

export default function Listen (props) {
  return(
    <Container className="Listen">
      <Row>
        <Col>
          <h1>Listen In</h1>
        </Col>
      </Row>
      <Row style={{height: "60vh"}}>
        <Col>
        <iframe width="100%" height="100%" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/494868909&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </Col>
      </Row>
    </Container>
  );
};
