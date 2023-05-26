import React from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function CardModal({ modalShow, uniNum, country, setModalShow }) {
  const handleClose = () => setModalShow(false);

  const { languages } = country;
  const languageKeys = Object.keys(languages);
  const languageKey = languageKeys[0];

  return (
    <>
      <Modal
        show={modalShow}
        onHide={handleClose}
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> {country.name.common}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Total number of universities: {uniNum}</p>
          <p>Continent: {country.continents}</p>
          <p>Capital: {country.capital}</p>
          <p>Population: {country.population}</p>
          <p>language: {languages[languageKey]}</p>
        </Modal.Body>
        <Modal.Footer>
          <Link
            variant="light"
            onClick={handleClose}
            className="text-color border-color text-decoration-none"
            to={`/unipage/${country.name.common}`}
          >
            View Universities
          </Link>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CardModal;
