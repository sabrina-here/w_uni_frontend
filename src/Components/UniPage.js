import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import UniCard from "./UniCard";
import Pagination from "./Pagination";
import "../Styles/UniPage.css";

function UniPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(15);
  const [countryInfo, setCountryInfo] = useState({});
  const universities = useLoaderData();
  console.log(universities);

  // ------------ getting current cards ---------------
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = universities.slice(indexOfFirstCard, indexOfLastCard);

  // ------------------changing page handler--------------------
  const handlePaginate = (pageNumber) => setCurrentPage(pageNumber);

  // -------------------changing page with arrows handler-----------
  const handleNextPaginate = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrevPaginate = () => setCurrentPage(currentPage - 1);

  useEffect(() => {
    const countryName = universities[0].country;
    fetch(`http://localhost:5000/country/${countryName}`)
      .then((res) => res.json())
      .then((data) => setCountryInfo(data));
  }, []);

  return (
    <>
      <div className="container country-info border mt-5">
        <div className="m-4 border">
          <h4 className="fw-bold">Country: {countryInfo.name.common}</h4>
        </div>
      </div>
      <div>
        <div className="card-grid container mt-5 ps-5">
          {currentCards.map((uni) => (
            <UniCard key={uni._id} uni={uni}></UniCard>
          ))}
        </div>
        <div className="my-4">
          <Pagination
            currentPage={currentPage}
            cardsPerPage={cardsPerPage}
            totalCards={universities.length}
            handlePaginate={handlePaginate}
            handleNextPaginate={handleNextPaginate}
            handlePrevPaginate={handlePrevPaginate}
          ></Pagination>
        </div>
      </div>
    </>
  );
}

export default UniPage;
