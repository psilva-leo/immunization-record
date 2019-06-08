import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

const BlankLayout = ({ children }) => (
  <Container fluid>
    <Row>    
      {children}
    </Row>
  </Container>
);

export default BlankLayout;
