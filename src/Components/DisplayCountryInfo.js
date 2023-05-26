import React, { useContext, useEffect, useState } from "react";
import { CountryInfoContext } from "./CountryContext";

function DisplayCountryInfo({ countryName, countryInfo }) {
  console.log(countryName);
  console.log(countryInfo);

  const { countryInformation } = useContext(CountryInfoContext);

  const { currencies, languages, timezones } = countryInfo;
  const currencyKeys = Object.keys(currencies);
  const currencyKey = currencyKeys[0];
  const languageKeys = Object.keys(languages);

  console.log(countryInfo);
  return (
    <div className="container country-info  mt-5">
      <div className="m-4 ">
        <h4 className="fw-bold">
          Country:{"   "}
          <span className="text-purple ps-2">{countryInfo?.name?.common}</span>
        </h4>
        <img
          src={countryInfo?.flags.png}
          alt={countryInfo?.flags.alt}
          style={{ height: "111px", width: "175px" }}
          className="my-2"
        />
        <p className="mt-2">
          Capital: <span className="fw-bold">{countryInfo?.capital}</span>,{" "}
          <span className="ps-2">
            Continent:{" "}
            <span className="fw-bold">{countryInfo?.continents[0]}</span>
          </span>
        </p>
        <p>
          Population: <span className="fw-bold">{countryInfo?.population}</span>
        </p>
        <p>
          Languages:{" "}
          {languageKeys.map((lKey, index) => (
            <span className="fw-bold" key={index}>
              {languages[lKey]},{" "}
            </span>
          ))}
        </p>
        <p>
          Currencies:{" "}
          <span className="fw-bold">
            {currencies[currencyKey].name} {"("}
            {currencies[currencyKey].symbol}
            {")"}
          </span>
        </p>
        <p>
          Timezones:{" "}
          {timezones.map((tz, index) => (
            <span className="fw-bold" key={index}>
              {tz},{" "}
            </span>
          ))}
        </p>
        <p>
          Map link:{" "}
          <a
            className="fw-bold text-decoration-none"
            href={countryInfo?.maps.googleMaps}
          >
            {countryInfo?.maps.googleMaps}
          </a>
        </p>
      </div>
    </div>
  );
}

export default DisplayCountryInfo;
