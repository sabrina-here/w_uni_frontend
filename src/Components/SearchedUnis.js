import React, { useState } from "react";
import { useLoaderData } from "react-router";
import UniCard from "./UniCard";
import Pagination from "./Pagination";

function SearchedUnis() {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(15);
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

  return (
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
  );
}

export default SearchedUnis;
