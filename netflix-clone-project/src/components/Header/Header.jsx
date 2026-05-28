import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <>
      <header class="navbar">
        <div class="logo">NETFLIX</div>

        <nav class="nav-links">
          <a href="#">Home</a>
          <a href="#">TV Shows</a>
          <a href="#">Movies</a>
          <a href="#">New & Popular</a>
          <a href="#">My List</a>
        </nav>

        <div class="right-section">
          <button class="sign-in">Sign In</button>
        </div>
      </header>
    </>
  );
};

export default Header;
