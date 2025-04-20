import React, { useEffect, useState } from "react";
import { Alert, Button, Modal, Carousel } from "react-bootstrap";
import styles from "../styles/Favorites.module.css";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [quoteToRemove, setQuoteToRemove] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(favs);
  }, []);

  const confirmRemove = (quote) => {
    setQuoteToRemove(quote);
    setShowModal(true);
  };

  const handleRemove = () => {
    const updated = favourites.filter((q) => q.quote !== quoteToRemove.quote);
    localStorage.setItem("favourites", JSON.stringify(updated));
    setFavourites(updated);
    setShowModal(false);
    setShowAlert(true);

    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <section className="section-app container py-4">
      <h1 className={`mb-4 ${styles["favorite-title"]}`}>Favourites Quotes</h1>

      {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          Quote removed from favourites.
        </Alert>
      )}

      {favourites.length === 0 ? (
        <p className={`${styles["no-favorite"]}`}>
          No favourites yet <i class="bi bi-emoji-frown"></i>
        </p>
      ) : (
        <Carousel
          className={styles["quote-carousel"]}
          interval={null} // disable auto-slide
          indicators={favourites.length > 1}
          nextLabel=""
          prevLabel=""
        >
          {favourites.map((quote, index) => (
            <Carousel.Item key={index}>
              <div key={index} className={styles["quote-box"]}>
                <h2 className={styles["quote-title"]}>Favourite Quote</h2>
                <p className={styles.quote}>
                  <i className="bi bi-chat"></i> "{quote.quote}"
                </p>
                <p className={styles.author}>— {quote.author}</p>
                <button
                  className={styles["btn-remove"]}
                  onClick={() => confirmRemove(quote)}
                >
                  Remove
                </button>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className={`${styles["modal-header"]}`}>
          <Modal.Title>
            Delete Favorite Quotes <i class="bi bi-check-circle"></i>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={`${styles["modal-box"]}`}>
          Are you sure you want to remove this quote from your favourites?
        </Modal.Body>
        <Modal.Footer className={`${styles["modal-box"]}`}>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleRemove}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Favourites;
