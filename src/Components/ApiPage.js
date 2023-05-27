import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CopyText from "./CopyText";

function ApiPage() {
  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col>
            <h4 className="fw-bold">API's used by us </h4>
            <hr />
            <div className="d-flex flex-column align-items-center justify-content-center ">
              <p className="ms-0">Rest Countries API:</p>
              <CopyText text=" https://restcountries.com/"></CopyText>
              <p>All Universities named North </p>
              <CopyText text="http://universities.hipolabs.com/search?name=North"></CopyText>
              <p>All Universities in Canada </p>
              <CopyText text="http://universities.hipolabs.com/search?country=Canada"></CopyText>
            </div>
          </Col>
          <Col>
            <h4 className="fw-bold">API's Provided by us</h4>
            <hr />
            <div className="d-flex flex-column align-items-center justify-content-center ">
              <p>All Countries popular for students:</p>
              <CopyText text="http://localhost:5000/countries"></CopyText>
              <p>Relavent Information about Canada:</p>
              <CopyText text="http://localhost:5000/countries/Canada"></CopyText>
              <p>Number of Universities in Canada:</p>
              <CopyText text="http://localhost:5000/numOfUniversities/Canada"></CopyText>
              <p>All Universities in Canada:</p>
              <CopyText text="http://localhost:5000/universities/countryName=Canada"></CopyText>
              <p>All Universities:</p>
              <CopyText text="http://localhost:5000/allUniversities"></CopyText>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ApiPage;
