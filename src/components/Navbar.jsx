import React, { useRef } from "react";
import { Link } from "react-router-dom";

import styles from "../styles/Navbar.module.css";
import logo from "../assets/images/dev-worthy-logo.png";

const NavBar = () => {
  // Create a ref to access the navbar collapse element
  const navbarToggler = useRef(null);
  const navbarCollapse = useRef(null);

  // Function to close the navbar when a link is clicked
  const closeNavbar = () => {
    // Check if the navbar is expanded (visible on mobile)
    if (navbarCollapse.current && navbarCollapse.current.classList.contains('show')) {
      // Use Bootstrap's built-in method to collapse the navbar
      navbarToggler.current.click();
    }
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg px-3 ${styles.navWrapper}`}>
        <Link
          className={`navbar-brand d-flex align-items-center ${styles.brand}`}
          to="/"
          onClick={closeNavbar}
        >
          <img
            src={logo}
            alt="DevWorthy logo"
            className={`me-2 ${styles.logo}`}
          />
          <span className={`${styles.brandText}`}>Dev Worthy</span>
        </Link>
        <button
          ref={navbarToggler}
          className={`navbar-toggler ${styles.toggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className={styles.customTogglerIcon}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div
          ref={navbarCollapse}
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={styles.navLink} to="/" onClick={closeNavbar}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={styles.navLink} to="/about" onClick={closeNavbar}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className={styles.navLink} to="/favourites" onClick={closeNavbar}>
                Favourites
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;