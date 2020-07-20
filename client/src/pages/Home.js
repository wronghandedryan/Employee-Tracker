import React from "react";
import { Col, Row, Container } from "../components/Grid";
import AddEmployee from "../components/AddEmployee";
import EmployeeList from "../components/EmployeeList";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <AddEmployee />
        </Col>
        <Col size="md-6 sm-12">
          <EmployeeList />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
