import React from "react";
import CountryCard from "./CountryCard";

function Country({ countries }) {
  const sendData = (universities) => {
    const data = { array: universities };
    fetch("http://localhost:5000/addUniversities", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("universities added successfully");
        }
      });
  };

  return (
    <div>
      <div>
        {countries.map((c) => (
          <CountryCard
            key={c._id}
            country={c}
            sendData={sendData}
          ></CountryCard>
        ))}
      </div>
    </div>
  );
}

export default Country;
