import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css"; // or use a module

const NotFound = () => (
  <div className="not-found">
    <h1>404</h1>
    <p>Page not found.</p>
    <Link to="/">Back to Home</Link>
  </div>
);

export default NotFound;