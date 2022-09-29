import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import { CardBody, CardTitle,Input } from "reactstrap";

export default function Profile() {
  return (
    <div>
      <Container>
        <Row className= "mb-3">
          <Col>
          <p>name</p>
          <p>name</p>
          <p>name</p>
          </Col>
          
        </Row>
      </Container>
      <div className="container">
        <div className="d-flex text-center justify-content-center align-items-center">
          <Card style={{ width: "25rem" }}>
            <Card.Body>
              <Card.Title> Order number # </Card.Title>
              <Card.Text>Date Status</Card.Text>
              <hr />

              <div className="row">
                <div className="col">
                  <img alt="" />
                </div>
                <div className="col">
                  <p>Name</p>
                  <p>Unit</p> <p>Price</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
