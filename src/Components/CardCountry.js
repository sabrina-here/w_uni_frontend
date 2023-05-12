import React, { useEffect, useState } from "react";
import "../Styles/CardCountry.css";
import { Link } from "react-router-dom";

function CardCountry({ country }) {
  const [uniNum, setUniNum] = useState(0);
  // console.log(country);
  const { languages } = country;
  const languageKeys = Object.keys(languages);
  const languageKey = languageKeys[0];
  const getUniNum = () => {
    fetch(`http://localhost:5000/numOfUniversities/${country.name.common}`)
      .then((res) => res.json())
      .then((data) => setUniNum(data))
      .catch((e) => console.error(e));
  };
  return (
    <>
      <div className="modal fade" id="exampleModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Country: {country.name.common}</p>
              <p>Total number of universities: {uniNum}</p>
              <p>Continent: {country.continents}</p>
              <p>Capital: {country.capital}</p>
              <p>Population: {country.population}</p>
              <p>language: {languages[languageKey]}</p>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn border-purple"
                data-bs-dismiss="modal"
              >
                <Link
                  className="text-decoration-none text-black"
                  to={`/unipage/${country.name.common}`}
                >
                  {" "}
                  View Universities
                </Link>
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 my-3">
        <div
          className="card mb-3"
          style={{ maxWidth: "365px", height: "100px" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={country.flags.png}
                className="img-fluid rounded"
                alt={country.flags.alt}
                style={{ height: "100%" }}
              />
            </div>
            <div className="col-md-8">
              <div className="">
                <div className="py-2 ">
                  <h5 className="card-title">{country.name.common}</h5>

                  <Link
                    to={`/uniPage/${country.name.common}`}
                    className="text-decoration-none text-purple view-btn d-block"
                  >
                    View Universities
                  </Link>
                  <Link
                    // to={`/modal/${country.name.common}`}
                    className="text-decoration-none text-purple view-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={getUniNum}
                  >
                    View details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardCountry;
