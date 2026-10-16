import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaHome, FaShoppingCart, FaPhone } from "react-icons/fa";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 


 export function Header({Filterproducts}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filtered, setFiltered] = useState([]);


  return (
    <div>
    <div className="header-container">
  <div className="header-title">
    <h2>
      BAKE MY CAKE    </h2> <br />
      <h4>celebrate your moment</h4>
  </div>

  <div className="header-icons">
    <Link to="/">
        <FaHome className="icon" />
        </Link>
        <FaShoppingCart className="icon" />
        <FaPhone className="icon" />
      </div>
    </div>

<div className="header22">
      {/* Menu button (mobile only) */}
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰ Menu
      </button>

      {/* Navigation */}
       <div className={`header2 ${menuOpen ? "show" : ""}`}>
          <a href="#" onClick={() => Filterproducts("ALL")}>ALL</a>
          <a href="#" onClick={() => Filterproducts("CAKES")}>CAKES</a>
          <a href="#" onClick={() => Filterproducts("CUP CAKES")}>CUP CAKES</a>
          <a href="#" onClick={() => Filterproducts("CHEESE CAKES")}>CHEESE CAKES</a>
          <a href="#" onClick={() => Filterproducts("COOKIES")}>COOKIES</a>
          <a href="#" onClick={() => Filterproducts("BROWNIES")}>BROWNIES</a>
          <a href="#" onClick={() => Filterproducts("CHOCOLATES")}>CHOCOLATES</a>
        </div>
    </div>
    </div>
  
  );
}

export default Header;