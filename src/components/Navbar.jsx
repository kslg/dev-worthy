import React from "react";
import styles from "/src/styles/NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg px-3 ${styles.navWrapper}`}>
        <a
          className={`navbar-brand d-flex align-items-center ${styles.brand}}`}
          href="/"
        >
          <img
            src="src/assets/images/dev-worthy-logo.png"
            className={`me-2 ${styles.logo} `}
          />
          <span className={`${styles.brandText}`}>Dev Worthy</span>
        </a>
        <button
          className={`navbar-toggler ${styles.toggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon ${styles.togglerIcon}`}></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className={styles.navLink} href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={styles.navLink} href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className={styles.navLink} href="#favourites">
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
