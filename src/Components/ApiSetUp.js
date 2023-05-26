import React, { useContext, useState } from "react";
import { CountryInfoContext } from "./CountryContext";
import Country from "../Country";

function ApiSetUp() {
  const [uniData, setUniData] = useState([]);
  const [countryInfo, setCountryInfo] = useState({});
  const [modifiedData, setModifiedData] = useState([]);
  const [countries, setCountries] = useState([]);

  const getCountries = () => {
    fetch("http://localhost:5000/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  };

  //   const fetchUniversities = (name) => {
  //     fetch(`http://universities.hipolabs.com/search?country=${name}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setUniData(data);
  //       });
  //   };

  //   const modifyData = () => {
  //     if (uniData.length === 0) {
  //       console.log("uniData is empty");
  //       return;
  //     }

  //     const modifiedArray = uniData.map((uData) => ({
  //       ...uData,
  //       ...countryInfo,
  //     }));
  //     console.log(modifiedArray);
  //     setModifiedData(modifiedArray);
  //   };

  const getCountryInfo = (name) => {
    fetch(`http://localhost:5000/countries/${name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountryInfo(data);
      });
  };
  const updateUniDb = (country) => {
    fetch(`http://localhost:5000/updateUni/${country.name.common}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(country),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="container">
      <button onClick={getCountries}>Click to start</button>

      {countries.map((c, index) => (
        <div key={index}>
          <button className="btn border" onClick={() => updateUniDb(c)}>
            {c.name.common}
          </button>
        </div>
      ))}

      {/* {uniApiCountries.map((c, index) => (
        <div key={index}>
          <button onClick={() => fetchUniversities(c)} className="btn">
            {c}
          </button>
          <button onClick={() => getCountryInfo(c)} className="btn">
            get country info
          </button>
          <button onClick={modifyData} className="btn">
            modifyDAta
          </button>
          <button onClick={addToDb} className="btn">
            Add to database
          </button>
        </div>
      ))} */}
    </div>
  );
}

export default ApiSetUp;
