import React from "react";

const NavBar = () => {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <a className="navbar-brand d-flex align-items-center" href="/">
        <img
          src="src/assets/images/dev-worthy-logo.png"
          alt="Logo"
          height="100"
          className="me-2"
        />
        Dev Worthy
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#favourites">
              Favourites
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
};


export default NavBar;
