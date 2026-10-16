import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Main from "./Main";
import Cakelist from "./Cakelist";
import Singlecard from "./Singlecard";

function App() {
  const [cakes, setCakes] = useState([]);
  const [filtered, setFiltered] = useState([]);








  
  // Load all cakes from backend or JSON Server
  useEffect(() => {
    axios
      .get("http://localhost:5000/cakes")
      .then((res) => {
        setCakes(res.data);
        setFiltered(res.data); // show all initially
      })
      .catch((err) => console.error("Error fetching cakes:", err));
  }, []);

  // Filter function
  const Filterproducts = (category) => {
    if (category === "ALL") {
      setFiltered(cakes);
    } else {
      const result = cakes.filter(
        (cake) => cake.category.toUpperCase() === category
      );
      setFiltered(result);
    }
    
  };

  return (
    <BrowserRouter>
      <Header Filterproducts={Filterproducts} />
      <main>
        <Routes>
          <Route path="/" element={<Home cakes={filtered} />} />
          <Route path="/main" element={<Main />} />
          <Route path="/cakes" element={<Cakelist cakes={filtered} />} />
          <Route path="/sc/:id" element={<Singlecard />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
