import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const toggleTheme = () => {
    const body = document.querySelector("body");
    const currentTheme = body.getAttribute("data-theme");
    body.setAttribute("data-theme", currentTheme === "light" ? "dark" : "light");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        3 4 D Park Restaurant Voting
      </Link>
      <button className="toggle-btn" onClick={toggleTheme}>
        🌗 Toggle
      </button>
    </nav>
  );
};

export default Navbar;