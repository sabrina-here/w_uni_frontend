import React, { createContext, useEffect, useState } from "react";

export const CountryInfoContext = createContext();

function CountryContext({ children }) {
  const [allCountries, setAllCountries] = useState([]);
  const [countryInfo, setCountryInfo] = useState({});
  const [currentCountry, setCurrentCountry] = useState({});

  console.log(allCountries.length);

  const countryInformation = (countryName) => {
    return (countryInfo = allCountries.find(
      (c) => c.name.common === countryName
    ));
  };

  return (
    <CountryInfoContext.Provider
      value={{
        countryInformation,
        allCountries,
        setAllCountries,
        currentCountry,
        setCurrentCountry,
      }}
    >
      {children}
    </CountryInfoContext.Provider>
  );
}

export default CountryContext;
