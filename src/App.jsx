import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import QuoteCard from "./components/QuoteCard.jsx";
import Credits from "./pages/Credits.jsx";
import Favourites from "./pages/Favourites.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <>
      <NavBar />
      {/* Background content */}
      <div className="video-background">
        <video autoPlay muted loop playsInline>
          <source
            src="https://cdn.coverr.co/videos/coverr-cinematic-snowy-mountains-7615/720p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="overlay" />
      </div>


      {/* Foreground content */}
      <main className="container-main">
        <Routes>
          <Route path="/" element={<QuoteCard />} />
          <Route path="about" element={<Credits />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="*" element={<NotFound />} /> {/* <-- This is the 404 route */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
