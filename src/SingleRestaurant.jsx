import React from "react";
import { useParams, Link } from "react-router-dom";
import restaurants from "../../data/restaurants";
import "./SingleRestaurant.css";

const SingleRestaurant = () => {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === parseInt(id));

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div className="single-restaurant">
      <img src={restaurant.image} alt={restaurant.name} />
      <h2>{restaurant.name}</h2>
      <a href={restaurant.link} target="_blank" rel="noreferrer">
        Visit Site
      </a>
      <br />
      <Link to="/">⬅ Back</Link>
    </div>
  );
};

export default SingleRestaurant;