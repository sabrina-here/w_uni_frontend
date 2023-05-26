import React, { useContext, useEffect, useState } from "react";
import CardCountry from "./CardCountry";
import "../Styles/Home.css";
import { CountryInfoContext } from "./CountryContext";

function Home() {
  const [countries, setCountries] = useState([]);
  const { setAllCountries } = useContext(CountryInfoContext);

  useEffect(() => {
    fetch("http://localhost:5000/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setAllCountries(data);
      });
  }, []);

  return (
    <div className="card-grid m-5">
      {countries.map((country) => (
        <CardCountry key={country._id} country={country}></CardCountry>
      ))}
    </div>
  );
}

export default Home;
