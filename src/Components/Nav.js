import React, { useRef, useState } from "react";
import "../Styles/Nav.css";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const [searchedName, setSearchedName] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const handleSetSearchedName = (event) => {
    setSearchedName(event.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchedName);
    navigate(`/searchedUniPage/${searchedName}`);
    inputRef.current.value = "";
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand text-purple fw-bold" to="/">
            World Universities
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/allUnis" className="nav-link" href="#">
                  Universities
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 border-purple"
                type="search"
                placeholder="Search by University"
                aria-label="Search"
                onChange={handleSetSearchedName}
                ref={inputRef}
              />
              <button
                className="btn btn-outline text-purple border-purple"
                type="submit"
                onClick={handleSearch}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
