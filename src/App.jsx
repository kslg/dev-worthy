import React from "react";
import "./App.css";
import NavBar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import QuoteCard from "./components/QuoteCard.jsx";

function App() {
  return (
    <>
      <NavBar />
      <main className="container-main">
        <QuoteCard />

      </main>
      <Footer />
    </>
  );
}

export default App;
