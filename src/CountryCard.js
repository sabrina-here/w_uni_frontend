import React, { useState } from "react";

function CountryCard({ country, sendData }) {
  const [universities, setUniversities] = useState([]);
  const getUniversities = () => {
    fetch(
      `http://universities.hipolabs.com/search?country=${country.name.common}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUniversities(data);
        console.log(data);
      });
  };
  return (
    <div>
      <div>{country.name.common}</div>
      <button onClick={getUniversities}>
        get all universities of {country.name.common}
      </button>
      <button onClick={() => sendData(universities)}>
        Send data to database
      </button>
    </div>
  );
}

export default CountryCard;
