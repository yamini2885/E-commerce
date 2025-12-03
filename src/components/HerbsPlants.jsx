import React, { useEffect, useState } from "react";
import "./HerbsPlants.css";


const ITEMS_PER_PAGE = 12;

const HerbsPlants = () => {
  const [plants, setPlants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPlant, setSelectedPlant] = useState(null);

  useEffect(() => {
    fetch("/db/HerbsPlants.json")
      .then((res) => res.json())
      .then((data) => setPlants(data.HerbsPlants))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  const totalPages = Math.ceil(plants.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPlants = plants.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="herbs-container">

      {/* Change banner image for herbs */}
      <div
        className="banner"
        
      ></div>

      {/* Products Grid */}
      <div className="plants-grid">
        {currentPlants.map((item, index) => (
          <div key={index} className="plant-card">

            <div className="discount-badge">-{item.discount_percent}%</div>

            <img src={item.img_url} className="plant-img" alt={item.common_name} />

            <p className="plant-title">{item.common_name}</p>

            <div className="price-box">
              <span className="old-price">Rs. {item.price}</span>
              <span className="new-price">Rs. {item.selling_price}</span>
            </div>

            <div className="rating-stars">
              {"★".repeat(Math.floor(item.rating))}
            </div>

            <div className="button-row">
              <button
                className="btn-icon view-btn"
                onClick={() => setSelectedPlant(item)}
              >
                <i className="bi bi-info-circle"></i>
              </button>

              <button className="btn-icon cart-btn">
                <i className="bx bx-cart"></i>
              </button>

              <button className="btn-icon buy-btn">Buy</button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          {"<"}
        </button>

        {Array.from({ length: 3 }).map((_, i) => {
          const page = currentPage - 1 + i;
          if (page < 1 || page > totalPages) return null;

          return (
            <button
              key={page}
              className={currentPage === page ? "active" : ""}
              onClick={() => goToPage(page)}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
      </div>

      {/* RIGHT SIDE DETAILS PANEL */}
      {selectedPlant && (
        <div className="details-overlay" onClick={() => setSelectedPlant(null)}>
          <div className="details-panel" onClick={(e) => e.stopPropagation()}>

            <button className="close-btn" onClick={() => setSelectedPlant(null)}>✕</button>

            <h2 className="detail-title">{selectedPlant.common_name}</h2>
            <p className="detail-sci"><i>{selectedPlant.scientific_name || "Scientific name not available"}</i></p>

            <h3>Description</h3>
            <p className="desc">{selectedPlant.description}</p>

            <h3>Benefits</h3>
            <ul className="list-box">
              {selectedPlant.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <h3>Steps to Grow</h3>
            <ul className="list-box">
              {selectedPlant.steps_to_grow.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>

            <div className="details-price">
              <span className="old">Rs. {selectedPlant.price}</span>
              <span className="new">Rs. {selectedPlant.selling_price}</span>
            </div>

            <div className="details-rating">
              {"★".repeat(Math.floor(selectedPlant.rating))}
            </div>

            {/* 2 fixed buttons */}
            <div className="details-btn-row">
              <button className="cart-btn-big">
                <i className="bx bx-cart"></i> Add to Cart
              </button>
              <button className="buy-now-big">Buy Now</button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default HerbsPlants;
