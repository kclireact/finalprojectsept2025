import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RestaurantList.css";

const RestaurantList = ({ restaurants }) => {
  const [votes, setVotes] = useState(() =>
    restaurants.reduce((acc, r) => ({ ...acc, [r.id]: 0 }), {})
  );

  const handleVote = (id) => {
    setVotes((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} className="restaurant-card">
          <img src={restaurant.image} alt={restaurant.name} />
          <h3>{restaurant.name}</h3>
          <div className="actions">
            <button onClick={() => handleVote(restaurant.id)}>👍 Vote</button>
            <span>{votes[restaurant.id]} votes</span>
          </div>
          <a href={restaurant.link} target="_blank" rel="noreferrer">
            Visit Site
          </a>
          <Link to={`/restaurant/${restaurant.id}`} className="details">
            Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;