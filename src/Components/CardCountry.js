import React, { useContext, useEffect, useState } from "react";
import "../Styles/CardCountry.css";
import { Link } from "react-router-dom";
import CardModal from "./CardModal";
import { CountryInfoContext } from "./CountryContext";

function CardCountry({ country }) {
  const [uniNum, setUniNum] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const { setCurrentCountry } = useContext(CountryInfoContext);
  // console.log(country);

  const getUniNum = () => {
    fetch(`http://localhost:5000/numOfUniversities/${country.name.common}`)
      .then((res) => res.json())
      .then((data) => {
        setUniNum(data);
        setModalShow(true);
        settingCurrentCountry(country);
      })
      .catch((e) => console.error(e));
  };
  const settingCurrentCountry = () => {
    setCurrentCountry(country);
  };
  return (
    <>
      <CardModal
        country={country}
        uniNum={uniNum}
        modalShow={modalShow}
        setModalShow={setModalShow}
      ></CardModal>
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
                    onClick={settingCurrentCountry}
                  >
                    View Universities
                  </Link>
                  <Link
                    className="text-decoration-none text-purple view-btn card-text "
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
