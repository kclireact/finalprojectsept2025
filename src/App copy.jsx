import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import RestaurantList from "./components/RestaurantList/RestaurantList";
import SingleRestaurant from "./components/SingleRestaurant/SingleRestaurant";

import restaurants from "./data/restaurants";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<RestaurantList restaurants={restaurants} />} />
          <Route path="/restaurant/:id" element={<SingleRestaurant />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;