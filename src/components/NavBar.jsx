import React, { useState } from "react";
import "./NavBar.css";
import FloraHarborWord from "../assets/FloraHarborWord.png";
import Earth_Logo from "../assets/Earth_Logo.png";
import { Link } from 'react-router-dom';
import axios from "axios"

// Main categories with subcategories
const categories = [
  {
    name: "Indoor Plants",
    sub: ["Ferns", "Palms", "Money Plants", "Lucky Bamboo", "Bonsai", "Air Purifying Plants"],
  },
  {
    name: "Outdoor Plants",
    sub: ["Shrubs", "Trees", "Climbers & Vines", "Ornamental Grasses", "Hedge Plants"],
  },
  {
    name: "Flowering Plants",
    sub: ["Roses", "Hibiscus", "Jasmine", "Marigold", "Orchids", "Bougainvillea"],
  },
  {
    name: "Fruits & Vegetables",
    sub: ["Tomato, Chili, Brinjal", "Strawberry, Papaya", "Lemon, Orange", "Berry Plants"],
  },
  {
    name: "Herbs",
    sub: ["Basil (Tulsi)", "Mint", "Rosemary", "Thyme", "Oregano"],
  },
  {
    name: "Succulents & Cacti",
    sub: ["Aloe Vera", "Echeveria", "Cactus varieties", "Jade Plant"],
  },
  {
    name: "Seeds",
    sub: ["Flower seeds (Marigold, Sunflower)", "Vegetable seeds (Tomato, Carrot)"],
  },
  {
    name: "Bulbs",
    sub: ["Bulbs (Tulips, Daffodils)"],
  },
];

function NavBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    console.log("Searching:", searchTerm);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar__logo">
          <img src={Earth_Logo} alt="Logo" className="logo-img" />
          <img src={FloraHarborWord} alt="Brand" className="logo-img" />
        </div>

        <div className="navbar__right">
          <form className="navbar__search" onSubmit={onSearch}>
            <input
              type="text"
              placeholder="Search plants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
          <div className="navbar__auth">
            <Link to="/login"><button className="login-btn">Login</button></Link>
            <Link to="/signup"><button className="signup-btn">Sign Up</button></Link>
          </div>
        </div>
      </nav>

      {/* Sub-navbar / Mega menu */}
      <div className="subnav">
        {categories.map((cat) => (
          <div key={cat.name} className="subnav__item">
            <span className="category-name">{cat.name}</span>
            <div className="subnav__dropdown">
              {cat.sub.map((subItem) => (
                <span key={subItem} className="subnav__subitem">
                  {subItem}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default NavBar;
