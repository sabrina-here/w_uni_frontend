import React from "react";

function UniCard({ uni }) {
  return (
    <div className="card my-2" style={{ width: "18rem", height: "260px" }}>
      <div className="card-body">
        <h5 className="card-title fw-bold">{uni.name}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          {uni.country}
        </h6>
        <div className="mt-4">
          <p className="card-text">State-Province : {uni["state-province"]}</p>
          <p className="card-text">
            Website :{" "}
            <a href={uni.web_pages[0]} className="card-link">
              {uni.web_pages[0]}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UniCard;
