import React, { useEffect, useState } from "react";
import "./PlantAccessories.css"; // same CSS reused

const ITEMS_PER_PAGE = 12;

const PlantAccessories = () => {
  const [accessories, setAccessories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch("/db/PlantAccessories.json")
      .then((res) => res.json())
      .then((data) => setAccessories(data.PlantAccessories))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  const totalPages = Math.ceil(accessories.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = accessories.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="indoor-container">

      <div className="banner"></div>

      <div className="plants-grid">
        {currentItems.map((item, index) => (
          <div key={index} className="plant-card">

            <div className="discount-badge">-{item.discount_percent}%</div>

            <img src={item.img_url} className="plant-img" alt={item.name} />

            <p className="plant-title">{item.name}</p>

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
                onClick={() => setSelectedItem(item)}
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

      {/* PAGINATION */}
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

      {/* DETAILS SIDEBAR */}
      {/* DETAILS SIDEBAR */}
{selectedItem && (
  <div className="details-overlay" onClick={() => setSelectedItem(null)}>
    <div className="details-panel" onClick={(e) => e.stopPropagation()}>
      
      <button className="close-btn" onClick={() => setSelectedItem(null)}>
        ✕
      </button>

      <h2 className="detail-title">{selectedItem.name}</h2>
      <p className="detail-sci">{selectedItem.category}</p>

      <h3>Description</h3>
      <p className="desc">{selectedItem.description}</p>

      <h3>Benefits</h3>
      <ul className="list-box">
        {selectedItem.benefits.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      <h3>Usage Steps</h3>
      <ul className="list-box">
        {selectedItem.usage_steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <div className="details-price">
        <span className="old">Rs. {selectedItem.price}</span>
        <span className="new">Rs. {selectedItem.selling_price}</span>
      </div>

      <div className="details-rating">
        {"★".repeat(Math.floor(selectedItem.rating))}
      </div>

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

export default PlantAccessories;
